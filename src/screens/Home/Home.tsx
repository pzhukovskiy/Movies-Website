import React from 'react';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import styles from './Home.module.scss';
import { fetchData } from '@/api/fetchData';
import ListMovies from '@/components/ListMovies/ListMovies';
import Loading from '@/components/Loading/Loading';
import Layout from '@/components/Layout/Layout';

const Home = ({ movies }: any) => {
  const { data, isError, isLoading } = useQuery('listMovies', fetchData, {
    initialData: movies
  });

  if (isError) return <h1>Error</h1>
  if (isLoading) return <Loading/>

  return (
    <div>
      <Layout>
        <div>
          <div className={styles.trending}></div>
          <ListMovies movies={data}/>
        </div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery('listMovies', fetchData)

  const movies = await fetchData();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      movies
    },
  };
}

export default Home