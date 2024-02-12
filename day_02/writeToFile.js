const fs = require('fs')

function writeToFile(filePath, content){
    fs.writeFile(filePath, content , err => {
        if(err){
            console.log(err)
            return
        }
        console.log('File written successfully')
    })    
}

writeToFile(__dirname + '/test-files/output.txt', 'Data written to output.txt')