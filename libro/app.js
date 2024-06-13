const express = require('express');
const bodyParser = require('body-parser');
const libroRoutes = require('./routes/libroRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api', libroRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
