import * as fs from "fs";

const filePath: string = "./file.txt";
const fileContent: string = "This is the content of the text file.";

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("The file has been successfully written!");
});
