import React from 'react';
import { useQuery } from 'react-query';
import styles from './Home.module.scss';

import Navbar from '@/components/Navbar/Navbar';
import { fetchData } from '@/api/fetchData';
import ListMovies from '@/components/ListMovies/ListMovies';
import Loading from '@/components/Loading/Loading';

const Home = () => {

  const {data, isError, isLoading} = useQuery({
    queryKey: ['listMovies'],
    queryFn: fetchData
  })

  if (isError) return <h1>Error</h1>
  if (isLoading) return <Loading/>

  return (
    <div>
      <Navbar>
        <div>
          <div className={styles.trending}></div>
          <ListMovies movies={data}/>
        </div>
      </Navbar>
    </div>
  )
}

export default Home