"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImagePop } from "./types/types";

const ImagePopup = ({ render, width, height }: ImagePop) => {
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
        src={`/images/render/${render}.png`}
        alt={render}
        title={render}
        width={width}
        height={height}
        priority
        className="cursor-pointer border-4 border-white rounded-lg hover:border-gray-300"
        onContextMenu={(e) => e.preventDefault()}
        onClick={openModal}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <div className="relative m-4 max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              title="close"
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl bg-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
            >
              &times;
            </button>

            <Image
              src={`/images/render/${render}.png`}
              alt={`Full-size ${render}`}
              width={1400}
              height={300}
              className="rounded-lg max-w-full h-auto"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePopup;
