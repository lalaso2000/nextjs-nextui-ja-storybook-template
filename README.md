# nextjs-nextui-ja-storybook-template

## 特徴

- [Next.js](https://nextjs.org/)
- [NextUI](https://nextui.org/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [storybook](https://storybook.js.org/)

を導入したテンプレート

## 参考文献

- https://zenn.dev/hungry_goat/articles/b7ea123eeaaa44
- https://reffect.co.jp/react/next-js-12-storybook

## 導入

開発マシンに`node` / `yarn`が必要です．

### versions

```
$ node -v
v16.17.0

$ yarn -v
1.22.19
```

[Volta](https://volta.sh/)を使うと固定できます．

### install

```bash
# モジュールのインストール
$ yarn
```

### commands

```bash
# 開発サーバー起動
$ yarn dev

# storybookの起動
$ yarn storybook

# ビルド
$ yarn build

# ビルドしたものを実行
$ yarn start

# コード整形
$ yarn lint
$ yarn format
```

## ディレクトリ

### public

この中に画像やフォントなど，静的ファイルを入れる

ここに置いたものはベース URL（/）から始まるコードで参照できる．

ここ以外に置いた静的ファイルは参照できないので注意！

[詳しくはこちら](https://nextjs.org/docs/basic-features/static-file-serving)

### src

ソースコードを入れる場所

- pages: Next.js のページが入る，このファイル名が URL になる
- components: コンポーネントを入れる場所．storybook の story ファイルも同じ場所に入れる．
- utils: 雑関数
