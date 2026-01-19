# codearts-tech-slides

Lightning Talk スライド用リポジトリ

## セットアップ

```bash
bun install
```

## 使い方

```bash
# ブラウザでプレビュー
bun run preview

# HTML出力（dist/にindex.htmlも生成）
bun run build

# PDF出力
bun run build:pdf

# PPTX出力
bun run build:pptx

# Markdownのlintチェック
bun run lint:md
```

## テーマ

- **slate** - ダークネイビー + シャンパンゴールド（デフォルト）
- **plato** - ライト、テラコッタ + クリーム

```yaml
---
marp: true
theme: slate
paginate: true
---
```

## 構成

```text
slides/     # スライドファイル（.md）
themes/     # Marpテーマ（.css）
templates/  # インデックスページテンプレート
scripts/    # ビルドスクリプト
assets/     # 画像等のアセット
dist/       # ビルド出力
```

## VS Code

推奨拡張機能: **Marp for VS Code**

Markdownファイルを開いて右上の「Preview」アイコンでスライドプレビュー可能
