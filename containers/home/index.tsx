import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movie";
import MovieSection from "@/components/movie-section";
import React from "react";

interface Category {
    id: number;
    name: string;
}

interface Movie{
    id:number,
    title:string,
    poster_path:string,
    overview:string
}

interface SelectedCategory{
    id?:number,
    movies:Movie[]
}

interface HomeContainerProps{
   categories:Category[],
   selectedCategory:SelectedCategory,
   popularMovies:Movie[],
   topRatedMovies:Movie[],
   selectedMovie:Movie
}

const HomeContainer:React.FC<HomeContainerProps>=({categories,selectedCategory,popularMovies,topRatedMovies,selectedMovie})=>{
    const selectedCategoryName=categories.find(x=>x.id==selectedCategory.id)?.name
    return (<div>
        <FeaturedMovie movie={selectedMovie}/>
        <Categories categories={categories} />
        {!!selectedCategory?.movies?.length &&
        <MovieSection title={selectedCategoryName} movies={selectedCategory.movies.slice(1,7)} />
        }
        <MovieSection title="Popular Movies" movies={popularMovies.slice(1,7)}/>
        <MovieSection title="Top 7" movies={topRatedMovies.slice(1,7)}/>
    </div>)
}

export default HomeContainer;