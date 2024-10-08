const pathFile = process.argv[2];

// validate if error
if (!pathFile) process.exit(-1);

const fs = require("fs");

fs.readFile(pathFile, (err, result) =>{
    if (err) throw err;

    const arrFile = result.toString().split("\n");
    console.log(arrFile.length - 1);
});