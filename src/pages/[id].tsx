import { QueryClientProvider, useQuery } from "react-query";
import { client } from "@/components/Client/Client";
import InfoMovie from "@/screens/InfoMovie/InfoMovie";

export default function Id() {
  return (
    <QueryClientProvider client={client}>
      <InfoMovie />
    </QueryClientProvider>
  );
}
