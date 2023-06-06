import React, { FC } from "react";
import { CardHome } from "../../Types/CardHome";
import styles from "./ListMovies.module.scss";
import Star from "../../Imgs/Star.png";
import { Link } from "react-router-dom";

export interface CardHomeProps {
  movies: CardHome[];
}

const ListMovies: FC<CardHomeProps> = ({ movies }) => {
  return (
    <div>
      <div className={styles.card}>
        {movies?.map((movie) => (
          <div key={movie.id}>
            <div className={styles.rating}>
              <div className={styles.block}>
                <img
                  src={Star}
                  alt="star"
                  style={{ width: 15, height: 15, marginLeft: 5 }}
                />
                <h3 style={{ marginLeft: 5 }}>
                  {movie.vote_average.toFixed(1)}
                </h3>
              </div>
            </div>
            <Link to={`/Movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMovies;