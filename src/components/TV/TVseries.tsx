import React from 'react'
import Navbar from '../Navbar/Navbar'
import ListMovies from '../ListMovies/ListMovies'
import { fetchData } from '../Home/Home'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'

const TV_SERIES = () => {
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

export default TV_SERIES