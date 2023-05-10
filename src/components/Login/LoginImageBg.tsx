import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { MovieInfo } from '../../types/MovieInfo';
import styles from './Login.module.scss';

interface LoginImageBgProps {
    data: MovieInfo;
}

const LoginImageBg: FC<LoginImageBgProps> = ({data}) => {
  return (
    <div>
        <div className={styles.regBg}>
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.id} className={styles.bg}/>
          <div className={styles.text}>
            <h1>{data.title}</h1>
            <h2>Genres:</h2>{data.genres.map(name => (
                <div key={name.id}>
                    <span>{name.name}</span>
                </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default LoginImageBg