const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src');
const output = path.join(root, 'dist');
const html = fs.readFileSync(path.join(source, 'index.html'), 'utf8');

execFileSync(process.execPath, ['--check', path.join(source, 'app.js')], { stdio: 'inherit' });
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const asset = match[1];
  if (/^https?:\/\//.test(asset)) continue;
  if (!fs.statSync(path.join(source, asset)).isFile()) throw new Error(`Missing asset: ${asset}`);
}
fs.mkdirSync(output, { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js']) {
  fs.copyFileSync(path.join(source, file), path.join(output, file));
}
console.log('Build passed: HTML, CSS, and JavaScript ready in dist/.');
