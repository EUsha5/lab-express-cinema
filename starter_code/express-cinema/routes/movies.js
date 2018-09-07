const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie')


/* GET home page */
router.get('/movies', (req, res, next) => {

    Movie.find()
    .then((movieInfo)=>{

      console.log(movieInfo)
        
        res.render('listOfMovies', {listOfMovies: movieInfo})
    })
    .catch((err)=>{

    })
});


router.get('/movies/:theMovieID', (req, res, next)=>{

    Movie.findById(req.params.theMovieID)
    .then((theActualMovie)=>{

        res.render('details', {theMovie: theActualMovie})

    })
    .catch((err)=>{

    })
    



})







module.exports = router;