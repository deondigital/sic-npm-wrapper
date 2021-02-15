var binwrap = require("binwrap");

var version = "0.73.1"
var root = "https://dist.deondigital.com/sic/" + version;

module.exports = binwrap({
  dirname: __dirname,
  binaries: [ "sic" ],
  urls: {
    "darwin-x64": root + "/macos/sic.tar.gz",
    "linux-x64": root + "/linux/sic.tar.gz",
    "win32-x64": root + "/windows/sic.zip"
  }
});
