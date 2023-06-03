import { fetchData } from '@/api/fetchData';
import ListMovies from '@/components/ListMovies/ListMovies';
import Loading from '@/components/Loading/Loading';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import { useQuery } from 'react-query';

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