import { BASE_URL } from "../app/(home)/page";
import styles from '../style/movie-video.module.css'

/** 영화 트레일러 비디오 조회 */
async function getVideos(id: string) {
    const response = await fetch(`${BASE_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id}: {id: string}) {

    const videos = await getVideos(id);
    console.log(videos);
    

    return (
        <div className={styles.container}>
            {videos?.map((video) => (
                <iframe 
                    src={`https://www.youtube.com/embed/${video.key}`} 
                    title={video.name} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                >
                </iframe>
            ))}
        </div>
    )
}