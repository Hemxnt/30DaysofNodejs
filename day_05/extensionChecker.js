const path = require('path')

function checkFileExtension(filePath, expectedExtension){
    if(path.extname(filePath) === expectedExtension){
        console.log("File extension is as expected: " + expectedExtension)}
    else {
        console.log("File does not have the expected extension. Expected:", expectedExtension , "Actual:" , path.extname(filePath))
    }
}

checkFileExtension('./file.md', '.md');
checkFileExtension('./file.md', '.txt');