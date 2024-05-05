import { FC } from "react";
import { ReactNode } from "react";
import { FaBitcoin } from "react-icons/fa";
import { IconButton } from "./icon.button";
import { CloseIcon } from "@/lib/close.icon";

interface IProps {
  children: ReactNode;
  onClick: any;
}

const Modal: FC<IProps> = ({ children, onClick }) => {
  return (
    <div
      className={
        "absolute h-screen w-screen flex flex-col justify-center items-center align-middle backdrop-blur-sm bg-white/5 "
      }
    >
      <div
        className={
          "p-4 bg-cs_primary-100 m-3 flex flex-col justify-between rounded-md"
        }
      >
        <div className="flex justify-between mb-5">
          <FaBitcoin
            style={{ fontSize: "64" }}
            className="text-cs_primary-300"
          />
          <IconButton onClick={onClick}>
            <CloseIcon />
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
