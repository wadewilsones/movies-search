import { useEffect, useState } from "react";

/**
 * This component contains front-end search functionality
 */
export default function Search({ search }) {

    //State to track search value
    const [movieTitle, setMovieTitle] = useState("");
    const [searchedMovie, setSearchedMovie] = useState(null);

    //Change state of title value
    const changeTitleValue = (e) => {
        setMovieTitle(e.target.value);
    }
    
    //Refreshing when searchedMovie set
    useEffect(() => {
      //Pass data to Parent App
      search(searchedMovie)
     }, [searchedMovie])

    // Send request
     const onFormSubmit = async (e) => {
      
        e.preventDefault();
        //API call to back end to fetch movie
        try{
            const response = await fetch(`http://localhost:5000/api/movies?movieTitle=${movieTitle}`);
            const responseJSON = await response.json();
            //Assign response to searched Movie
            setSearchedMovie(responseJSON.movies);
        }
        catch(e){
          console.log(e);
        }
    }

    return (
      <div>
        <form onSubmit={onFormSubmit}>
            <input type="search" value={movieTitle} placeholder="Type your  title..." onChange={changeTitleValue}></input>
            <input type="submit" value='Search'></input>
        </form>

      </div>
    );
  }