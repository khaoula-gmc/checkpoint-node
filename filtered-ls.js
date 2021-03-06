const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, files) => {
    if(err) {
        console.error(err);
        return;
    }

    const filteredFiles = files.filter((file) => {
        return path.extname(file) === '.' + process.argv[3];
    });

    filteredFiles.forEach((file) => {
        console.log(file);
    });
});