require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/', (_req, res) => res.send(`<h2> Escutando na porta ${PORT}. </h2>`));
app.listen(PORT, () => console.log(`Escutando na porta: ${PORT}.`));
