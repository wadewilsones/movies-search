import { useState } from "react";

/**
 * This component contains front-end search functionality
 */
export default function Search() {

    //State to track search value
    const [movieTitle, setMovieTitle] = useState("");

    //Change state of title value
    const changeTitleValue = (e) => {
        setMovieTitle(e.target.value);
    }

    // Send request
    const onFormSubmit = (e) => {

        e.preventDefault();
        console.log(movieTitle);
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