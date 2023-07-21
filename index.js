function all() {
  const crypt = require("./crypt32.node");
  const {X509Certificate} = require('crypto');
  const pems = [];
  const store = new crypt.Crypt32();
  try {
    let der;
    while ((der = store.next())) {
      const cert = new X509Certificate(der);
      pems.push(cert.toString());
    }
  } finally {
    store.done();
  }
  return Array.from(new Set(pems));
}

if (process.platform !== "win32") {
  // On non-Windows platforms, return an empty array.
  module.exports.all = () => [];
} else {
  module.exports.all = all;
}
