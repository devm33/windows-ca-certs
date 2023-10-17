#!/usr/bin/env node

const {all} = require('./index.js');

const pems = all();

if (process.platform === "win32") {
  console.log(`Found ${pems.length} certificates`);
  for (let i = 0; i < pems.length; i++) {
    console.log(`Certificate ${i+1} of ${pems.length}:\n${pems[i]}`);
  }
}