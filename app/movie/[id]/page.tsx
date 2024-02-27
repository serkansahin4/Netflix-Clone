import MovieContainer from "@/containers/movie"
import { fetchSingleMovie } from "@/services/movie"
import React from "react"

interface MovieParams{
    id:number
}

export default async function Movie({params}:{params:MovieParams}){
    const movieDetail=await fetchSingleMovie(params.id)
    console.log(movieDetail)
    return(<MovieContainer movie={movieDetail}/>)
}