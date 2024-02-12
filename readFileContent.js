const fs = require('fs')

function readFileContent(filePath){
    fs.readFile(filePath,(err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data.toString())
    })
}

readFileContent('./test-files/file1.txt');
readFileContent('./test-files/empty-file.txt');