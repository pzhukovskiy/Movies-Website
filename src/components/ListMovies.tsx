import React, { FC } from 'react'
import { ICardHome } from '../types/types';

interface ICardHomeProps {
    results: ICardHome[];
}

const ListMovies: FC<ICardHomeProps> = ({results}) => {

  return (
    <div>
        {results?.map((name) => (
            <div key={name.id}>
                <img src={name.backdrop_path} alt={name.id} />
                <h1>{name.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default ListMovies