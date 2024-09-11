const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.json('hey world');
})

app.listen(port, () => {
    console.log(`>> Backend running on port ${port}`)
})