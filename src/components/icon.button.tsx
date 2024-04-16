import React, { ReactNode } from "react";

interface IProps {
  onClick: () => void;
  children: ReactNode; // Include children in the props interface
}

export const IconButton = ({ onClick, children }: IProps) => {
  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  );
};
