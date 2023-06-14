/**
 * Contains application routes
 */
require('dotenv').config(); // add .env strings to file 

const express = require('express');
const router = express.Router();


//Home
router.get('/', (req, res) => {
    const data = { message: 'Test'};
    res.json(data);
})

//Get movie
router.get('/api/movies', async (req, res) => {
    const movies = [];
    //Retrieve the parameter with movie Title
    const movieTitle = req.query.movieTitle;
    //Make API call to third party DB
    try{
        const data = await sendRequest(movieTitle);
        // Add only 6 movies, include only name and year
        if(data.results.length > 5){

            for(i=0; i<5; i++){
                //Create an movie object and add to array
                movies.push({
                    "ID":data.results[i].id, 
                    "Title":data.results[i].original_title, 
                    "Poster":data.results[i].poster_path, 
                    "Year":data.results[i].release_date,
                });
            }
        }
       
        res.json({"movies":movies});
    }
    catch(e){
        res.status(500).json({e: e})
    }

})


//API request
const sendRequest = async (movieTitle) =>{

    data = {};
    try{
        const movieAPI = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}`;
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.API_KEY}`
            }
          };
        
        //Fetch data from the URL and convert to JSON
        const response = await fetch(movieAPI, options)
        .then(response => response.json())
        .then(json => {
            data = json
        })
    }
    catch(e){
        console.error('error:' + e);
    }
    return  data;
}

//Export routes
module.exports = router;
