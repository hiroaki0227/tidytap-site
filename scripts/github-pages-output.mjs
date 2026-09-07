import { copyFile, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const outputRoot = join(process.cwd(), 'dist', 'client');
const routes = [
  'en',
  'privacy',
  'terms',
  'support',
  'en/privacy',
  'en/terms',
  'en/support',
];

for (const route of routes) {
  const source = join(outputRoot, `${route}.html`);
  const destinationDirectory = join(outputRoot, route);
  await mkdir(destinationDirectory, { recursive: true });
  await copyFile(source, join(destinationDirectory, 'index.html'));
  await rm(source);
}
