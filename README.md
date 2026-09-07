# TidyTap website

TidyTapの公式Webサイト、プライバシーポリシー、利用規約、サポートページを管理する公開リポジトリです。Androidアプリ本体は非公開の`hiroaki0227/TidyTap`で別管理します。

## Routes

- `/` — 日本語トップ
- `/privacy/` — プライバシーポリシー
- `/terms/` — 利用規約
- `/support/` — サポート
- `/en/` — English home
- `/en/privacy/` — Privacy Policy
- `/en/terms/` — Terms of Use
- `/en/support/` — Support

## Local development

Node.js 22以降を使用します。

```text
npm ci
npm run lint
npm run dev
```

静的サイトは`npm run build`で`dist/client/`へ出力されます。

## GitHub Pages

`.github/workflows/pages.yml`は手動実行です。問い合わせ先は`roomel.studio@gmail.com`へ設定済みです。Actionsの「Deploy TidyTap website to GitHub Pages」を実行すると公開できます。

Custom Domainは`tidytap.roomelstudio.com`で、`public/CNAME`へ設定済みです。DNS側では次を設定します。

```text
Type: CNAME
Host: tidytap
Target: hiroaki0227.github.io
```

証明書の発行後、GitHub Pages設定でEnforce HTTPSを有効化します。
