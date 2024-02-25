import "./Recommended.css";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../../data";
import { Link } from "react-router-dom";

export default function Recommended({ categoryId }){

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {

        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div className="recommended">
        {apiData.map((recommend, index) => {
            return(
                <Link to={`/video/${recommend.snippet.categoryId}/${recommend.id}`} className="side-video-list" key={index}>
                    <img src={recommend.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>{recommend.snippet.title}</h4>
                        <p>{recommend.snippet.channelTitle}</p>
                        <p>{value_converter(recommend.statistics.viewCount)} Views</p>
                    </div>
                </Link>
            )
        })}
        </div>
    )
}