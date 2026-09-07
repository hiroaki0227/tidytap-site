import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const dynamic = 'force-static';

export const metadata: Metadata = { title: '利用規約', alternates: { canonical: '/terms/' } };

export default function TermsPage() {
  return <LegalPage locale="ja" title="利用規約" intro="TidyTapを安心して利用するための基本条件です。">
    <section><h2>サービス</h2><p>TidyTapは、Android端末内の写真について、移動・削除の予定を作成し、ユーザーの確認後にAndroidへ反映を要求するユーティリティです。ギャラリー、クラウド保管、バックアップサービスではありません。</p></section>
    <section><h2>写真操作</h2><p>仕分け内容は「適用」するまで端末の写真へ反映されません。適用後の移動や削除はUndoでは戻せない場合があります。重要な写真は、適用前に別の場所へバックアップしてください。Androidや端末メーカーの確認画面が表示された場合は、内容を確認して操作してください。</p></section>
    <section><h2>無料利用とUnlimited</h2><p>無料ではユニークな写真100枚まで仕分けできます。UnlimitedはGoogle Playの非消耗型買い切り商品で、写真枚数の制限を解除します。サブスクリプションではありません。商品価格と購入条件はGoogle Play上の表示が優先されます。</p></section>
    <section><h2>購入・復元・返金</h2><p>購入処理、購入復元、返金はGoogle Playの仕組みとポリシーに従います。購入状態の確認に一時的な通信が必要になる場合があります。確認済みのUnlimited状態は、通常のオフライン整理を妨げないため端末へキャッシュされます。</p></section>
    <section><h2>禁止事項</h2><p>アプリの不正利用、セキュリティ機能の回避、法令または第三者の権利を侵害する目的での利用を禁止します。</p></section>
    <section><h2>提供と責任</h2><p>Roomel Studioは品質向上に努めますが、すべての端末、Androidの変更、外部ストレージ状態で完全な動作を保証するものではありません。ユーザーは適用内容を確認し、必要なバックアップを行う責任を負います。法令で認められない責任を制限するものではありません。</p></section>
    <section><h2>変更</h2><p>機能や法令の変更に応じて本規約を更新する場合があります。重要な変更は、このWebsiteまたはアプリ内で案内します。</p></section>
  </LegalPage>;
}
