import Link from 'next/link';

type Locale = 'ja' | 'en';

const labels = {
  ja: { privacy: 'プライバシー', terms: '利用規約', support: 'サポート', language: 'English' },
  en: { privacy: 'Privacy', terms: 'Terms', support: 'Support', language: '日本語' },
};

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const prefix = locale === 'en' ? '/en' : '';
  const home = locale === 'en' ? '/en/' : '/';
  const alternate = locale === 'en' ? '/' : '/en/';
  const text = labels[locale];
  return (
    <div lang={locale} className="site-root">
      <header className="site-header">
        <nav className="shell nav" aria-label={locale === 'ja' ? 'メインナビゲーション' : 'Main navigation'}>
          <Link href={home} className="brand" aria-label="TidyTap home"><span className="brand-mark" aria-hidden="true">T</span>TidyTap</Link>
          <div className="nav-links">
            <Link href={`${prefix}/privacy/`}>{text.privacy}</Link>
            <Link href={`${prefix}/terms/`}>{text.terms}</Link>
            <Link href={`${prefix}/support/`}>{text.support}</Link>
            <Link href={alternate} className="language-link" hrefLang={locale === 'en' ? 'ja' : 'en'}>{text.language}</Link>
          </div>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <div className="shell footer-inner"><p>© Roomel Studio</p><div><Link href={`${prefix}/privacy/`}>{text.privacy}</Link><Link href={`${prefix}/terms/`}>{text.terms}</Link><Link href={`${prefix}/support/`}>{text.support}</Link></div></div>
      </footer>
    </div>
  );
}
