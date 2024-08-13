
import { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";

const Movies = () => {

    const [movies , setMovies]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])
    console.log(movies)

    const handleTranding =()=>{
        const tranding = movies.filter(movie => movie.movie_category === "trending")
        setMovies(tranding)
    }
    const handleNew =()=>{
        const newMovie = movies.filter(movie => movie.movie_category === "new")
        setMovies(newMovie)
    }
    const handleCommingSoon =()=>{
        const commingSoon = movies.filter(movie => movie.movie_category === "coming soon")
        setMovies(commingSoon)
    }


    return (
        <div className="">
            <div className="gap-4 grid justify-center">
                <div className="flex justify-center gap-4 py-6">
                <button onClick={handleTranding} className="hover:border-b-2 py-1">TRENDING</button>
                <button onClick={handleNew} className="hover:border-b-2 py-1">NEW ON DISNEY+</button>
                <button onClick={handleCommingSoon} className="hover:border-b-2 py-1">COMING SOON</button>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-3 px-8">
                    {
                      movies.map(movie => <Movie  key={movie.id} movie={movie}></Movie>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Movies;