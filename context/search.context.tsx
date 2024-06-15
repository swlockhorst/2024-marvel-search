// @ts-nocheck
import { createContext, useContext, useState } from "react";

const SearchContext = createContext({ results: [] });

function SearchProvider({ children }) {
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <SearchContext.Provider
      value={{ results, setResults, hasSearched, setHasSearched }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { SearchProvider, useSearchContext };
