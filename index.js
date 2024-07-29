const express = require('express');

const utilisateursRoutes = require ('./routes/utilisateursRoutes');
const seancesRoutes = require ('./routes/seancesRoutes');
const abonnementsRoutes = require ('./routes/abonnementsRoutes');
const reservationsRoutes = require ('./routes/reservationsRoutes');

const cors = require('cors');
const app = express();
const port = 3001;
app.use(express.json());



app.use('/utilisateurs', utilisateursRoutes);
app.use('/seances', seancesRoutes);
app.use('/abonnements', abonnementsRoutes);
app.use('/reservations', reservationsRoutes);



app.listen(port, ()=>{
    console.log("Votre serveur est lancé sur http://127.0.0.1:"+port);
})