import React from 'react'
import { genere } from '../constants'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div>
      {genere.map((item,index) =>index<5&& (
        <div className='p-8 px-4 md:px-16'>
          <h2 className='text-[20px] text-white font-bold '>{item.name}</h2>
          <MovieList id={item.id} index_={index} />
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList