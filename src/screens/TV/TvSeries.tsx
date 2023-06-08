import Layout from '@/components/Layout/Layout';
import ListMovies from '@/components/ListMovies/ListMovies';
import Loading from '@/components/Loading/Loading';
import React, { FC } from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { fetchData } from '@/api/fetchData';

const TvSeries = ({ movies }: any) => {
  const { data, isError, isLoading } = useQuery('TvSeries', fetchData, {
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
  await queryClient.prefetchInfiniteQuery('TvSeries', fetchData)

  const movies = await fetchData();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      movies
    },
  };
}

export default TvSeries;