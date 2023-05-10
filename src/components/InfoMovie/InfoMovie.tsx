import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import axios from 'axios';
import ListInfoMovies from './ListInfoMovies';


const InfoMovie = () => {

  const params = useParams();

  async function fetchData() {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=377c8cc73ebe721a3c3500348ed77c5d&language=en-US`)
    return data
  }

  const {data, isError, isLoading} = useQuery({
    queryKey: ['aboutMovie'],
    queryFn: fetchData
  })

  if (isError) return <h1>Error</h1>
  if (isLoading) return <Loading/>

  return (
    <div>
      <ListInfoMovies data={data}/>
    </div>
  )
}

export default InfoMovie