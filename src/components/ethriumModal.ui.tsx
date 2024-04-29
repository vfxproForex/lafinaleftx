import { FC } from "react";
import { ReactNode } from "react";
import { FaEthereum } from "react-icons/fa";
import { IconButton } from "./icon.button";
import { CloseIcon } from "@/lib/close.icon";

interface IProps {
  children: ReactNode;
  onClick: any;
}

const EthriumModal2: FC<IProps> = ({ children, onClick }) => {
  return (
    <div
      className={
        "absolute flex flex-col justify-center items-center align-middle bg-black/70 h-screen w-screen"
      }
    >
      <div
        className={
          "p-4 bg-white w-[80%] min-h-[50%] flex flex-col justify-between rounded-md"
        }
      >
        <div className="flex justify-between mb-5">
          <FaEthereum style={{ color: "black", fontSize: "64px" }} />
          <IconButton onClick={onClick}>
            <CloseIcon />
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  );
};

export default EthriumModal2;
