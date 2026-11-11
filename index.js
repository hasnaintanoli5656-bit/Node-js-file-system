// const name = 'Hasnain Tanoli'
// console.log(name)

// Blocking kya hota hai?   =====>   Blocking ka matlab hai ke jab koi operation perform ho raha hota hai, toh program us operation ke complete hone ka wait karta hai. Jab tak wo operation complete nahi hota, tab tak aage ka code execute nahi hota.

// Non-blocking kya hota hai?   =====>   Non-blocking ka matlab hai ke jab koi operation perform ho raha hota hai, toh program us operation ke complete hone ka wait nahi karta. Balkay doosra code execute karta rehta hai.

const fs = require("fs");

// readFile() =====>     ki madad se hum kisi file ke andar mojood data ko read kar sakte hain.

// fs.readFile("./text.txt" , "utf-8" ,  (err , data) => {
// if(err){
//     console.log("error" , err)
//     return
// }
// console.log("file read  ===> " , data)
// })

// Synchronous Methods  =====>  Ye methods operation complete hone tak execution ko block karti hain.

// const fileRead = fs.readFileSync("./data.txt" , 'utf-8')
// console.log(fileRead)
// console.log("End")

// writeFile()  =====>   ki madad se hum new file create kar sakte hain aur usmein data write kar sakte hain. Agar file pehle se exist karti ho toh uska purana content replace ho jata hai.

// fs.writeFile("./data.txt", "HELLO JANI KASE HO. !!!", "utf-8", (err, data) => {
//   if (err) {
//     console.log("ERROR AGAYA ===> ", err);
//     return;
//   }
//   console.log("kaam hogaya ===> ");
// });

// appendFile()  =====>   ki madad se hum existing file ke andar purane data ko delete kiye baghair naya data add kar sakte hain.

// fs.appendFile("./data.txt" , " TUMHARI TABIYAT KASI HA JANII ???" , (err , data ) => {
// if(err){
//     console.log("error ===>" , err)
//     return;
// }
// console.log("DATA ADDED SUCCESSFULLY!")
// })

// unlink()  =====>   ki madad se hum computer se kisi file ko delete kar sakte hain.

// fs.unlink("./delete.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("File deleted successfully ===>");
// });

// rename()  =====>   ki madad se hum kisi existing file ka naam change kar sakte hain.

// fs.rename("text.txt", "Text.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("File renamed successfully");
// });

// mkdir()  =====>  ki madad se hum apne computer mein naya folder create kar sakte hain.

// fs.mkdir("myFolder", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Folder created");
// });

// readdir()  =====>   ki madad se hum kisi folder ke andar mojood files aur folders ki list dekh sakte hain.

// fs.readdir("myFolder", (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(files);
// });

// ---------------------------------------------------------------------------

// SERVER

// server   =====>   Server aik computer ya software program hota hai jo client ki request receive karta hai, us request ko process karta hai aur phir client ko response send karta hai.

const http = require("http")

// http   =====>   HTTP aik communication protocol hai jo client aur server ke darmiyan data transfer karne ke rules define karta hai.

const server = http.createServer((req , res) => {
res.end("HELLO FROM THE SERVER !!! ")
})

server.listen(5500, "127.0.0.1", () => {
console.log("SERVER IS LISTEN ON THE PORT 5500")
})