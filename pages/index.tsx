// @ts-nocheck
import { ResultList } from "@/components/result";
import { SearchBar } from "@/components/searchbar";

export default function Home() {
  return (
    <main>
      <SearchBar />

      <ResultList />
    </main>
  );
}
