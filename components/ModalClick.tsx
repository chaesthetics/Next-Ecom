
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ModalClick = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <div onClick={() => setOpenModal(true)} className="hover:cursor-pointer flex justify-center w-full gap-1 py-4 items-center bg-yellow-300 hover:bg-yellow-400 animation-300 transition-300 duration-300">
        <p className="text-sm text-blue-800">Buy With</p>
        <img src="https://static-00.iconduck.com/assets.00/paypal-icon-2048x547-tu0aql1a.png" className="h-4"/>
    </div>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="">
            <div className="flex gap-2 py-10 justify-center items-center">
            <HiOutlineExclamationCircle className="mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-3xl text-red-600 font-semibold text-gray-500 dark:text-gray-400 ">
              MISS NA KITA 
            </h3>
            </div>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Confirm"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalClick;
