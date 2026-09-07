import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tidytap.roomelstudio.com'),
  title: { default: 'TidyTap - 写真整理・アルバム仕分け', template: '%s | TidyTap' },
  description: '溜まった写真を、Androidのアルバムへすばやく整理。タップするだけの写真仕分けアプリ。',
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
