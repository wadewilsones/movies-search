import './styles/Movie.css';


export default function Movie(movie) {

    return (
        <div> 
            <section class="individualMovieContainer">
                <img src={`https://www.themoviedb.org/t/p/w1280/${movie.movie.Poster}`}></img>
                <h3>{movie.movie.Title}</h3>
                <h6>{movie.movie.Year.slice(0, 4)}</h6>
            </section>
        </div>
      );
}