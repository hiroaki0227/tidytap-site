import { SiteShell } from '@/components/site-shell';

export function LegalPage({ locale, title, intro, children }: { locale: 'ja' | 'en'; title: string; intro: string; children: React.ReactNode }) {
  return (
    <SiteShell locale={locale}>
      <main className="legal-main shell">
        <header className="legal-header"><p className="eyebrow">TidyTap</p><h1>{title}</h1><p>{intro}</p><p className="updated">{locale === 'ja' ? '最終更新：2026年9月7日' : 'Last updated: September 7, 2026'}</p></header>
        <article className="legal-content">{children}</article>
      </main>
    </SiteShell>
  );
}
