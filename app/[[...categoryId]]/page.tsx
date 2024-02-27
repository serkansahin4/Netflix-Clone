import HomeContainer from "@/containers/home";
import {
    fetchGenres, fetchMoviesByGenre, fetchPopularMovies, fetchSingleMovie, fetchTopRatedMovies
  } from "@/services/movie";

  interface HomeParams{
    categoryId:number
  }

async function Home({params}:{params?:HomeParams}){
    const promises=[
        fetchGenres(),
        fetchPopularMovies(),
        fetchTopRatedMovies(),
        fetchSingleMovie(1211483)
    ]

    if(!!params?.categoryId)
       promises.push(fetchMoviesByGenre(params?.categoryId))

    const [genres,popularMovies,topRatedMovies,selectedMovie,selectedCategoryMovies]= await Promise.all(promises);

    return (<HomeContainer categories={genres} 
        selectedCategory={{id:params?.categoryId,movies:selectedCategoryMovies}}
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        selectedMovie={selectedMovie}
    />)
}

export default Home;