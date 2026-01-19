#!/usr/bin/env node

/**
 * slides/ 内の .md ファイルからタイトルと説明を抽出して
 * index.html を自動生成するスクリプト
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SLIDES_DIR = path.join(__dirname, '..', 'slides');
const TEMPLATE_DIR = path.join(__dirname, '..', 'templates');
const OUTPUT_DIR = path.join(__dirname, '..', 'dist');

/**
 * Gitから最終更新日を取得
 */
function getLastModified(filePath) {
  try {
    const result = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: 'utf-8',
      cwd: path.dirname(filePath),
    }).trim();
    return result ? new Date(result) : fs.statSync(filePath).mtime;
  } catch {
    // Gitが使えない場合はファイルの更新日時を使用
    return fs.statSync(filePath).mtime;
  }
}

/**
 * 日付を YYYY/MM/DD 形式でフォーマット
 */
function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}/${m}/${d}`;
}

/**
 * Markdownファイルからタイトルと説明を抽出
 */
function extractSlideInfo(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.md');
  const lastModified = getLastModified(filePath);

  // タイトルページの # から始まる行を探す
  const lines = content.split('\n');
  let title = fileName;
  let description = '';
  let foundTitle = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 最初の # で始まる行がタイトル
    if (!foundTitle && line.startsWith('# ')) {
      title = line.replace(/^#\s+/, '');
      foundTitle = true;

      // 次の非空行が説明
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim();
        if (nextLine && !nextLine.startsWith('#') && !nextLine.startsWith('---') && !nextLine.startsWith('<!--')) {
          description = nextLine;
          break;
        }
      }
      break;
    }
  }

  return {
    fileName,
    title,
    description,
    lastModified,
    lastModifiedFormatted: formatDate(lastModified),
  };
}

/**
 * スライドカードのHTMLを生成
 */
function generateSlideCard(slide) {
  return `      <li class="slide-card">
        <a href="${slide.fileName}.html">
          <div class="slide-title">${slide.title}</div>
          <div class="slide-meta">
            <span class="slide-description">${slide.description}</span>
            <span class="slide-date">${slide.lastModifiedFormatted}</span>
          </div>
        </a>
      </li>`;
}

// メイン処理
function main() {
  // dist ディレクトリがなければ作成
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // slides/ 内の .md ファイルを取得
  const mdFiles = fs
    .readdirSync(SLIDES_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.join(SLIDES_DIR, file));

  if (mdFiles.length === 0) {
    console.error('No markdown files found in slides/');
    process.exit(1);
  }

  // 各ファイルから情報を抽出し、更新日時の降順でソート
  const slides = mdFiles
    .map(extractSlideInfo)
    .sort((a, b) => b.lastModified - a.lastModified);

  // テンプレートを読み込み
  const templatePath = path.join(TEMPLATE_DIR, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  // スライドカードを生成してテンプレートに埋め込み
  const slideCards = slides.map(generateSlideCard).join('\n');
  const html = template.replace('{{SLIDES}}', slideCards);

  // HTML を出力
  const outputHtmlPath = path.join(OUTPUT_DIR, 'index.html');
  fs.writeFileSync(outputHtmlPath, html, 'utf-8');

  // CSS をコピー
  const cssSource = path.join(TEMPLATE_DIR, 'index.css');
  const cssDestination = path.join(OUTPUT_DIR, 'index.css');
  fs.copyFileSync(cssSource, cssDestination);

  console.log(`Generated ${outputHtmlPath}`);
  console.log(`Copied ${cssDestination}`);
  console.log(`Found ${slides.length} slides:`);
  slides.forEach((s) => console.log(`  - ${s.title}`));
}

main();
