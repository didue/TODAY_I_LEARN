import Link from "next/link";

export const matadata = {
    title : "Home",
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
    return (await fetch(URL)).json();
}

export default async function HomePage() {

    const movies = await getMovies();

    return (
        <div>
            <h1>Hello, Next.js!</h1>
            {movies.map((movie) => {
                <li><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
            })}
        </div>
    )
}
