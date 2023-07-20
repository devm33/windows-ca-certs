function all() {
  const crypt = require("./crypt32.node");
  const forge = require("node-forge");
  const ders = [];
  const store = new crypt.Crypt32();
  try {
    let der;
    while ((der = store.next())) {
      ders.push(der);
    }
  } finally {
    store.done();
  }
  return Array.from(new Set(ders.map(forge.pki.certificateToPem)));
}

if (process.platform !== "win32") {
  // On non-Windows platforms, return an empty array.
  module.exports.all = () => [];
} else {
  module.exports.all = all;
}
