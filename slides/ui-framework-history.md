---
marp: true
theme: plato
paginate: true
---

<!-- _class: titlepage -->

# UIフレームワークの変遷

CSSフレームワークからコンポーネントライブラリへ

---

# 3つの時代

1. **CSSフレームワーク時代** - 2011〜2017
2. **ユーティリティファースト時代** - 2017〜
3. **コンポーネントライブラリ時代** - 2014〜

→ 並行して進化、現在は**組み合わせ**が主流

---

<!-- _class: transition -->

# CSSフレームワーク時代

---

# CSSの課題（2010年代前半）

- ブラウザごとのスタイル差異
- 命名規則がバラバラ
- 再利用性が低い
- レスポンシブ対応が大変

→ 「車輪の再発明」が頻発

---

# Bootstrap登場（2011年）

**Twitter社が公開**、Web UIの標準に

- 12カラムグリッドシステム
- レスポンシブ対応
- 豊富なコンポーネント

```html
<div class="row">
  <div class="col-md-6">左カラム</div>
  <div class="col-md-6">右カラム</div>
</div>
```

---

# Bootstrapの功罪

<div class="columns">
<div>

**功**

- 開発速度の向上
- デザインの標準化
- 学習コストの低減

</div>
<div>

**罪**

- 似たサイトの量産
- カスタマイズ困難
- CSS肥大化

</div>
</div>

---

# CSS設計手法の登場

**課題**: クラス名がバラバラ、どこで使われてるか不明

**解決策**: 命名規則を統一しよう

- **BEM** → `.block__element--modifier`
- **OOCSS** → 構造とスキンを分離
- **SMACSS** → カテゴリで整理

→ 結局複雑に…Tailwindへ

---

<!-- _class: transition -->

# CSSの新しいアプローチ

---

# CSS Modules（2015年〜）

**コンポーネント単位でCSSをスコープ**

```jsx
import styles from './Button.module.css';
<button className={styles.button}>送信</button>
```

→ クラス名の衝突を自動で回避、設定不要で使える

---

# CSS-in-JS（2016年〜）

**JSの中にCSSを書く**（styled-components / Emotion）

```jsx
const Button = styled.button`
  background: blue;
`;
```

- 動的スタイルが得意
- ランタイムコストが課題

---

# Tailwind CSS（2017年）

**ユーティリティファースト**という発想

```html
<button class="bg-blue-500 text-white px-4 py-2">送信</button>
```

- 人気だが**HTMLが冗長**になりがち
- 好き嫌いが分かれる

---

# Panda CSS（2023年）

**CSS-in-JSの書き心地 + ビルド時生成**

```jsx
<button className={css({ bg: 'blue.500' })}>送信</button>
```

- Chakra UI作者が開発
- ランタイムコストなし、型安全

---

# CSSアプローチの比較

| アプローチ | 特徴 |
|------------|------|
| CSS Modules | スコープ付きCSS、シンプル |
| CSS-in-JS | 動的スタイル得意、ランタイムコスト |
| Tailwind | ユーティリティ、HTMLが冗長 |
| Panda CSS | 型安全、ゼロランタイム |

→ プロジェクトに応じて選択

---

<!-- _class: transition -->

# コンポーネントライブラリ時代

---

# React時代の到来

CSSだけでなく**JSとセットで**UIを提供

| ライブラリ | 特徴 | 登場 |
|------------|------|------|
| **Material UI** | Google発、Reactと統合 | 2014 |
| **Ant Design** | 中国Alibaba発、エンタープライズ向け | 2015 |
| **Chakra UI** | アクセシビリティ重視 | 2019 |

---

# Material UI（MUI）

**Googleのマテリアルデザイン**をReactで実装

- テーマカスタマイズ可能
- 豊富なコンポーネント（70種以上）
- TypeScript対応

→ エンタープライズで広く採用

---

# Chakra UI（2019年）

**アクセシビリティファースト**なReactライブラリ

```jsx
<Button colorScheme="blue" size="lg">送信</Button>
```

- WAI-ARIA準拠がデフォルト
- ダークモード対応が簡単
- MUIより軽量、カスタマイズしやすい

---

# コンポーネントライブラリの課題

1. **バンドルサイズ**が大きい
2. **スタイルの上書き**が難しい
3. **デザインの制約**を受ける
4. **破壊的変更**のリスク（v4→v5等）

→ 「見た目は借り物、ロジックは自前」がしたい

---

# Headless UIの登場

**スタイルなし、ロジックのみ**を提供

- **Radix UI**（WorkOS）
- **Headless UI**（Tailwind Labs）
- **React Aria**（Adobe）

→ アクセシビリティ・キーボード操作を担保、スタイルは自前

---

# shadcn/ui（2023年）

**「コピペして使う」** という新発想

- npmインストールではなく**ソースコードをコピー**
- Radix UI + Tailwind CSS ベース
- 完全にカスタマイズ可能

```bash
npx shadcn-ui add button
```

→ 「所有するUI」という考え方

---

<!-- _class: transition -->

# 現在地

---

# 主流: shadcn/ui

**Radix UI + Tailwind** のコピペ型コンポーネント

- コードを所有できる（npm依存なし）
- カスタマイズ自由
- v0.devとの相性◎

→ 2024〜2025年のデファクトスタンダード

---

# 軽量な選択肢

| ライブラリ | 特徴 |
|------------|------|
| **daisyUI** | Tailwind拡張、クラス名で完結 |
| **Park UI** | Ark UI + Panda CSS ベース |
| **Mantine** | 機能豊富、Tailwind不要 |
| **Ark UI** | Chakra系のHeadless UI |

→ Tailwindを使わない選択肢もある

---

# AI時代のUIフレームワーク

- **v0.dev** → プロンプトからshadcn/ui生成
- **Claude** → どのライブラリでも対応可能

→ UIフレームワークは**AIの語彙**になりつつある

---

<!-- _class: transition -->

# まとめ

---

# UIフレームワーク15年の変遷

```text
2011  Bootstrap      → CSSフレームワークの標準化
2014  Material UI    → React向けコンポーネント
2017  Tailwind CSS   → ユーティリティファースト
2019  Chakra UI      → アクセシビリティ重視
2021  Radix UI       → Headless コンポーネント
2023  shadcn/ui      → コピペ型 UI
```

**トレンド: 所有 > 依存、カスタマイズ > 制約**
