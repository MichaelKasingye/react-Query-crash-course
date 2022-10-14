import Charaters from "./components/Charaters";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./styles.css";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Charaters />
          <ReactQueryDevtools initialIsOpen={false} position="top-right" />
        </QueryClientProvider>
      </div>
    </div>
  );
}
