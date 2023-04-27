import React, { FC } from 'react'
import { CardHome } from '../../types/CardHome'
import styles from './ListMovies.module.scss'
import Star from '../../imgs/Star.png'

interface CardHomeProps {
    movies: CardHome[];
}

const ListMovies: FC<CardHomeProps> = ({movies}) => {

  return (
    <div>
        <div className={styles.card}>
        {movies?.map((movie) => (
            <div key={movie.id}>
              <div className={styles.rating}>
                <div className={styles.block}>
                  <img src={Star} alt="star" style={{width: 15, height: 15, marginLeft: 5}}/>
                  <h3 style={{marginLeft: 5}}>{movie.vote_average.toFixed(1)}</h3>
                </div>
              </div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} onClick={() => console.log(movie.id)}/>
            </div>
        ))}
    </div>
    </div>
  )
}

export default ListMovies