import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const dynamic = 'force-static';

export const metadata: Metadata = { title: 'Terms of Use', alternates: { canonical: '/en/terms/' } };

export default function TermsPage() {
  return <LegalPage locale="en" title="Terms of Use" intro="These are the basic terms for using TidyTap safely.">
    <section><h2>The service</h2><p>TidyTap is an Android utility that schedules photo moves or deletions and requests Android to apply them after your confirmation. It is not a gallery replacement, cloud storage service, or backup service.</p></section>
    <section><h2>Photo operations</h2><p>Sorting decisions do not affect device files until you choose Apply. Moves or deletions may not be reversible through TidyTap after they are applied. Back up important photos first, and review any confirmation screen shown by Android or your device manufacturer.</p></section>
    <section><h2>Free use and Unlimited</h2><p>You can sort up to 100 unique photos for free. Unlimited is a one-time, non-consumable Google Play product that removes the photo limit. It is not a subscription. The price and purchase terms displayed by Google Play take precedence.</p></section>
    <section><h2>Purchases, restore, and refunds</h2><p>Purchases, restores, and refunds are handled under Google Play systems and policies. A temporary connection may be required to verify a purchase. A verified Unlimited state is cached locally so ordinary offline sorting is not interrupted.</p></section>
    <section><h2>Prohibited use</h2><p>You may not misuse the app, bypass security controls, or use it to violate applicable law or third-party rights.</p></section>
    <section><h2>Availability and responsibility</h2><p>Roomel Studio works to provide a reliable product but cannot guarantee operation across every device, Android change, or storage condition. You are responsible for reviewing changes and maintaining suitable backups. Nothing here limits liability that cannot legally be limited.</p></section>
    <section><h2>Changes</h2><p>These terms may be updated as the app or applicable requirements change. Material changes will be communicated through this Website or the app.</p></section>
  </LegalPage>;
}
