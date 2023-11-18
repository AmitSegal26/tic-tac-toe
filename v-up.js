const fs = require("fs");
const pkg = require("./package.json");
const chalk = require("chalk");

let pkgVerArr = pkg.version.split(".");
pkgVerArr[1] = +pkgVerArr[1] + 1;
const newFinalArr = pkgVerArr.join(",");
pkg.version = newFinalArr.replaceAll(",", ".");
fs.writeFile("package.json", JSON.stringify(pkg), (err) => {
  if (err) throw err;
  console.log(chalk.bgCyan.red("version has been rewritten"));
});
