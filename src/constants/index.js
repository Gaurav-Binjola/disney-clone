import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import {disney, marvel, nationalG, pixar, starWar} from "../assets/images"
import {disneyVid, marvelVid, nationalGeographicVid, pixarVid, starWarVid } from "../assets/videos"


const menu =[
    {
        name: "HOME",
        icon: HiHome
    },
    {
        name:"SEARCH",
        icon: HiMagnifyingGlass
    },
    {
        name: "WATCHLIST",
        icon: HiPlus
    },
    {
        name: "ORIGINALS",
        icon: HiStar
    },
    {
        name: "MOVIES",
        icon: HiPlayCircle
    },
    {
        name: 'SERIES',
        icon: HiTv
    }
];

const productionHouseList =[
    {
        id:1,
        image:disney,
        video:disneyVid
    },
{
    id:2,
    image:pixar,
    video:pixarVid
},
{
    id:3,
    image:marvel,
    video:marvelVid
},
{
    id:4,
    image:starWar,
    video:starWarVid
},
{
    id:5,
    image:nationalG,
    video:nationalGeographicVid
}
];

const genere= [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]


export {menu, productionHouseList,genere }