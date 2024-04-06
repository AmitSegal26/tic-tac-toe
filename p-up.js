const fs = require("fs");
const pkg = require("./package.json");
const chalk = require("chalk");
//*p- patch
let pkgVerArr = pkg.version.split(".");
pkgVerArr[2] = +pkgVerArr[2] + 1;
const newFinalArr = pkgVerArr.join(",");
pkg.version = newFinalArr.replaceAll(",", ".");
fs.writeFile("package.json", JSON.stringify(pkg), (err) => {
  if (err) throw err;
  console.log(chalk.bgCyan.red("patch has been rewritten"));
});
