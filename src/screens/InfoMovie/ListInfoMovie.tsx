import React, { FC } from 'react';
import styles from './ListInfoMovie.module.scss';
import Play from '/public/images/PlayMovie.png';
import Star from '/public/images/Star.png';
import { MovieInfo } from '@/types/MovieInfo';
import NavbarMovie from '@/components/Navbar/NavbarMovie';
import Image from 'next/image';

interface ListInfoMoviesProps {
    data: MovieInfo;
}

const ListInfoMovie: FC<ListInfoMoviesProps> = ({data}) => {

  return (
    <div>
      <NavbarMovie>
      <Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.id} width={100} height={500}/>
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
            <Image src={Star} alt='star' width={20} height={20}/>
            <p>{data.vote_average}</p>
            <p>отзывов: {data.vote_count}</p>
          </div>
          <div className={styles.video}>
            <div className={styles.circle}>
              <Image src={Play} alt="play" width={50} height={50}/>
              <p>Watch Trailer</p>
            </div>
          </div>
        </div>
      </NavbarMovie>
    </div>
  )
}

export default ListInfoMovie