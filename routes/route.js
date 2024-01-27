const express = require('express')
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
router.get("/",(req, res) => {
    res.sendFile(path.join(rootDir,"view","home.html"))
})
router.get("/login",(req, res)=>{
    res.sendFile(path.join(rootDir,"view","login.html"))
})
router.get("/signup",(req, res)=>{
    res.sendFile(path.join(rootDir,"view","signup.html"))
})
router.get("/user/fgpwd",(req, res) => {
    res.sendFile(path.join(rootDir,"view","forgot.html"))
})
module.exports = router;