import { client } from "@/components/Client/Client";
import Movies from "@/screens/Movies/Movies";
import { QueryClientProvider } from "react-query";

const Home = () => {
  return (
    <QueryClientProvider client={client}>
      <Movies />
    </QueryClientProvider>
  );
};

export default Home;