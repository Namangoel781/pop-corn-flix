import { createContext, useState } from "react";

export const SearchResultContext = createContext({});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState();

  const value = { searchText, searchData, setSearchText, setSearchData };
  return (
    <SearchResultContext.Provider value={value}>
      {children}
    </SearchResultContext.Provider>
  );
};
