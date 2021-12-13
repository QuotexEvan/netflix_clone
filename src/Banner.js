import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Banner.css';

function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const request = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=394b2c946570929231181ac0ba08ab4d&with_networks=213`);
            setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]);
            return request;
        }  
        getMovies()
    }, [])
    console.log(movies);
    function truncate(str, max) {
        return str?.length > max ? str.substr(0, max-1) + '...' : str;
    }
    
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
                backgroundPosition: "center center"
                }}>
         <div className="banner-contents">
                <h1 className='banner-title'>{movies?.name || movies?.title || movies?.original_name}</h1>    
               
                <div className="banner_button">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">Watch Later</button>
                </div>  
                
                <h2 className="banner-description">{truncate(movies?.overview, 200)}
                </h2>
            </div>
            <div className="banner--fadebottom"></div>

        </header>
     )
}

export default Banner
