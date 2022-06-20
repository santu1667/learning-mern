//import modules
const fs = require('fs');
const yargs = require("yargs");
const express = require("express");

//create App
const app= express();
const port = 3000;

//create an array
var existedFileNamesArray;
const inputFileName = yargs.argv.fileName;

//default route
app.get('/', function(req,res){
    res.send(`<h1>Welcome to Express Server</h1>`);
});

console.log("Testing Print");

fs.readFile('./data/existedFileNames.txt',function(err,existedFileNamesFromRepo){
    if(!err)
    {
      
        existedFileNamesArray = existedFileNamesFromRepo.toString();
        if(existedFileNamesArray.includes(inputFileName))
        {
            throw 'Input File Name Exists, please Provide another File name';
        }
        else
        {
            existedFileNamesArray = existedFileNamesArray+inputFileName;
            //save fileName in existedFileNames
            fs.appendFileSync('./data/existedFileNames.txt',inputFileName,function(err,writeResult){
                if(err)
                {
                    throw 'Error occured while appending file Name';
                }
                else
                {
                    console.log("New file Name updated to existedFileNames");
                    console.log(writeResult);
                }

            })

            fs.writeFileSync(`./data/${inputFileName}`,'You are awesome',function(err){
                if(err)
                {
                    throw 'Error occured while appending file Name';
                }
                else
                {
                    console.log(`created file with name ${inputFileName}`);
                }

            })


        }
    }
    else
    {
        throw 'Error reading data for existing file with file Names';
    }
})


app.listen(port,function(err){
console.log(`App is Started and listening at port ${port}`)
});
