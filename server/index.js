const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use('/api/search', require('./routes/search'));

// handle production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(`${_dirname}/public`));
}

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
