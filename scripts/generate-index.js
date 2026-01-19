#!/usr/bin/env node

/**
 * slides/ 内の .md ファイルからタイトルと説明を抽出して
 * index.html を自動生成するスクリプト
 */

const fs = require('fs');
const path = require('path');

const SLIDES_DIR = path.join(__dirname, '..', 'slides');
const TEMPLATE_DIR = path.join(__dirname, '..', 'templates');
const OUTPUT_DIR = path.join(__dirname, '..', 'dist');

/**
 * Markdownファイルからタイトルと説明を抽出
 */
function extractSlideInfo(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.md');

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
  };
}

/**
 * スライドカードのHTMLを生成
 */
function generateSlideCard(slide) {
  return `      <li class="slide-card">
        <a href="${slide.fileName}.html">
          <div class="slide-title">${slide.title}</div>
          <div class="slide-description">${slide.description}</div>
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

  // 各ファイルから情報を抽出
  const slides = mdFiles.map(extractSlideInfo);

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
