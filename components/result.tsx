// @ts-nocheck
import { useSearchContext } from "@/context/search.context";

export const ResultList = () => {
  const { results, hasSearched, setHasSearched } = useSearchContext();
  return (
    <div>
      {hasSearched && <h4>{results.length} results found.</h4>}

      <ul>
        {results.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};
