const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
const serviceWorker = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');

test('defaults to SiliconFlow with separate generation, translation and grading models', () => {
  assert.match(html, /https:\/\/api\.siliconflow\.cn\/v1\/chat\/completions/);
  assert.match(html, /generate: 'deepseek-ai\/DeepSeek-V3\.2'/);
  assert.match(html, /translate: 'tencent\/Hunyuan-MT-7B'/);
  assert.match(html, /grade: 'deepseek-ai\/DeepSeek-V3\.2'/);
  assert.match(html, /getAIModel\(task\)/);
});

test('translation-only model is called with plain translation output, not a JSON schema', () => {
  assert.match(html, /task: 'translate'/);
  assert.match(html, /只输出英文译文，不要解释、不要前后缀、不要 JSON/);
  assert.match(html, /task !== 'translate'/);
});

test('supports four practice lengths and has a bundled offline question bank', () => {
  for (const value of ['short', 'medium', 'long', 'paragraph']) {
    assert.match(html, new RegExp(`option value="${value}"`));
  }
  assert.match(html, /const OFFLINE_QUESTION_BANK = \[/);
  assert.match(html, /function loadOfflineTopic\(\)/);
});

test('stores practice history, wrong questions and vocabulary locally', () => {
  for (const store of ['practiceRecords', 'wrongQuestions', 'vocabulary']) {
    assert.match(html, new RegExp(`createObjectStore\\('${store}'`));
  }
  assert.match(html, /function savePracticeResult\(/);
  assert.match(html, /function loadWrongQuestion\(/);
  assert.match(html, /const intervals = \[1, 3, 7, 15, 30\]/);
  assert.match(html, /async function exportData\(/);
  assert.match(html, /async function applyImport\(/);
});

test('PWA manifest and service worker provide an installable offline shell', () => {
  assert.equal(manifest.display, 'standalone');
  assert.ok(manifest.icons.some(icon => icon.sizes === '192x192'));
  assert.ok(manifest.icons.some(icon => icon.sizes === '512x512'));
  assert.match(serviceWorker, /addAll\(APP_SHELL\)/);
  assert.match(serviceWorker, /if \(url\.origin !== self\.location\.origin\) return/);
  for (const icon of ['icons/icon-192.png', 'icons/icon-512.png']) {
    assert.ok(fs.existsSync(path.join(root, icon)), `${icon} should exist`);
  }
});
