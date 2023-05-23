import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useQuery } from 'react-query';
import ListMovies from '../ListMovies/ListMovies';
import styles from './Home.module.scss';
import Loading from '../Loading/Loading';
import { fetchData } from '../api/fetchData';

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