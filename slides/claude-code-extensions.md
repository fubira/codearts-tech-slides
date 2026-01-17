---
marp: true
theme: plato
paginate: true
---

<!-- _class: titlepage -->

# Claude Code チューンナップ入門 2

拡張機能を使いこなす

---

# Claude Code の拡張機能

3つの仕組みがある

- **MCP** - 外部サービス連携
- **Skills** - 自作の専門知識
- **Plugins** - 公開された拡張

---

<!-- _class: transition -->

# MCP

---

# MCP とは

AIが**外部の情報やサービス**にアクセスするためのインターフェース

様々なサービスがMCP対応し、一時期流行った

---

# MCP の課題

1. **インストールが手間**
   - 設定ファイルを書いて接続
   - 環境ごとに再設定が必要

2. **トークン消費が大きい**
   - 常にメモリ上に存在
   - ※最近は必要時のみ読み込む機能で改善中

---

# MCP の活用ポイント

**重要なものだけ最小限**で扱う

おすすめ: **serena MCP**
- LSPベースのセマンティック解析
- 正確なリファクタリング支援

---

<!-- _class: transition -->

# Skills

---

# Skills とは

`~/.claude/skills/` 内のmdファイルを
**必要な時だけ**読み込んで動作

→ 専門家として振る舞わせる仕組み

---

# Skills の例

| Skill | 用途 |
|-------|------|
| Git Commit Assistant | コミット時の注意点・メッセージ形式 |
| Code Reviewer | レビュー時の観点・指摘内容 |
| Refactoring Assistant | リファクタリングパターン |
| Release Assistant | リリース手順の標準化 |

---

# Skills のメリット

- **毎回指示しなくてOK**
- **手順のブレを防げる**
- 何度も呼び出す定型作業に最適

---

<!-- _class: transition -->

# Plugins

---

# Plugins とは

**公開された拡張機能**を取り込む仕組み

Skillsは自作、Pluginsは公開されたものを利用

---

# Plugins の使い方

`/plugin` コマンドでマーケットプレイスから導入

```
/plugin
```

公式リポジトリ:
github.com/anthropics/claude-code/tree/main/plugins

---

# おすすめ: frontend-plugin

デフォルトのClaude Codeは**味気ないUI**を作りがち

frontend-pluginを通すと
**リッチなデザイン**を自動で生成

---

<!-- _class: transition -->

# まとめ

---

# 3つの拡張機能

| 種類 | 特徴 | 用途 |
|------|------|------|
| **MCP** | 外部連携 | 最小限で運用 |
| **Skills** | 自作 | 定型作業の標準化 |
| **Plugins** | 公開 | 便利機能の導入 |

