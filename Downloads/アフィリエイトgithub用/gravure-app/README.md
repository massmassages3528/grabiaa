# 日本寫真集精選 / 일본 그라비아 화보집

スマホ・PC両対応の日本グラビアアイドル写真集紹介サイト。

## 機能
- 📱 スマホ：iOS風ボトムシート + タブバー
- 🖥️ PC：サイドバー + 2〜4カラムグリッド
- 🌏 3言語対応（繁體中文・한국어・English）
- 🎬 YouTube IFrame API による動画再生（autoplay対応）
- 🛒 Amazon Associates アフィリエイトリンク

## セットアップ

```bash
npm install
npm run dev       # 開発サーバー → http://localhost:5173
npm run build     # dist/ に本番ビルド
npm run preview   # ビルド結果を確認
```

## デプロイ

### Vercel（推奨）
1. GitHub にプッシュ
2. vercel.com → New Project → Import
3. Framework: Vite を自動検出 → Deploy

### Netlify
```bash
npm run build
# dist/ フォルダを https://app.netlify.com/drop にドラッグ
```

## カスタマイズ

### Amazon Associates ID
`src/data.js` 1行目を変更：
```js
export const ASSOCIATE_ID = 'yoursite-22'  // ← あなたのIDに変更
```

### アイドルの追加・変更
`src/data.js` の `idols` 配列を編集。
`youtubeId` には YouTube動画ID（URLの `v=` 以降）を入れてください。

### ブレークポイント
`src/index.css` の `@media` クエリで変更可能：
- `900px` 以上 → サイドバー表示、3カラム
- `1200px` 以上 → 4カラム

## ファイル構成

```
src/
├── App.jsx               メインレイアウト（PC/SP 分岐）
├── data.js               アイドルデータ・Amazonリンク
├── i18n.js               多言語テキスト
├── index.css             レスポンシブCSS
├── main.jsx              エントリーポイント
└── components/
    ├── CoverImage.jsx    表紙画像（Google Books→Amazon フォールバック）
    ├── IdolCard.jsx      グリッドカード
    ├── DetailModal.jsx   詳細モーダル（PC: 左右分割 / SP: ボトムシート）
    └── YouTubePlayer.jsx YouTube IFrame API プレイヤー
```
