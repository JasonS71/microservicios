const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api', usuarioRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
