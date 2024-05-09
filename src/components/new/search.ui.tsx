"use client";
import { mockSearchResults } from "@/utlis/constants/mock";
import { useState } from "react";
import SearchResultsUI from "./searchResults.ui";

const SearchUI = () => {
  const [inputValue, setInputValue] = useState("");
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result);

  const clear = () => {
    setInputValue("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result);
  };
  return (
    <div className="flex item-center my-4 border-2 rounded-md relative z-96 bg-white border-neutral-200">
      <input
        className="w-full  px-4 py-2 focus:outline-none rounded-md"
        type="text"
        value={inputValue}
        placeholder="Search..."
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {inputValue && bestMatches.length > 0 ? (
        <SearchResultsUI results={bestMatches} />
      ) : null}
    </div>
  );
};

export default SearchUI;
