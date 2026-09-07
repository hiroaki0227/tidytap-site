import Image from 'next/image';
import { ArrowRight, Check, ImageIcon, ShieldCheck, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const dynamic = 'force-static';
import { SiteShell } from '@/components/site-shell';

export default function Home() {
  return (
    <SiteShell locale="ja">
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Androidの写真整理を、もっと軽く。</p>
            <h1>タップするだけ。<br />写真が片付く。</h1>
            <p className="lead">溜まった写真を見ながら、行き先のアルバムをタップ。TidyTapなら、大量の写真を迷わずすばやく整理できます。</p>
            <div className="hero-points" aria-label="TidyTapの特徴">
              <span><Check aria-hidden="true" />100枚まで無料</span>
              <span><Check aria-hidden="true" />広告なし</span>
              <span><Check aria-hidden="true" />アカウント不要</span>
            </div>
            <p className="release-note">Google Play公開準備中</p>
          </div>
          <div className="hero-media">
            <Image src="/tidytap-hero.png" alt="スマートフォンの写真をすっきり整理するイメージ" width={1536} height={1024} priority />
          </div>
        </section>

        <section className="section shell" aria-labelledby="flow-title">
          <p className="eyebrow">Tap. Sort. Done.</p>
          <h2 id="flow-title">写真を見る。行き先をタップ。次へ。</h2>
          <div className="steps">
            <article><span>01</span><ImageIcon aria-hidden="true" /><h3>写真を見る</h3><p>前後の写真も見ながら、いま整理する1枚を確認します。</p></article>
            <article><span>02</span><ArrowRight aria-hidden="true" /><h3>アルバムをタップ</h3><p>旅行、家族、仕事など、右側の行き先を選ぶだけです。</p></article>
            <article><span>03</span><Sparkles aria-hidden="true" /><h3>まとめて反映</h3><p>確認してから端末へ反映。反映前ならUndoで戻せます。</p></article>
          </div>
        </section>

        <section className="trust-section">
          <div className="shell trust-grid">
            <div><ShieldCheck aria-hidden="true" /><p className="eyebrow">端末の中で完結</p><h2>写真をサーバーへアップロードしません。</h2></div>
            <p>TidyTapはAndroidのアルバムを端末上で読み込み、整理内容も端末内に保存します。外部サーバー、アカウント、広告SDKは使用しません。</p>
          </div>
        </section>

        <section className="section shell plan" aria-labelledby="plan-title">
          <div><p className="eyebrow">シンプルな料金</p><h2 id="plan-title">まず100枚。気に入ったらUnlimited。</h2><p>機能を細かく分けません。無料版でもUndo、削除予約、アルバム作成、端末への反映まで使えます。</p></div>
          <Card className="plan-card"><CardContent>
            <p className="plan-name">Unlimited</p><p className="plan-copy">一度だけ購入</p>
            <ul><li><Check />写真枚数の制限なし</li><li><Check />サブスクリプションなし</li><li><Check />広告なし</li></ul>
            <p className="plan-note">価格はGoogle Playに表示される地域別価格をご確認ください。</p>
          </CardContent></Card>
        </section>
      </main>
    </SiteShell>
  );
}
