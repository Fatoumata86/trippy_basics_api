const http = require("http");
const express = require('express');

const app = express();
const server = http.createServer(app);

const exphbs = require("express-handlebars");
const path = require("path");

const port = process.env.PORT || 8000;

const cors = require('cors');

const hotelsRouter = require("./router/hotel");
const loginRouter = require("./router/login");
const authRouter = require('./router/authlogin');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, "views/layouts")
}));

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(hotelsRouter);
app.use(loginRouter);
app.use(authRouter);

server.listen(port, () => {
    console.log(`The server is started on port : ${port}`);
});