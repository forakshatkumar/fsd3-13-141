import { mkdir, rm } from "fs/promises";
//await mkdir("upload") ;
//console.log("folder created") ;
// await mkdir("upload/resume") ;
// console.log("resume created under upload folder")
// await mkdir("images/profile/logos" , {recursive: true}) ;
// console.log("all folders created") ;
await rm("upload", { recursive: true });
