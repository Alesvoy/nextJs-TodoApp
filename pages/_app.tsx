import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import Navbar from "../components/Navbar";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
