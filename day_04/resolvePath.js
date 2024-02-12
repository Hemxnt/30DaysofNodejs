const path = require('path')

function resolvePath(relativePath){
    console.log("Resolved Path is: " + path.resolve(relativePath));
}

resolvePath("..//day_04//file1.txt");
resolvePath(".//nonexisting-folder//file1.txt");