'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})