var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    response.writeHead(200);

    if(pathname == "/") {
        html = fs.readFileSync("birthdays.html", "utf8");
        response.write(html);
    } else if (pathname == "/birthdays.js") {
        script = fs.readFileSync("birthdays.js", "utf8");
        response.write(script);
    } else if (pathname == "/birthdays.json") {
        json = fs.readFileSync("birthdays.json", "utf8");
        response.write(json);
    }


    response.end();
}).listen(3000);

console.log("Listening to server on 3000...");