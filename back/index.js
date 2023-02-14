const express = require('express');
const axios = require('axios');

const app = express();

app.get('/pokemon/:id', (req, res) => {
    axios.get(`https://api.pokemontcg.io/v1/cards/${req.params.id}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});

app.listen(3000, () => {
    console.log('Le serveur marche BG');
});
