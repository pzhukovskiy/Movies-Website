import Layout from '@/components/Layout/Layout';
import ListMovies from '@/components/ListMovies/ListMovies';
import Loading from '@/components/Loading/Loading';
import { fetchData } from '@/api/fetchData';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

const Upcoming = ({ movies }: any) => {
  const { data, isError, isLoading } = useQuery('listMovies', fetchData, {
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
  await queryClient.prefetchInfiniteQuery('listMovies', fetchData)

  const movies = await fetchData();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      movies
    },
  };
}

export default Upcoming;
