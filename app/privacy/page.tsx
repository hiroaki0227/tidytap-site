import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const dynamic = 'force-static';

export const metadata: Metadata = { title: 'プライバシーポリシー', alternates: { canonical: '/privacy/' } };

export default function PrivacyPage() {
  return <LegalPage locale="ja" title="プライバシーポリシー" intro="TidyTapが扱う情報と、写真整理がどこで行われるかを説明します。">
    <section><h2>基本方針</h2><p>TidyTapは、端末内の写真をAndroidのアルバムへ整理するアプリです。写真をRoomel Studioのサーバーへアップロードしません。アカウント登録、広告、外部分析SDKはありません。</p></section>
    <section><h2>写真とメディアへのアクセス</h2><p>ユーザーが許可した場合、Android MediaStoreを通じて端末内の写真、アルバム名、保存場所などを読み取ります。写真は仕分け操作だけでは移動されず、ユーザーが「適用」を実行したときに、選択したアルバムへの移動または削除がAndroidへ要求されます。</p></section>
    <section><h2>端末内に保存する情報</h2><p>保留中の仕分け操作、作成したアルバムの情報、無料利用済み写真の識別子、Unlimited購入確認済み状態を端末内のデータベースまたは設定領域に保存します。無料利用履歴は写真そのものではなく、重複カウントを防ぐための識別情報です。</p></section>
    <section><h2>Google Play Billing</h2><p>Unlimitedの購入と復元にはGoogle Play Billingを使用します。支払い情報はGoogleが処理し、TidyTapは商品情報と購入状態を受け取ります。Roomel Studioがクレジットカード番号を取得することはありません。</p></section>
    <section><h2>外部送信</h2><p>TidyTap本体には独自サーバーへの写真送信機能、クラウド同期、アカウント、広告、利用状況分析機能はありません。設定画面の法的情報リンクを選ぶと、端末のブラウザーでこのWebsiteを開きます。</p></section>
    <section><h2>データの削除</h2><p>アプリをアンインストールすると、TidyTapが端末内に保存したデータベースと設定はAndroidによって削除されます。ただし、すでに端末へ適用した写真の移動、削除、作成済みアルバムは元に戻りません。</p></section>
    <section><h2>お問い合わせ</h2><p>問い合わせ先：<code>CONTACT_EMAIL</code>（Google Play公開前に有効なメールアドレスへ置換します）</p></section>
  </LegalPage>;
}
