---
marp: true
theme: plato
paginate: true
---

<!-- _class: titlepage -->

# フロントエンドの歴史

フレームワークの変遷を振り返る

---

# 4つの時代

1. **jQuery時代** - 2006〜2010
2. **MV*フレームワーク時代** - 2010〜2013
3. **コンポーネント時代** - 2013〜2020
4. **メタフレームワーク時代** - 2020〜現在

---

<!-- _class: transition -->

# jQuery時代

---

# 2000年代前半の課題

- ブラウザごとにAPIが異なる
- DOM操作が煩雑
- IE対応が地獄

```javascript
// ブラウザ判定が必須だった
if (document.all) { /* IE */ }
else if (document.layers) { /* Netscape */ }
```

---

# jQuery登場（2006年）

**"Write less, do more"**

- クロスブラウザ対応を吸収
- 直感的なDOM操作
- プラグインエコシステム

```javascript
// jQueryなら1行
$('.button').click(function() { ... });
```

---

<!-- _class: transition -->

# MV*フレームワーク時代

---

# SPAの登場

**Ajax**の普及でページ遷移なしのWebアプリが可能に

- **Backbone.js**（2010年）- 軽量MVC
- **AngularJS**（2010年）- Google製フルスタック
- **Ember.js**（2011年）- 規約重視

→ フロントエンドが**アプリケーション**になった

---

<!-- _class: transition -->

# コンポーネント時代

---

# React登場（2013年）

Facebook発、**Virtual DOM**で高速描画

- **コンポーネント指向**
- **単方向データフロー**
- **JSX**という新しい書き方

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}
```

---

# Vue.js登場（2014年）

Evan You氏が開発、**漸進的フレームワーク**

- 学習コストが低い
- テンプレート構文が直感的
- 小規模〜大規模まで対応

Angular 2（2016年）で**TypeScript**が主流に

---

# ビルドツールの進化

| 年代 | ツール | 特徴 |
|------|--------|------|
| 2012 | Grunt | タスクランナー |
| 2013 | Gulp | ストリーム処理 |
| 2014 | Webpack | モジュールバンドラー |
| 2020 | Vite | ESM + 高速HMR |

---

<!-- _class: transition -->

# メタフレームワーク時代

---

# Next.js / Nuxt / SvelteKit

**フレームワークの上のフレームワーク**

- SSR / SSG / ISR
- ファイルベースルーティング
- API Routes

→ React/Vue単体では足りない機能を提供

---

<!-- _class: transition -->

# 現在地

---

# 今注目されている技術

| 技術 | 概要 |
|------|------|
| **React Server Components** | サーバー/クライアント境界の再定義 |
| **Islands Architecture** | 部分的ハイドレーション |
| **エッジコンピューティング** | CDN上でアプリが動く |

フロントエンドは**フルスタック化**している

---

# React Server Components

コンポーネント単位でサーバー/クライアントを選択

```jsx
// サーバーコンポーネント - DBに直接アクセス可能
async function UserList() {
  const users = await db.query('SELECT * FROM users');
  return <ul>{users.map(u => <li>{u.name}</li>)}</ul>;
}
```

- JSバンドルサイズ削減
- データ取得がシンプルに

---

# Islands Architecture

静的HTMLに「インタラクティブな島」だけJS化

```text
+-------------------------------+
|     Static HTML (No JS)       |
|   +-------+     +-------+     |
|   | Island|     | Island|     |
|   |  (JS) |     |  (JS) |     |
|   +-------+     +-------+     |
+-------------------------------+
```

**Astro** が代表的な実装

---

# エッジコンピューティング

| サービス | 提供元 |
|----------|--------|
| Cloudflare Workers | Cloudflare |
| Vercel Edge Functions | Vercel |
| Deno Deploy | Deno |

ユーザーに近いサーバーで実行 → **低レイテンシ**

---

<!-- _class: transition -->

# 課題

---

# RSCの深刻な脆弱性

**CVE-2025-55182（React2Shell）** - CVSS 10.0

- 認証なしでリモートコード実行（RCE）が可能
- デフォルト設定のNext.jsアプリが攻撃対象
- 2025年12月に発見、即座に悪用が開始

新しいパラダイムは**新しい攻撃面**を生む

---

# 発見された脆弱性一覧

| CVE | 深刻度 | 内容 |
|-----|--------|------|
| CVE-2025-55182 | Critical | RCE（リモートコード実行） |
| CVE-2025-55184 | High | DoS攻撃 |
| CVE-2025-55183 | Medium | ソースコード漏洩 |

**対策**: React 19.0.3 / 19.1.4 / 19.2.3 以上へ更新

---

# 複雑化する技術スタック

**現在のフロントエンド開発に必要な知識**

- React/Vue + TypeScript
- SSR/SSG/ISRの使い分け
- サーバーコンポーネント
- エッジランタイム
- セキュリティ対策

→ 学習コスト・運用コストが**肥大化**

---

<!-- _class: transition -->

# これから

---

# シンプルさへの回帰

| フレームワーク | 特徴 |
|----------------|------|
| **Astro** | コンテンツ重視、必要な時だけJS |
| **Svelte** | コンパイル時最適化、軽量 |
| **Solid** | React風だがVirtual DOMなし |
| **HTMX** | HTMLだけでインタラクション |

「Reactでいいじゃん」からの**脱却が始まっている**

---

# HTMX：HTMLへの原点回帰

```html
<!-- クリックでサーバーからHTMLを取得して差し替え -->
<button hx-get="/api/users" hx-target="#list">
  Load Users
</button>
<div id="list"></div>
```

- JavaScriptを書かずにSPA的な体験
- サーバーサイドレンダリングとの相性◎
- 学習コストが**極めて低い**

---

# AI時代のフロントエンド

- **v0.dev** - プロンプトからUI生成
- **Claude Code** - AIペアプログラミング
- **GitHub Copilot** - コード補完

複雑な技術スタックも**AIが吸収**する時代へ

---

<!-- _class: transition -->

# まとめ

---

# フロントエンドの現在地

```text
発展中    RSC / Islands / Edge
  ↓
課題発生  脆弱性 / 複雑化 / 学習コスト
  ↓
次の波    シンプルさへの回帰 / AI活用
```

**銀の弾丸はない、状況に応じた選択を**

---

# フロントエンド20年の変遷

```text
2006  jQuery        → DOM操作の標準化
2010  AngularJS     → SPAフレームワーク
2013  React         → コンポーネント指向
2016  TypeScript    → 型安全の普及
2020  Vite/Next.js  → DX向上 / メタFW
2025  RSC/Islands   → サーバー回帰
```

**技術は変わり続ける、学び続けよう**
