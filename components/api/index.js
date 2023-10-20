const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.use( async (req, res, next)=>{
    console.log("made it into the API")
    next()
}
)


router.use(`/drinks`, require(`./drinks`))




module.exports = router