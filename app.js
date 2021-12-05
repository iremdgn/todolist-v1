const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

var items = ["Buy Food", "Cook Food", "Eat Food"];

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
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var currentDay = weekday[today.getDay()];
    var day = today.toLocaleDateString("en-US", options);

    res.render('list', { kindOfDay: day , newListItems: items });

    res.render('list', { kindOfDay: currentDay });
 
});

app.post('/', function (req, res) {

    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
})

app.listen(3000, function () {
    console.log('listening on port 3000');
})