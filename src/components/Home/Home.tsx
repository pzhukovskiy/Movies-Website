import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useQuery } from 'react-query'
import axios from 'axios'
import ListMovies from '../ListMovies/ListMovies'
import styles from './Home.module.scss'
import Loading from '../Loading/Loading'

export async function fetchData() {
  const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=377c8cc73ebe721a3c3500348ed77c5d')
  return data.results
}

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