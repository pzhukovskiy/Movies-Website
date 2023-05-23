import React, { FC } from 'react';
import NavbarMovie from '../Navbar/NavbarMovie';
import styles from './ListInfoMovies.module.scss';
import Play from '../../Imgs/PlayMovie.png';
import Star from '../../Imgs/Star.png';
import { MovieInfo } from '../../Types/MovieInfo';

interface ListInfoMoviesProps {
    data: MovieInfo;
}

const ListInfoMovies: FC<ListInfoMoviesProps> = ({data}) => {

  return (
    <div>
      <NavbarMovie>
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.id} style={{height: 500}}/>
        <div className={styles.right}>
          <h2>Название:</h2>
          <h1 style={{marginTop: 25}}>{data.title}</h1>
          <h2 style={{marginTop: 25}}>Описание:</h2>
          <p>{data.overview}</p>
          <h2 style={{marginTop: 25}}>Язык:</h2>
          <p>{data.original_language}</p>
          <h2 style={{marginTop: 25}}>Жанры:</h2>
          {data.genres.map(genre => (
            <div key={genre.id}>
              <p className={styles.genre}>{genre.name}</p>
            </div>
          ))}
          <div className={styles.rating}>
            <img src={Star} alt='star'></img>
            <p>{data.vote_average}</p>
            <p>отзывов: {data.vote_count}</p>
          </div>
          <div className={styles.video}>
            <div className={styles.circle}>
              <img src={Play} alt="play"/>
              <p>Watch Trailer</p>
            </div>
          </div>
        </div>
      </NavbarMovie>
    </div>
  )
}

export default ListInfoMovies