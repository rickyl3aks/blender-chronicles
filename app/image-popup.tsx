"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImagePop } from "./types/types";

const ImagePopup = ({ render, width, height, type }: ImagePop) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <div className="flex justify-center items-center">
      <Image
        src={`/images/render/${type ? `${type}/` : ""}${render}.png`}
        alt={render}
        title={render}
        width={width}
        height={height}
        priority
        className="cursor-pointer border-[5px] border-white rounded-[0.75rem] hover:border-gray-300 shadow-[4px_3px_0px_black,9px_8px_0px_rgba(0,0,0,0.15)]"
        onContextMenu={(e) => e.preventDefault()}
        onClick={openModal}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <div className="relative m-4 max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              title="close"
              onClick={closeModal}
              className="cursor-pointer absolute top-2 right-2 text-white text-2xl bg-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
            >
              &times;
            </button>
            {/* <ThreeJSModal /> */}
            <Image
              src={`/images/render/${type ? `${type}/` : ""}${render}.png`}
              alt={`Full-size ${render}`}
              width={1400}
              height={300}
              className="rounded-[0.75rem] max-w-full h-auto"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePopup;
