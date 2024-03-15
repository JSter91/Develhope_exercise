"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = './file.txt';
var fileContent = 'This is the content of the text file.';
fs.writeFile(filePath, fileContent, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('The file has been successfully written!');
});
