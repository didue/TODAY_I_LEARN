import Link from "next/link";

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
        <div>
            <h1>Hello, Next.js!</h1>
            <ul>
                {movies?.map((movie) => {
                    return <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
                })}
            </ul>
        </div>
    )
}
