/**
 * Contains application routes
 */
const express = require('express');
const router = express.Router();


//Home
router.get('/', (req, res) => {
    const data = { message: 'Test'};
    res.json(data);
})

//Get movie
router.get('/api/movies', (req, res) => {
    //Retrieve the parameter with movie Title
    const movieTitle = req.query.movieTitle;
    //Make API call to third party DB
    const data = { selectedMovie: movieTitle};
    res.json(data);
})


//API request
const sendRequest = (movieTitle) =>{

    const movieAPI = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer 9bcc574a089c3d3a0415c250e1fb8cb3'
        }
      };
    //Fetch data
    fetch(movieAPI, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}

//Export routes
module.exports = router;
