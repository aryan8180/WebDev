const fs = require("fs");

// fs.writeFile("message.txt","Hey Aryan, It's gonna be alright.", (err) => {
//   if(err) throw err;
//   console.log("This file has been saved.");
// });

fs.readFile("./message.txt",'utf-8',(err,data) => {
  if(err) throw err;
  console.log(data);
} );