import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const dynamic = 'force-static';

export const metadata: Metadata = { title: 'Support', alternates: { canonical: '/en/support/' } };

export default function SupportPage() {
  return <LegalPage locale="en" title="Support" intro="Common questions and checks when you need help with TidyTap.">
    <section><h2>My photos do not appear</h2><p>Check Android Settings and confirm that TidyTap has permission to access photos. If you granted access to selected photos only, TidyTap can display only that selection.</p></section>
    <section><h2>Does sorting move a photo immediately?</h2><p>No. Tapping an album creates a pending change. The device is changed only after you choose Apply and approve any Android confirmation.</p></section>
    <section><h2>I want to undo an action</h2><p>Use Undo on the Sort screen before applying changes. Photo moves and deletions are not covered by TidyTap Undo after Apply.</p></section>
    <section><h2>I want to restore Unlimited</h2><p>Sign in to Google Play with the Google account used for purchase, then choose Restore Purchase from TidyTap Settings or the paywall.</p></section>
    <section><h2>Contact</h2><p>Support: <code>CONTACT_EMAIL</code> (replace with a valid address before the Google Play release). Include your device model, Android version, and the screen where the issue occurred. You do not need to send the photo itself.</p></section>
  </LegalPage>;
}
