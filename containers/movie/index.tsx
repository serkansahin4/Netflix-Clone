import React from "react";
import FeaturedMovie from "@/components/featured-movie"

interface Movie{
    id:number,
    poster_path:string, 
    title:string, 
    overview:string
}

function MovieContainer({ movie }:{movie:Movie}) {

  return (<FeaturedMovie movie={movie}/>);
}

export default MovieContainer