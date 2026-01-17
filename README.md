# codearts-tech-docs

Lightning Talk スライドとテクニカルドキュメント用リポジトリ

## セットアップ

```bash
bun install
```

## 使い方

```bash
# ブラウザでプレビュー
bun run preview

# HTML出力
bun run build

# PDF出力
bun run build:pdf

# PPTX出力
bun run build:pptx
```

## 構成

```
slides/   # スライドファイル（.md）
assets/   # 画像等のアセット
dist/     # ビルド出力
```

## VS Code

推奨拡張機能: **Marp for VS Code**

Markdownファイルを開いて右上の「Preview」アイコンでスライドプレビュー可能
