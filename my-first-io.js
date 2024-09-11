const pathFile = process.argv[2];

if (!pathFile) process.exit(-1);

const fs = require("fs");

const str = fs.readFileSync(pathFile).toString();

// console.log(str.split("\n"));

const arrFile = str.split("\n");
console.log(arrFile.length - 1);