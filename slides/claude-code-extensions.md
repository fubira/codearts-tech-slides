---
marp: true
theme: plato
paginate: true
---

<!-- _class: titlepage -->

# Claude Code 機能拡張ガイド

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

LLMが**外部の情報やサービス**にアクセスするためのインターフェース

Anthropicが開発、標準化を進めておりChatGPTもサポート

---

# MCP の課題

1. **インストールが手間**
   - docker/npx/uvx等でサーバーを起動
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

`SKILL.md` ファイルで定義した専門知識を
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

**マーケットプレイスで配布**される拡張機能

Skillsは個人/チーム向け、Pluginsは広く公開向け

---

# Plugins の使い方

`/plugins` コマンドでマーケットプレイスから導入

```text
/plugins
```

公式リポジトリ:
[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code/tree/main/plugins)

---

# おすすめ: frontend-design

デフォルトのClaude Codeは**味気ないUI**を作りがち

frontend-designを通すと
**リッチなデザイン**を自動で生成

---

<!-- _class: transition -->

# まとめ

---

# 3つの拡張機能

| | 用途 | 導入方法 |
|---|------|---------|
| **MCP** | 外部と連携 | サーバー起動+設定 |
| **Skills** | 専門知識を定義 | 自作/チーム共有 |
| **Plugins** | 動作の拡張 | マーケットプレイス |
