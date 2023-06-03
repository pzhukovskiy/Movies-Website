"use server"

import React, { FC } from "react";
import styles from "./ListMovies.module.scss";
import Star from '/public/images/Star.png'
import Link from "next/link";
import Image from "next/image";
import { CardHome } from "@/types/CardHome";

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
                <Image
                  src={Star}
                  alt={movie.id}
                  style={{height: 15, width: 15, marginLeft: 5 }}
                  width={20}
                  height={20}
                />
                <h3 style={{ marginLeft: 5 }}>
                  {movie.vote_average.toFixed(1)}
                </h3>
              </div>
            </div>
            <Link href={`/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={30}
                height={100}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMovies;

//https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg