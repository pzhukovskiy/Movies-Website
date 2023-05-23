import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import ListInfoMovies from './ListInfoMovies';
import { fetchDataId } from '../api/fetchData';

const InfoMovie = () => {

  const params = useParams();

  const {data, isError, isLoading} = useQuery({
    queryKey: ['aboutMovie'],
    queryFn: () => fetchDataId(params.id)
  })

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  if (isError) return <h1>Error</h1>
  if (isLoading) return <Loading/>

  return (
    <div>
      <ListInfoMovies data={data}/>
    </div>
  )
}

export default InfoMovie