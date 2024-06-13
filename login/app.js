const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/loginRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api', loginRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
