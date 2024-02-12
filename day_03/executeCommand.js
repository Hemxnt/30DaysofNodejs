const { exec } = require('child_process')
const { stdout } = require('process')
function executeCommand(command){
    exec(command, (err, stdout, stderr) => {
        if(err){
            console.error(err)
            return
        }
        console.log(stdout)
    })
}

executeCommand('ls -l')
executeCommand('echo "Hello, Node.js!"');