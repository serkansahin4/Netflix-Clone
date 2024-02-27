import Link from "next/link";
import styles from "./styles.module.css";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

interface Movie{
    id:number,
    poster_path:string, 
    title:string, 
    overview:string
}

const FeaturedMovie=({ movie}:{movie:Movie})=>{
    return (<div className={styles.movieWrapper}>
        <h1 className={styles.movieTitle}>{movie.title}</h1>
        <p
          className={`${styles.overview}`}
        >
          {movie.overview}
        </p>
        <div className={styles.actionButtons}>
          <Link className={styles.playButton} href={`/movie/${movie.id}`}>
            Play
          </Link>
          <button className={styles.addButton}>
            <FaPlus />
          </button>
        </div>
        <div className={styles.moviePoster}>
          <div className={styles.moviePosterOverlay}></div>
          <Image
            unoptimized
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            fill
          />
        </div>
      </div>)
}
export default FeaturedMovie