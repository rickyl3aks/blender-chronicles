"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImagePopup() {
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
        src="/images/render/emil.png"
        alt="Emil"
        title="Emil"
        width={200}
        height={50}
        priority
        className="cursor-pointer border-4 border-white rounded-lg hover:border-gray-300"
        onClick={openModal}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl bg-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
            >
              &times;
            </button>
            <Image src="/images/render/emil.png" alt="Full-size Emil" width={800} height={200} className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
