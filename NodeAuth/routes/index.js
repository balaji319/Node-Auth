const express = require('express')
const router = express.Router();

//Register page


router.get('/', (req,res)=>res.render("welcome"))

module.exports = router;
