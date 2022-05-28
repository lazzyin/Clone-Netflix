import React,{useEffect, useState} from 'react'
import { getMovies } from '../api';
import './Row.css'
import ReactPlayer from "react-player";
import movieTrailer from 'movie-trailer';

const imageHost = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, path, isLarge }) => {
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movies, setMovies] = useState([]);
    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            setMovies(data?.results);
        } catch (error) {
            console.log("fetchMovies error:", error);
        }
    };


    useEffect(() => {
        fetchMovies(path)
    }, [path]);
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie.title || movie.original_name || "").then((url) => {
                setTrailerUrl(url);
            }).catch((error) => console.log(error))
        }
    }

    return (
        <div className="row-container">
            <h2 className="row-header">{title}</h2>
            <div className="row-cards">
                {movies?.map(movie => {
                    return (
                        <img
                            className={`movie-card ${isLarge && "movie-card-large"}`}
                            onClick={() => handleClick(movie)}
                            key={movie.id}
                            
                            src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`}
                            alt={movie.name}></img>
                    )
                })}
            </div>
           { trailerUrl && <ReactPlayer url={trailerUrl} playing={true}  /> }
        </div>
    )
       
}
 //onClick = {() => handleClick(movie)}
       //   
export default Row
