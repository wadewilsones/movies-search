import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import Movie from './components/Movie'
import { useEffect, useState } from 'react';

function App() {

  const[searchedMovie, setSearchedMovie] = useState([]);
  const[popularMovies, setPopularMovies] = useState([]);
  const[topMovies, setTopMovies] = useState([]);

//Update searched movies if nedeed
  useEffect(() => {}, [searchedMovie])

  //Get popular movies
  useEffect(() => {
    getPopularMovies();
    getTopMovies();

  },[])

  //Set up prop for search component
  const search = (responseJSON) => {
    setSearchedMovie(responseJSON);
  };

  const getPopularMovies = async() => {

      try{
        const response = await fetch(`http://localhost:5000/api/movies/popular`);
        const responseJSON = await response.json();
        //Assign response to searched Movie
        setPopularMovies(responseJSON.movies);
      }
      catch(e){
      console.log(e);
      }
  }

  const getTopMovies = async() => {

    try{
      const response = await fetch(`http://localhost:5000/api/movies/top`);
      const responseJSON = await response.json();
      //Assign response to searched Movie
      setTopMovies(responseJSON.movies);
    }
    catch(e){
    console.log(e);
    }
}


  
  return (
    <div className="App">
      <Header></Header>
      <Search search = {search}></Search>
      {searchedMovie && searchedMovie.length > 0? 
      //List movies
      <section className="moviesContainer">
        <h2>Search Results:</h2>
      {searchedMovie.map((movie) => (
        <Movie movie={movie} key={movie.ID}/>
      ))}
      </section>
      :      
      searchedMovie && searchedMovie.length == 0?

      <div className="NotFound">
        <img src="./notFound.png"/>
        <p>No movie was found</p>
        </div>
      :
        <div className = "allMovies">
    
          <section className="popularMoviesContainer">
          <h2>Popular Movies:</h2>
            {
              popularMovies.map((movie) => (<Movie movie={movie} key={movie.ID}/>))
            }
          </section>
          
          <section className="popularMoviesContainer">
          <h2>Top Rated Movies:</h2>
            {
              topMovies.map((movie) => (<Movie movie={movie} key={movie.ID}/>))
            }
          </section>
        </div>
      }

    </div>
  );
}

export default App;
