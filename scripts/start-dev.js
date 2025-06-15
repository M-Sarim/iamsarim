#!/usr/bin/env node

// Suppress deprecation warnings
process.env.NODE_OPTIONS = '--no-deprecation';

// Override util._extend to prevent deprecation warnings
const util = require('util');
if (util._extend) {
  util._extend = Object.assign;
}

// Start Gatsby development server
const { spawn } = require('child_process');
const path = require('path');

const gatsbyPath = path.resolve(__dirname, '../node_modules/.bin/gatsby');
const args = ['develop'];

const child = spawn('node', [gatsbyPath, ...args], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_OPTIONS: '--no-deprecation'
  }
});

child.on('exit', (code) => {
  process.exit(code);
});
