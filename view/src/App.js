import './App.css';
import Search from './components/Search';
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
      <Search search = {search}></Search>

      {searchedMovie && searchedMovie.length > 0? 
      //List movies
      searchedMovie.map((movie) => (
        <Movie movie={movie} key={movie.ID}/>
      ))

      : 
      
      searchedMovie && searchedMovie.length == 0?

      <div>No movie was found</div>
      :
      null}
    </div>
  );
}

export default App;
