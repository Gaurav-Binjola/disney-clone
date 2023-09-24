import React from 'react'


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const MovieCard = ({ movie }) => {
  return (

        <div className='flex flex-col gap-4 hover:scale-110 transition-all duration-150 ease-in-out'>
          <img src={`${IMAGE_BASE_URL}${movie.poster_path}`}  alt="movies card " 
            className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer'
        />
        <h2 className='text-white mx-auto'>{movie.title} </h2>
        </div>
    
  )
}

export default MovieCard