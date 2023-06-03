import { fetchDataId } from '@/api/fetchData'
import { client } from '@/components/Client/Client'
import Loading from '@/components/Loading/Loading'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useQuery, QueryClientProvider } from 'react-query'
import ListInfoMovie from './ListInfoMovie'

const InfoMovie = () => {
    const {query} = useRouter()
    const {data, isError, isLoading} = useQuery({
        queryKey: ['aboutMovie'],
        queryFn: () => fetchDataId(query.id)
      })
    
      useEffect(() => {
        window.scrollTo(0,0);
      }, [])
    
      if (isError) return <h1>Error</h1>
      if (isLoading) return <Loading/>
    return (
        <ListInfoMovie data={data}/>
    )
}

export default InfoMovie