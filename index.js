const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const http = require("http");
const { Server } = require("socket.io"); // Correctly import the Server class from socket.io
require("dotenv").config();

const userRoutes = require("./routes/authentication.routes");
const applicationRoutes = require("./routes/application.routes");
const chatRoutes = require("./routes/chat.routes");
const {chatsocket } = require("./controller/socket.controller");

const app = express();
app.use(cookieParser());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
const port = process.env.PORT;

app.set("view engine", "ejs");

// app.use((req, res, next) => {
//     const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
//     console.log(`Incoming request from IP: ${ip} - Method: ${req.method} - URL: ${req.url}`);
//     next();
// });

const server = http.createServer(app);
const io = new Server(server);


io.on('connection', chatsocket);

app.use("/", userRoutes);
app.use("/application", applicationRoutes);
app.use("/chat", chatRoutes);

// Start the server
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
