import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import Movie from './components/Movie'
import { useEffect, useState } from 'react';

function App() {

  const[searchedMovie, setSearchedMovie] = useState([]);


  //Watch for searchedMovie update
  useEffect(() => {}, [searchedMovie])

  //Set up prop for search component
  const search = (responseJSON) => {
    console.log(responseJSON)
    setSearchedMovie(responseJSON);
  };


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
      null
      }

    </div>
  );
}

export default App;
