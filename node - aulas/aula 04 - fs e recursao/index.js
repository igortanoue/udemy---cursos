const fs = require('fs').promises;
const { stat } = require('fs');
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir();
    walk(files, rootDir);
}

async function walk(files, rootDir) {  
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = fs.stat(fileFullPath);
        console.log(file, (await stats).isDirectory);
    }

}

readdir('/projetos/estudos/udemy');