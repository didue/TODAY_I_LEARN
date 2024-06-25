import Movie from "../../components/movie";
import styels from '../../style/home.module.css'

export const matadata = {
    title : "Home",
}

export const BASE_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
const getMovies = async () => {
    return (await fetch(BASE_URL)).json();
}

export default async function HomePage() {

    const movies = await getMovies();
    console.log(movies);

    return (
        <div className={styels.container}>
            {movies?.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
    )
}
