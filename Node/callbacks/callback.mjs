import * as fs from "node:fs"

const filePath = './file.txt';
const fileContent = 'This is the content of the text file.';

fs.writeFile(filePath, fileContent, function (err) {
    if (err) {
        console.error(err);
        return;
    } 
    console.log('The file has been successfully written!');
} )