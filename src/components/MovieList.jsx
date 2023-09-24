import React,{useEffect,useRef,useState} from 'react'
import GlobalApi from '../services/globalApi';
import MovieCard from './MovieCard';
import { HiChevronRight,HiChevronLeft } from 'react-icons/hi2';
import HrMovieCard from './HrMovieCard';

const screenWidth = window.innerWidth;
const MovieList = ({id,index_}) => {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect( () => {
        getMovieByGenre();
    },[])


    const getMovieByGenre =() => {
        GlobalApi.getMovieByGenreId(id).then(res => {
            setMovieList(res.data.results);
        })
    
    }

    const sliderRight=(element) =>{
        element.scrollLeft+=screenWidth-120
    }

    const sliderLeft=(element) =>{
        element.scrollLeft-=screenWidth-120
    }

  return (
    <div>
        <HiChevronLeft className={` hidden md:block text-white text-[30px] z-10  absolute mx-8 left-0 ${index_%3===0? 'mt-[60px]' : 'mt-[150px]'} cursor pointer `}
            onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight className={` hidden md:block text-white text-[30px] z-10  absolute mx-8 right-0 ${index_%3===0? 'mt-[60px]' : 'mt-[150px]'} cursor pointer  `}
            onClick={() => sliderRight(elementRef.current)}
        />
        <div ref={elementRef} className='flex w-full gap-8 overflow-x-auto scrollbar-hide pt-4 px-0 md:px-3 pb-10 scroll-smooth'>
            {movieList.map((item,index) => (
                <div className=' min-w-[110px] md:min-w-[200px]' >
                    <>
                    {index_%3===0? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                    </>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default MovieList