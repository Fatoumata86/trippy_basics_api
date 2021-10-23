const express = require("express");
const router = express.Router();
const hotels = require("../hotels.json");

router.get('/hotels', (req, res) => {
    // console.log('Liste des Hotels : ', hotels);
    res.send(hotels);
});

router.get('/hotels/:id', (req, res) => {
    const id = req.params.id;
    // console.log("L'hotel rechercher est : ", `${hotels[id - 1].name}`);
    res.send(hotels[id]);
});

router.post('/hotels', (req, res) => {
    const hotel = req.body;
// console.log(hotel);
    hotels.push(hotel);
    // console.log("L'hotel ajouter est : ", hotels);
    res.json(hotels);
});

router.put('/hotels/:id?name', (req, res) => {
    const updatingHotelId = req.params.id;
    const newname = req.query.name;
    hotels[updatingHotelId].name = newname;
    console.log("L'hotel mise à jour est : ", newname);
    res.json(hotels);
});

module.exports = router;