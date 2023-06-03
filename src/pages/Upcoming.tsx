import { client } from '@/components/Client/Client'
import Upcoming from '@/screens/Upcoming/Upcoming'
import React from 'react'
import { QueryClientProvider } from 'react-query'

const Home = () => {
  return (
    <QueryClientProvider client={client}>
        <Upcoming/>
    </QueryClientProvider>
  )
}

export default Home