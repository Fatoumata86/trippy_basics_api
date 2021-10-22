const express = require('express');
const app = express();
const exphbs = require("express-handlebars");

const port = process.env.PORT || 8000;

app.use(express.json());

app.engine('hbs', exphbs());
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

const hotels = [
    { name: "Hilton"},
    { name: "Ritz"},
    { name: "Trianon Palace"},
]

app.get('/hotels', (req, res) => {
    // console.log('Liste des Hotels : ', hotels);
    res.send(hotels);
});

app.get('/hotels/:id', (req, res) => {
    const id = req.params.id;
    // console.log("L'hotel rechercher est : ", `${hotels[id - 1].name}`);
    res.send(`${hotels[id - 1].name}`);
});

app.post('/hotels', (req, res) => {
    const hotel = req.body;
// console.log(hotel);
    hotels.push(hotel);
    // console.log("L'hotel ajouter est : ", hotels);
    res.json(hotels);
});

app.put('/hotels/:id?name', (req, res) => {
    const updatingHotelId = req.params.id;
    const newname = req.query.name;
    hotels[updatingHotelId].name = newname;
    console.log("L'hotel mise à jour est : ", newname);
    res.json(hotels);
});

app.listen(port, () => {
    console.log(`The server is started on port : ${port}`);
});