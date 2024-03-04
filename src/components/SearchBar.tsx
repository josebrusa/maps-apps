import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResult } from "./SearchResult";

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      console.log(searchPlacesByTerm(event.target.value));
      searchPlacesByTerm(event.target.value);
    }, 350);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        onChange={onQueryChange}
      />
      <SearchResult />
    </div>
  );
};
