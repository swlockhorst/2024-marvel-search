// import "@/styles/globals.css";
import { SearchProvider } from "@/context/search.context";
import "@/styles/scss/main.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  );
}
