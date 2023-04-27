import React from 'react'
import Navbar from './Navbar'
import { useQuery } from 'react-query'
import ListMovies from './ListMovies'
import { ICardHome } from '../types/types'

const Home = () => {

  const {data = [], isError, isLoading} = useQuery<ICardHome[]>({
    queryKey: ['listMovies'],
    queryFn: async () => {
      const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=377c8cc73ebe721a3c3500348ed77c5d')
      return await response.json()
    }
  })

  console.log(data)

  if (isError) return <h1>Error</h1>
  if(isLoading) return <h1>Loading..</h1>

  return (
    <div>
      <Navbar>
        <div>
          {/* <ListMovies results={data}/> */}
        </div>
      </Navbar>
    </div>
  )
}

export default Home