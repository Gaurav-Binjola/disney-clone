import React, { useEffect,useRef,useState } from 'react';
import globalApi from '../services/globalApi';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2';



const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;




const Slider = () => {

    const elementRef = useRef();
    const [movieList, setmovieList] = useState([]);
    useEffect( () => {
        getTrendingMovies();
    },[])

    const sliderRight=(element) =>{
        element.scrollLeft+=screenWidth-110
    }

    const sliderLeft=(element) =>{
        element.scrollLeft-=screenWidth-110
    }

    const getTrendingMovies =() => {
        globalApi.getTrendingVedios.then(res => {
            console.log(res.data.results);
            setmovieList(res.data.results);
        })
    }
  return (
    <div className='flex'>
        <HiChevronLeft className=' hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor pointer '
            onClick={() => sliderLeft(elementRef.current)}
        />
        <div className='flex overflow-x-auto w-full px-4 md:px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef} >
            {movieList.map((item,index) => (
                <img src={IMAGE_BASE_URL+item.backdrop_path} alt="trending movies " className="min-w-full md:h-[360px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100 ease-in-out" />
            ))}
        </div>
        <HiChevronRight className=' hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor pointer right-0 '
            onClick={() => sliderRight(elementRef.current)}
        />
    </div>
  )
}

export default Slider