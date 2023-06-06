import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useQuery } from 'react-query';
import ListMovies from '../ListMovies/ListMovies';
import Loading from '../Loading/Loading';
import { fetchData } from '../api/fetchData';

const Movies = () => {
  const {data, isError, isLoading} = useQuery({
    queryKey: ['listMovies'],
    queryFn: fetchData
  })

  if (isError) return <h1>Error</h1>
  if(isLoading) return <Loading/>

  return (
    <div>
      <Navbar>
        <div style={{width: '60vw'}}>
          <ListMovies movies={data}/>
        </div>
      </Navbar>
    </div>
  )
}

export default Movies