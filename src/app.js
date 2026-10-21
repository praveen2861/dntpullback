const prayerDialog = document.querySelector('#prayer-dialog');
let prayers = 0;
const prayerMessages = [
  'Dear chart, I have been a very patient liquidity provider.',
  'Please let this be price discovery and not a personality test.',
  'Give us this day our daily green candle. Just one. We are being reasonable.',
  'If this is a shakeout, I would like to be unshaken now.',
  'Dear universe, my conviction is strong. My screen time is concerning.'
];
document.querySelector('#pray').addEventListener('click', () => {
  document.querySelector('#prayer-message').textContent = prayerMessages[prayers % prayerMessages.length];
  prayers += 1;
  document.querySelector('#count').textContent = String(prayers).padStart(2, '0');
  prayerDialog.showModal();
});
for (const id of ['close-dialog', 'amen']) document.getElementById(id).addEventListener('click', () => prayerDialog.close());
prayerDialog.addEventListener('click', (event) => { if (event.target === prayerDialog) { const r = prayerDialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) prayerDialog.close(); }});
const copes = [
  '“The chart is simply giving me more time to develop as a person.”',
  '“I’m not down. I’m in an extended accumulation of life lessons.”',
  '“The fundamentals haven’t changed. I still haven’t read them.”',
  '“My portfolio is diversified across the five stages of grief.”',
  '“This is a long-term hold. It became one about twenty minutes ago.”',
  '“It’s only a loss if I open the app.”'
];
let copeIndex = 0;
document.querySelector('#cope').addEventListener('click', () => { document.querySelector('#cope-text').textContent = copes[copeIndex++ % copes.length]; });
document.querySelector('#year').textContent = new Date().getFullYear();

const copyButton = document.querySelector('#copy-ca');
let copyReset;
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  clearTimeout(copyReset);
  try {
    await navigator.clipboard.writeText(document.querySelector('#contract-address').textContent.trim());
    copyButton.textContent = 'COPIED ✓';
    status.textContent = 'Contract address copied.';
  } catch {
    copyButton.textContent = 'SELECT CA';
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#contract-address'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Copy unavailable. Address selected; copy it manually.';
  }
  copyReset = setTimeout(() => { copyButton.textContent = 'COPY CA'; status.textContent = ''; }, 4000);
});
