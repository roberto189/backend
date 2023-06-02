const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")
const {user} = require('../models');

async function createuser(req, res){
    try {
        const newuser = await user.create({
            username: req.body.username,
            password: bcrypt.hashSync(req,body.password, 4),

        });
        console.log(`newuser: ${newuser}`)
        res.status(200).json(newuser);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}