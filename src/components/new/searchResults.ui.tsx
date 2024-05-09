import { FC } from "react";

const SearchResultsUI: FC = ({ results }: any) => {
  return (
    <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200">
      {results.map((item: any) => {
        return (
          <li
            key={item.symbol}
            className="cursor-pointer m-2 p-4 flex items-center justify-between rounded-md hover:bg-indigo-200"
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResultsUI;
