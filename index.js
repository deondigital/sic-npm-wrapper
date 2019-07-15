var binwrap = require("binwrap");
var path = require("path");

var packageInfo = require(path.join(__dirname, "package.json"));
var version = packageInfo.version;
var root = "https://dist.deondigital.com/sic/" + "v" + version;

module.exports = binwrap({
  dirname: __dirname,
  binaries: [ "sic" ],
  urls: {
    "darwin-x64": root + "/macos/sic.tar.gz",
    "linux-x64": root + "/linux/sic.tar.gz",
    "win32-x64": root + "/windows/sic.zip"
  }
});
