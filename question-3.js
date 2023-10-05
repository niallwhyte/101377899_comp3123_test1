const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

function removeLogFiles() {
    if (fs.existsSync(logsDirectory)) {
        const filesToDelete = fs.readdirSync(logsDirectory);

        console.log('Files to delete:');
        filesToDelete.forEach((file) => {
            console.log(file);
            fs.unlinkSync(path.join(logsDirectory, file));
        });

        fs.rmdirSync(logsDirectory);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

function createLogFiles() {
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
    }

    process.chdir(logsDirectory);

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(logsDirectory, fileName);
        fs.writeFileSync(filePath, `This is log file ${i}`);
        console.log(`Created file: ${fileName}`);
    }

    const logFiles = fs.readdirSync(logsDirectory);
    console.log('Log files created:');
    logFiles.forEach((file) => {
        console.log(file);
    });
}

removeLogFiles();
createLogFiles();
