import './styles/Movie.css';


export default function Movie(movie) {

    return (
            <section className="individualMovieContainer">
                {movie.movie.Poster != null ?  
                <img src={`https://www.themoviedb.org/t/p/w1280/${movie.movie.Poster}`}></img> 
                :
                <img src="./noPoster.png"></img>   
                }
              
                <h3>{movie.movie.Title}</h3>
                {movie.movie.Year != "" ?  
                 <h6>{movie.movie.Year.slice(0, 4)}</h6>
                :
                <h6>Unknown</h6>
                }
            </section>
      );
}