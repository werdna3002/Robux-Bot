const http = require('http');
const express = require('express');
const app = express()


let server = http.createServer(app)
module.exports = {
    async runner() {
        await server.listen(8080);
        console.log('server pinged');
    }
}
