const express = require('express');
const router = express.Router();

router.get('/register', (req, res)=>{
    res.send('Hi I am get request at register route');
});
router.get('/login', (req, res)=>{
    res.send('Hi I am get request at login route');
});

module.exports = router;