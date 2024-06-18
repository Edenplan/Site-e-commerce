const express = require('express');
const app = express();
const dbConnexion = require('./db/db');
const router = require('./routes/route');
const port = 3001; 

dbConnexion();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', router);


app.get('/', (req, res) => {
    res.send('Bienvenue sur la page d\'accueil !');
  });
  

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
