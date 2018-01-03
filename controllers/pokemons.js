'use strict'
const axios=require('axios');

function getPokemons(req,res){
    promise
        .then(resp=>{
            res.render("pages/index",{pokemons:resp});
        })
        .catch(err=>{
            console.log(err);
        });
}

var promise= new Promise((resolve,reject)=>{
    let pokemons=[];
    for(var i=0;i<=300;i+=20){  
        var url="https://pokeapi.co/api/v2/pokemon/?limit="+20+"&offset="+i;
        axios.get(url)
            .then(resp=>{
                resp.data.results.forEach(pokemon => {
                    var url_imagen="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemon.url.split("/")[6]+".png";
                    var pokem={
                        name:pokemon.name.toUpperCase(),
                        imagen:url_imagen
                    }
                    pokemons.push(pokem);
                }); 
            })
            .catch(err=>{
                console.log(err);
            });
    }
    if(true){
        resolve(pokemons);
    }
    else{
        var reason= new Error("GG");
        reject(reason);
    }       
});

module.exports={
    getPokemons
};