import { BASE_URL } from "../app/(home)/page";

/** 영화 상세 정보 조회 */
async function getMovie(id: string) {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}: {id: string}) {

    const movie = await getMovie(id);
    return <h1>{movie.title}</h1>
}