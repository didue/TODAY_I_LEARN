import { BASE_URL } from "../app/(home)/page";

/** 영화 트레일러 비디오 조회 */
async function getVideos(id: string) {
    const response = await fetch(`${BASE_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id}: {id: string}) {

    const videos = await getVideos(id);
    console.log(videos);
    

    return (
        <>
            <div style={{display: "grid", gridTemplateColumns : "repeat(3, 1fr)"}}>
            {videos?.map((video) => {
                return (
                    <iframe 
                        width="450" 
                        height="300" 
                        src={`https://www.youtube.com/embed/${video.key}`} 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    >
                    </iframe>
                )
            })}
            </div>
        </>
    )
}