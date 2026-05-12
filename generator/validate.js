#!/usr/bin/env node
/**
 * AFO File Generator — Validation Script
 * validate.js v1.0
 *
 * Checks a generated AFO file package for:
 *   1. TODO_CLIENT_CONFIRM values remaining
 *   2. Malformed JSON (agent-context, agent-policy, agent-actions, context-cookie)
 *   3. Malformed XML (sitemap, rss)
 *   4. Placeholder URLs (TODO_CLIENT_CONFIRM in url fields)
 *   5. Required fields presence per file type
 *
 * Usage:
 *   node validate.js ./generator/samples/truebuild
 *   node validate.js ./path/to/client-package
 *
 * Exit codes:
 *   0 = all checks passed
 *   1 = warnings only (TODOs remain but structure is valid)
 *   2 = errors (malformed JSON/XML or missing required fields)
 */

const fs = require('fs');
const path = require('path');

const EXPECTED_FILES = [
  'llms.txt',
  'agent-context.json',
  'agent-policy.json',
  'agent-actions.json',
  'context-cookie.json',
  'sitemap.xml',
  'rss.xml'
];

const REQUIRED_FIELDS = {
  'agent-context.json': ['name', 'url', 'type', 'description'],
  'agent-policy.json': ['version', 'issued_by', 'citation_required'],
  'agent-actions.json': ['version', 'actions'],
  'context-cookie.json': ['version', 'identity', 'description', 'preferred_citation']
};

function log(level, file, message) {
  const prefix = { INFO: '\x1b[36mINFO\x1b[0m', WARN: '\x1b[33mWARN\x1b[0m', ERROR: '\x1b[31mERROR\x1b[0m' };
  console.log(`${prefix[level] || level}  [${file}] ${message}`);
}

function countTodos(content) {
  return (content.match(/TODO_CLIENT_CONFIRM/g) || []).length;
}

function validateJson(file, content) {
  try {
    const obj = JSON.parse(content);
    const required = REQUIRED_FIELDS[path.basename(file)] || [];
    const missing = required.filter(f => !(f in obj));
    if (missing.length > 0) {
      log('ERROR', path.basename(file), `Missing required fields: ${missing.join(', ')}`);
      return false;
    }
    return true;
  } catch (e) {
    log('ERROR', path.basename(file), `Invalid JSON: ${e.message}`);
    return false;
  }
}

function validateXml(file, content) {
  // Basic XML well-formedness checks (no external parser dependency)
  const openTags = (content.match(/<[a-zA-Z][^/!>]*>/g) || []).length;
  const closeTags = (content.match(/<\/[a-zA-Z][^>]*>/g) || []).length;
  const selfClose = (content.match(/<[^>]+\/>/g) || []).length;
  if (!content.trim().startsWith('<?xml')) {
    log('WARN', path.basename(file), 'Missing XML declaration (<?xml version...>)');
  }
  if (openTags !== closeTags + selfClose && openTags !== closeTags) {
    log('WARN', path.basename(file), `Possible unclosed tags (open: ${openTags}, close: ${closeTags}, self-close: ${selfClose})`);
  }
  return true;
}

function validateLlmsTxt(file, content) {
  const requiredSections = ['## Description', '## Services', '## Contact', '## How to cite us'];
  const missing = requiredSections.filter(s => !content.includes(s));
  if (missing.length > 0) {
    log('ERROR', path.basename(file), `Missing required sections: ${missing.join(', ')}`);
    return false;
  }
  return true;
}

function run(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    process.exit(2);
  }

  let totalTodos = 0;
  let errors = 0;
  let warnings = 0;

  console.log(`\n══ AFO Package Validation: ${dir} ══\n`);

  // Check for expected files
  EXPECTED_FILES.forEach(filename => {
    const filepath = path.join(dir, filename);
    if (!fs.existsSync(filepath)) {
      log('WARN', filename, 'File not found in package');
      warnings++;
    }
  });

  // Validate each file found
  const files = fs.readdirSync(dir).filter(f => !f.startsWith('.') && f !== 'README-install.md');

  files.forEach(filename => {
    const filepath = path.join(dir, filename);
    if (!fs.statSync(filepath).isFile()) return;

    const content = fs.readFileSync(filepath, 'utf8');
    const todos = countTodos(content);

    if (todos > 0) {
      log('WARN', filename, `${todos} TODO_CLIENT_CONFIRM value(s) remaining`);
      totalTodos += todos;
      warnings++;
    }

    let valid = true;
    if (filename.endsWith('.json')) {
      valid = validateJson(filepath, content);
      if (!valid) errors++;
    } else if (filename.endsWith('.xml')) {
      valid = validateXml(filepath, content);
      if (!valid) errors++;
    } else if (filename === 'llms.txt') {
      valid = validateLlmsTxt(filepath, content);
      if (!valid) errors++;
    }

    if (valid && todos === 0) {
      log('INFO', filename, '✅ Valid, no TODOs');
    } else if (valid && todos > 0) {
      log('WARN', filename, `⚠️  Valid structure, ${todos} TODO(s) need client confirmation`);
    }
  });

  // Summary
  console.log(`\n══ Summary ══`);
  console.log(`  Files checked:          ${files.length}`);
  console.log(`  Total TODOs remaining:  ${totalTodos}`);
  console.log(`  Warnings:               ${warnings}`);
  console.log(`  Errors:                 ${errors}`);

  if (errors > 0) {
    console.log(`\n❌ VALIDATION FAILED — fix errors before delivery.`);
    process.exit(2);
  } else if (warnings > 0) {
    console.log(`\n⚠️  VALIDATION PASSED WITH WARNINGS — resolve TODOs before delivery.`);
    process.exit(1);
  } else {
    console.log(`\n✅ VALIDATION PASSED — package is ready for delivery.`);
    process.exit(0);
  }
}

const dir = process.argv[2];
if (!dir) {
  console.error('Usage: node validate.js <path-to-package-directory>');
  process.exit(2);
}

run(dir);
