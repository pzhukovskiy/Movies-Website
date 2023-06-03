import { client } from '@/components/Client/Client'
import TvSeries from '@/screens/TV/TvSeries'
import React from 'react'
import { QueryClientProvider } from 'react-query'

const Home = () => {
  return (
    <QueryClientProvider client={client}>
        <TvSeries/>
    </QueryClientProvider>
  )
}

export default Home