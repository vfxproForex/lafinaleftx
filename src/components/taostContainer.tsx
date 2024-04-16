"use client";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ToastContiner() {
  return (
    <div
    //className="fixed h-screen w-screen top-0 flex justify-center pt-10"
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}

        //transition: Bounce,
      />
    </div>
  );
}
