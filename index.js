// const fs = require('fs');
// const path = require("path"); 


// // const inputText = process.argv[2];

// const inputFile1 = process.argv[2];

// const inputFile2 = process.argv[3];

// const inputFile3 = process.argv[4];


// // if (!inputText) {
// //     console.error('Please provide the text to be added to the file.');
// //     process.exit(1);
// // }

// // fs.writeFile('file.txt', inputText, (err) => {
// //     if (err) {
// //         console.error(err);
// //         return;
// //     }
// //     console.log('File created successfully!');Hello Worldoing on class is going on
// // });

// fs.readFile(inputFile1, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File content:', data);
// });

// fs.appendFileSync(inputFile1," class is going on");

// fs.mkdir('dir1',(err)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log('Directory created successfully!');
// })

// // fs.rmdir('dir1',(err)=>{
// //     if(err){
// //         console.error(err);
// //     }
// //     console.log('Directory deleted successfully!');
// // })

// // fs.rename(inputFile1,inputFile2,(err)=>{
// //     if(err){
// //         console.error(err);
// //     }
// //     console.log('File renamed successfully!');
// // })

// const p = '/home/naresh-kumar-thodupunoori/node-classes/index.js';
// const dirname = path.dirname(p); 
// const extension = path.extname(p);
// console.log(dirname);
// console.log(extension);

// //get the path of this file
// //get the path of the folder

// //copy the file from a source to destination

// fs.copyFile(inputFile2,inputFile3,(err)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log('File copied successfully!');
// })

// //we need to create a new file in dir1 and make a new file in dir1 with the copied content of new-file.txt


const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');

    if(req.url === '/login'){
        res.write('<html><head><title>node.js HTTP Server</title></head><body>');
        res.write('<h1>Hello,Login!!</h1>');
        res.write('</body></html>');
    }else{
        res.write('<html><head><title>node.js HTTP Server</title></head><body>');
        res.write('<h1>Hello World</h1>');
        res.write('</body></html>');
    }
    res.end();
})

const port = 3000;
const host = 'localhost';

server.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`);
});