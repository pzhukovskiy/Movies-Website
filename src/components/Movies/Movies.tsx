import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useQuery } from 'react-query'
import { fetchData } from '../Home/Home'
import ListMovies from '../ListMovies/ListMovies'

const Movies = () => {
  const {data, isError, isLoading} = useQuery({
    queryKey: ['listMovies'],
    queryFn: fetchData
  })

  if (isError) return <h1>Error</h1>
  if(isLoading) return <h1>Loading..</h1>

  return (
    <div>
      <Navbar>
        <div style={{width: '55vw'}}>
          <ListMovies movies={data}/>
        </div>
      </Navbar>
    </div>
  )
}

export default Movies