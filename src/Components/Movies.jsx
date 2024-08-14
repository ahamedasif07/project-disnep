
import { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";


const Movies = () => {


//movie filtarin start
    const [movies , setMovies]=useState([])
    const [filteringMovie ,setFiltaringMovie]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
    .then(data => {setMovies(data); setFiltaringMovie(data);});
        
    },[])
    console.log('filtared',filteringMovie)

    const handleTranding =()=>{
      
        const tranding = movies.filter(movie => movie.movie_category === "trending")
        setFiltaringMovie(tranding)
      
    }
    const handleNew =()=>{
        const newMovie = movies.filter(movie => movie.movie_category === "new")
        setFiltaringMovie(newMovie)
    }
    const handleCommingSoon =()=>{
        const commingSoon = movies.filter(movie => movie.movie_category === "coming soon")
        setFiltaringMovie(commingSoon)
    }
   


//movie filtarin end 


  
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
                      filteringMovie.map(movie => <Movie  key={movie.id} movie={movie}></Movie>)
                    }

                    
                </div>
            </div>
            
        </div>
    );
};

export default Movies;