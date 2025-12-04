#!/usr/bin/env node

/**
 * Redirect Tester for EigenCloud Docs
 *
 * Validates every redirect in docusaurus.config.js by checking
 * whether the target path ("to") corresponds to a real file in
 * the Docusaurus build output.
 */

const fs = require("fs");
const path = require("path");

// Load config including the giant redirects array
const config = require("../docusaurus.config.js");

// Build output dir
const BUILD_DIR = path.join(__dirname, "..", "build");

// The redirects array from your config root scope
const redirects = config.plugins
  .find((p) => Array.isArray(p) && p[0].includes("plugin-client-redirects"))
  ? require("../docusaurus.config.js").redirects || []
  : [];

if (!redirects.length) {
  console.error("❌ ERROR: No redirects found in config.");
  process.exit(1);
}

// Folder mapping rules (same as createRedirects)
const folderMoves = [
  ['/products/eigencompute/', '/eigencompute/'],
  ['/products/eigenai/', '/eigenai/'],
  ['/products/eigencloud/', '/eigencloud/'],
  ['/products/eigenda/', '/eigenda/'],
  ['/products/eigenlayer/', '/eigenlayer/'],
];

/** Convert a redirect.target into a real path inside /build/ */
function resolveTarget(to) {
  // If already a real doc route, return as-is
  const directCandidate = path.join(BUILD_DIR, to);
  if (fs.existsSync(directCandidate)) return directCandidate;

  // Try folder remap:
  for (const [oldDir, newDir] of folderMoves) {
    if (to.startsWith(oldDir)) {
      const remapped = to.replace(oldDir, newDir);
      const candidate = path.join(BUILD_DIR, remapped);
      if (fs.existsSync(candidate)) return candidate;
    }
  }

  // Try index.html inside folder
  const indexCandidate = path.join(BUILD_DIR, to, "index.html");
  if (fs.existsSync(indexCandidate)) return indexCandidate;

  // Try remapped + index
  for (const [oldDir, newDir] of folderMoves) {
    if (to.startsWith(oldDir)) {
      const remapped = to.replace(oldDir, newDir);
      const candidate = path.join(BUILD_DIR, remapped, "index.html");
      if (fs.existsSync(candidate)) return candidate;
    }
  }

  return null;
}

// Begin test
console.log("\n🔎 Testing Redirect Targets...\n");

let failures = 0;

for (const r of redirects) {
  const target = resolveTarget(r.to);

  if (!target) {
    failures++;
    console.log(`❌ Missing target for redirect:
  from: ${r.from}
    to: ${r.to}
  (no resolved file in build/)`);
  }
}

if (failures === 0) {
  console.log("🎉 All redirect targets resolve correctly!");
} else {
  console.log(`\n⚠️ ${failures} redirect(s) have invalid or missing targets.\n`);
  console.log("Check your createRedirects() or redirect paths.\n");
}