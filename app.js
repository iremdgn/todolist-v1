const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    const today = new Date();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var currentDay = weekday[today.getDay()];

    res.render('list', { kindOfDay: currentDay });
 
});

app.listen(3000, function () {
    console.log('listening on port 3000');
})