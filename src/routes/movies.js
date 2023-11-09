const { Router } = require("express");
const routes = Router();

const _ = require('underscore')

//import json
const movies = require("../example.json");
const e = require("express");


//Obtener datos
routes.get("/", (req, res) => {
  res.json(movies);
});

//Enviar Datos
routes.post("/", (req, res) => {
  const { title, director, year } = req.body;

  if (title && director && year) {
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    console.log(newMovie);
    movies.push(newMovie)
    res.json(movies)
  } else {
    res.status(500).json({error:"There was an error."});
  }
});


//Actualizar datos
routes.put("/:id",(req, res)=>{
    const {id} = req.params
    //Obtener datos para poder actualizar
    const { title, director, year } = req.body;

    if(title && director && year){
        _.each(movies,(movie,i)=>{
            if(movie.id == id){
                movie.title = title
                movie.director = director
                movie.year = year
            }
        })
        res.json(movies)
    }else{
      res.status(500).json({error:"There was an error"})  
    }
})

//Eliminar Datos
routes.delete('/:id',(req,res)=>{
    //obtener el id
    const {id} = req.params
    //el undescore recorre el arreglo
    _.each(movies,(movie, i)=>{
        if(movie.id == id){
            movies.splice(i, 1)
        }
    })

    res.send(movies)
})



module.exports = routes;
