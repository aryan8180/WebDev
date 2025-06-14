const fs = require("fs");

fs.writeFile("greeting.txt","Namaste",(err)=>{
  if(err) throw err;
  console.log("Your file has been saved");
})