// create 3 files using writeFile()
// Index122.js
// Index23r.js
// Index24r.js
// We have to use writeFile() once

// And delete the above files using unlink() method. We have to use the method only once and delete all the files

let fs = require("fs");

let obj = [
  { name: "index.txt", content: " index.txt" },
  { name: "index23r.txt", content: " index23r.txt" },
  { name: "index24r.txt", content: "this is index24r.txt" },
];

// Creating Files
for (i of obj) {
  // console.log(i.name);

  fs.writeFile(i.name, i.content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`File is created`);
    }
  });
}

// // Deleting Files
// let fs = require("fs");
// let obj = [
//     { name: "index.txt" },
//     { name: "index23r.txt" },
//     { name: "index24r.txt"},
//   ];
  
// for (i of obj) {
//   fs.unlink(i.name, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("deleted");
//     }
//   });
// }
