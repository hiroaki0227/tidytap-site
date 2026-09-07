import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const dynamic = 'force-static';

export const metadata: Metadata = { title: 'サポート', alternates: { canonical: '/support/' } };

export default function SupportPage() {
  return <LegalPage locale="ja" title="サポート" intro="TidyTapのよくある質問と、困ったときの確認事項です。">
    <section><h2>写真が表示されない</h2><p>Androidの設定でTidyTapに写真へのアクセスが許可されているか確認してください。一部の写真のみを許可した場合、許可した範囲だけが表示されます。</p></section>
    <section><h2>仕分けただけで写真は移動しますか？</h2><p>移動しません。Albumをタップした段階では変更予定として保存され、「適用」を選んだ後に端末へ反映されます。</p></section>
    <section><h2>操作を戻したい</h2><p>適用前ならSort画面のUndoを使用できます。適用後のファイル移動や削除はTidyTapのUndo対象外です。</p></section>
    <section><h2>Unlimitedを復元したい</h2><p>購入時と同じGoogleアカウントでGoogle Playへログインし、TidyTapの設定またはPaywallから「購入を復元」を選んでください。</p></section>
    <section><h2>お問い合わせ</h2><p>サポート：<code>CONTACT_EMAIL</code>（Google Play公開前に有効なメールアドレスへ置換します）。問い合わせ時は端末名、Androidバージョン、問題が起きた画面を添えてください。写真そのものを送る必要はありません。</p></section>
  </LegalPage>;
}
