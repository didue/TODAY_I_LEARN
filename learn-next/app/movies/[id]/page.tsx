


const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movie";

async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}



export default async function MovieDetail({params: {id}}: {params: {id: string}}) {
    
      const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    return <h1>{movie.title}</h1>
}