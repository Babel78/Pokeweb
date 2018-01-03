'use strict'
const express=require('express');
const controllers= require('../controllers/pokemons');
const router=express.Router();

router.get('/',controllers.getPokemons);


module.exports=router;