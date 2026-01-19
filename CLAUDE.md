# codearts-tech-slides

Lightning Talk スライド用リポジトリ。Marpを使用してMarkdownからスライドを生成する。

## 技術スタック

- **Marp**: Markdownベースのプレゼンテーションフレームワーク
- **Bun**: パッケージマネージャー・ランタイム
- **GitHub Pages**: デプロイ先

## ディレクトリ構成

```text
slides/      # スライドファイル（.md）
themes/      # Marpカスタムテーマ（.css）
templates/   # インデックスページテンプレート
scripts/     # ビルドスクリプト
assets/      # 画像等のアセット
dist/        # ビルド出力（.gitignore対象）
```

## 開発コマンド

```bash
bun run preview    # ブラウザでプレビュー
bun run build      # HTML出力 + インデックス生成
bun run build:pdf  # PDF出力
bun run build:pptx # PPTX出力
bun run lint:md    # markdownlint実行
```

## スライド作成規約

### フロントマター

```yaml
---
marp: true
theme: plato
paginate: true
---
```

### タイトルページ

```markdown
<!-- _class: titlepage -->

# スライドタイトル

サブタイトル（説明文）
```

- 最初の `#` 見出しがスライドタイトルとしてインデックスページに表示される
- 次の非空行が説明文として使用される

### 特殊スライドクラス

| クラス | 用途 |
|--------|------|
| `titlepage` | タイトルページ |
| `transition` | セクション区切り（背景色変更） |
| `dark` | ダークバリアント |
| `compact` | 文字サイズを小さく |
| `cite` | 引用ページ |
| `biblio` | 参考文献ページ |

### レイアウトクラス

| クラス | 用途 |
|--------|------|
| `columns` | 2カラムレイアウト |
| `columns3` | 3カラムレイアウト |

使用例:

```html
<div class="columns">
<div>

左カラムの内容

</div>
<div>

右カラムの内容

</div>
</div>
```

## テーマ（plato.css）

- カラースキーム: テラコッタ / クリーム
- フォント: Outfit（見出し）、Noto Sans JP（本文）、IBM Plex Mono（コード）
- シンタックスハイライト対応

## markdownlint設定

`.markdownlint.jsonc` でMarp向けにカスタマイズ済み:

- MD025: 複数h1を許可（各スライドで#使用）
- MD033: HTMLコメント許可（Marpディレクティブ用）
- MD036: 強調を見出し代わりに許可
- MD060: テーブルスタイル制限無効

## インデックス生成

`scripts/generate-index.js` が `slides/*.md` からタイトル・説明を抽出し、`dist/index.html` を自動生成する。

## CI/CD

- `main` ブランチへのプッシュで GitHub Pages に自動デプロイ
- ワークフロー: `.github/workflows/deploy.yml`
