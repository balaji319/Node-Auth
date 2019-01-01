const express = require('express')
const router = express.Router();

//login page
router.get('/login', (req,res)=>{
    res.render("login")
})

//Register page
router.get('/register', (req,res)=>res.render("register"))

//Users page
router.get('/users', (req,res)=>res.send("Users"))
module.exports = router;