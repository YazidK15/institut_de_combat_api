const express = require('express');

const utilisateursRoutes = require ('./routes/utilisateursRoutes');

const cors = require('cors');
const app = express();
const port = 3001;
app.use(express.json());



app.use('/utilisateurs', utilisateursRoutes);



app.listen(port, ()=>{
    console.log("Votre serveur est lancé sur http://127.0.0.1:"+port);
})