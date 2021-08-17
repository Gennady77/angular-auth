const {exec} = require('child_process');

module.exports.createProcess = function(title, command) {
    const process = exec(command);

    process.stdout.setEncoding('utf-8');
    process.stdout.on('data', data => console.log(`${title}:`, data.toString()));
    process.stderr.setEncoding('utf-8');
    process.stderr.on('data', data => console.log(`${title}:`, data.toString()));
    process.on('close', code => console.log(`${title}:`, `Process exit code ${code}`));

    return process;
}
