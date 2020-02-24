const http = require("http");
const app = require("./app");

let port = process.env.PORT || 3000;

http.createServer(app).listen(port,()=>{
    console.log(`Server runnin on  port ${port}...`);
});