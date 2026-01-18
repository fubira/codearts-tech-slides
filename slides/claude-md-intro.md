---
marp: true
theme: plato
paginate: true
---

<!-- _class: titlepage -->

# Claude Code チューンナップ入門

CLAUDE.md 事始め

---

# 毎回同じ指示していませんか？

- 「語尾は〇〇で」
- 「TypeScriptで書いて」
- 「Reactを使っている」

---

# 解決策: CLAUDE.md

Claude Code 起動時に**自動で読み込まれる**設定ファイル

書いておけば、毎回指示しなくてOK

---

# 3つの配置場所

| 種類 | 場所 | 用途 |
|------|------|------|
| グローバル | `~/.claude/CLAUDE.md` | 全プロジェクト共通 |
| プロジェクト | `./CLAUDE.md` | チームで共有 |
| ローカル | `./CLAUDE.local.md` | 個人用 |

---

# グローバル設定の例

`~/.claude/CLAUDE.md`

```markdown
- 日本語で簡潔に回答
- 改行コードはLF
- コミット前にLint実行
```

→ すべてのプロジェクトで適用される

---

# プロジェクト設定の例

`./CLAUDE.md`

```markdown
## 技術スタック
TypeScript / React 19 / Vite

## スタイル
関数型 / Strict mode / 早期リターン
```

→ リポジトリにcommitでチーム共有

---

# 注意: 簡潔に保つ

CLAUDE.mdは**常にコンテキストを消費**する

長すぎると動作品質が低下

**必要最小限**に絞る

---

# Tips

メンテナンスもClaude Codeに任せる

```text
「CLAUDE.mdに〇〇を追加して」
「CLAUDE.mdを整理して」
```

---

<!-- _class: transition -->

# まとめ

---

# 3つのポイント

1. **自動読み込み**される設定ファイル

2. **3種類**の配置場所を使い分け

3. **簡潔に**保ってトークン節約
