import React from 'react'



const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const HrMovieCard = ({movie}) => {
  return (
    <div className='flex flex-col gap-4 hover:scale-110 transition-all duration-150 ease-in-out'>
       <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}  alt="movies card " 
            className='w-[130px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400  cursor-pointer'
        />
        <h2 className='mx-auto text-white '>
          {movie.title}
        </h2>
    </div>
    
  )
}

export default HrMovieCard