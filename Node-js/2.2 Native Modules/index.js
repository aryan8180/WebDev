const fs = require('fs');

// fs.writeFile("greeting.txt","Namaste",(err)=>{
//   if(err) throw err;
//   console.log("Your file has been saved");
// });

fs.readFile("greeting.txt", "utf8", (err, data) => {
  if(err) throw err;
  console.log(data);
})