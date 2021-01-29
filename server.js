'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
 //https://api.themoviedb.org/3/movie/3/videos?api_key=a6eb2a522c211c4550bddc7f6fbc25ee&language=en-US
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})