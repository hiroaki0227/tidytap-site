import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Check, ImageIcon, ShieldCheck, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const dynamic = 'force-static';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'TidyTap - Photo Sorter',
  description: 'Sort your photos into Android albums, fast. Just view a photo and tap its destination.',
  alternates: { canonical: '/en/' },
};

export default function EnglishHome() {
  return (
    <SiteShell locale="en">
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">A lighter way to organize Android photos.</p>
            <h1>Tap. Sort.<br />Done.</h1>
            <p className="lead">See a photo, tap its destination album, and move on. TidyTap helps you clear a large camera roll quickly, without the feel of file management.</p>
            <div className="hero-points" aria-label="TidyTap highlights">
              <span><Check aria-hidden="true" />100 photos free</span>
              <span><Check aria-hidden="true" />No ads</span>
              <span><Check aria-hidden="true" />No account</span>
            </div>
            <p className="release-note">Preparing for Google Play</p>
          </div>
          <div className="hero-media"><Image src="/tidytap-hero.png" alt="A phone with everyday photos ready to organize" width={1536} height={1024} priority /></div>
        </section>

        <section className="section shell" aria-labelledby="flow-title">
          <p className="eyebrow">One quick rhythm</p><h2 id="flow-title">See the photo. Tap an album. Next.</h2>
          <div className="steps">
            <article><span>01</span><ImageIcon aria-hidden="true" /><h3>See your photo</h3><p>Preview nearby photos and focus on the one you are sorting now.</p></article>
            <article><span>02</span><ArrowRight aria-hidden="true" /><h3>Tap an album</h3><p>Choose Travel, Family, Work, or any album already on your device.</p></article>
            <article><span>03</span><Sparkles aria-hidden="true" /><h3>Apply together</h3><p>Review changes before applying them. Undo remains available beforehand.</p></article>
          </div>
        </section>

        <section className="trust-section"><div className="shell trust-grid">
          <div><ShieldCheck aria-hidden="true" /><p className="eyebrow">Stays on your device</p><h2>No photo uploads.</h2></div>
          <p>TidyTap reads Android albums and stores sorting decisions on your device. It has no photo server, account system, analytics, or advertising SDK.</p>
        </div></section>

        <section className="section shell plan" aria-labelledby="plan-title">
          <div><p className="eyebrow">Simple pricing</p><h2 id="plan-title">Start with 100 photos. Go Unlimited once.</h2><p>The free version includes Undo, delete scheduling, album creation, and Apply. Features are not split into tiers.</p></div>
          <Card className="plan-card"><CardContent>
            <p className="plan-name">Unlimited</p><p className="plan-copy">One-time purchase</p>
            <ul><li><Check />Unlimited photo sorting</li><li><Check />No subscription</li><li><Check />No ads</li></ul>
            <p className="plan-note">Your regional price will be shown by Google Play.</p>
          </CardContent></Card>
        </section>
      </main>
    </SiteShell>
  );
}
