const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const people = ['Ben', 'Josef', 'Rebeka']

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { test: 'testing', publish: false, people: people })
})

let port = process.env.PORT || 3000;
app.set('port', port);
app.listen(app.get('port'), function () {
    console.log('Server liten on port', port)
})