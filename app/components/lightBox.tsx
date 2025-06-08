"use client";

import Image from "next/image";
import { LightboxProps } from "../types/types";

const Lightbox = ({ src, alt = "Expanded view", onClose }: LightboxProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={onClose}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full sm:max-w-4xl h-auto max-h-[80vh] rounded"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
