const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(
        {
            "hello": "Welcome to the Blog API",
            "help": "Use /blogs to get all blogs"
        }
    );
});

module.exports = router;
