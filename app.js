const path = require('path');
const express = require('express');
const app = express();
const router = require('./routes/routes');
const port = 3000;

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use('/', router);

app.listen(port, () => console.log(`Port ${port} was successfully launched!`));