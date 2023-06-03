import { client } from "@/components/Client/Client";
import Home from "@/screens/Home/Home";
import { NextPage } from "next";
import { QueryClientProvider } from "react-query";

const HomePage: NextPage = () => {
  return (
    <QueryClientProvider client={client}>
      <Home />
    </QueryClientProvider>
  );
};

export default HomePage;
