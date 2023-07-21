function all() {
  const {X509Certificate} = require('crypto');
  const {join} = require('path');
  // https://github.com/webpack/webpack/issues/4175#issuecomment-342931035
  var requireFunc =
    typeof __webpack_require__ === 'function'
    ? __non_webpack_require__
    : require;
  const crypt = requireFunc(join(__dirname, "crypt32.node"));
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
