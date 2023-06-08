import { fetchData } from '@/api/fetchData';
import Layout from '@/components/Layout/Layout';
import ListMovies from '@/components/ListMovies/ListMovies';
import Loading from '@/components/Loading/Loading';
import React from 'react';
import { QueryClient, dehydrate, useQuery } from 'react-query';

const Movies = ({ movies }: any) => {
  const { data, isError, isLoading } = useQuery('Movies', fetchData, {
    initialData: movies
  });

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <Loading />;

  return (
    <div>
      <Layout>
        <div style={{ width: '60vw' }}>
          <ListMovies movies={data} />
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery('Movies', fetchData)

  const movies = await fetchData();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      movies
    },
  };
}

export default Movies