const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.json('user endpoint hit');
})

module.exports = router;