import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const dynamic = 'force-static';

export const metadata: Metadata = { title: 'Privacy Policy', alternates: { canonical: '/en/privacy/' } };

export default function PrivacyPage() {
  return <LegalPage locale="en" title="Privacy Policy" intro="This page explains what TidyTap handles and where photo sorting takes place.">
    <section><h2>Our approach</h2><p>TidyTap organizes photos into Android albums on your device. It does not upload photos to a Roomel Studio server. There is no TidyTap account, advertising, or third-party analytics SDK.</p></section>
    <section><h2>Photo and media access</h2><p>With your permission, TidyTap uses Android MediaStore to read photos, album names, and storage locations. Sorting does not move a photo immediately. A move or deletion is requested from Android only when you choose Apply.</p></section>
    <section><h2>Information stored on your device</h2><p>TidyTap stores pending sorting operations, albums created through the app, identifiers for photos already counted toward free use, and a cached Unlimited entitlement in local app storage. Free-use records contain identifiers used to prevent duplicate counting, not copies of your photos.</p></section>
    <section><h2>Google Play Billing</h2><p>Unlimited purchases and restores use Google Play Billing. Google processes payment information; TidyTap receives product and purchase status information. Roomel Studio does not receive your card number.</p></section>
    <section><h2>External transmission</h2><p>TidyTap has no feature for uploading photos to our server, cloud synchronization, user accounts, advertising, or usage analytics. Selecting a legal link in Settings opens this Website in your device browser.</p></section>
    <section><h2>Deleting local data</h2><p>Uninstalling TidyTap removes its local database and settings through Android. It does not reverse photo moves or deletions already applied, and it does not remove albums already created on your device.</p></section>
    <section><h2>Contact</h2><p>Contact: <a href="mailto:roomel.studio@gmail.com">roomel.studio@gmail.com</a></p></section>
  </LegalPage>;
}
