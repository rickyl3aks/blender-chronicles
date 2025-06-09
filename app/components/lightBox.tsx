import Image from "next/image";
import { useEffect, useRef } from "react";
import { formatDate } from "../functions/formatDate";

type LightboxProps = {
  src: string;
  title?: string;
  description?: string;
  date?: string | number;
  gallery?: boolean;
  onClose: () => void;
};

const Lightbox = ({ src, title, description, date, gallery = false, onClose }: LightboxProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === containerRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClickOutside}
      className="fixed inset-0 flex justify-center items-center bg-opacity-70 backdrop-blur-sm z-50 p-4"
    >
      <div className="bg-[#392d35] rounded-lg max-w-[90vw] max-h-[90vh] overflow-auto p-6 shadow-lg text-white">
        {src.endsWith(".mp4") ? (
          <video src={src} autoPlay loop controls className="w-full sm:max-w-4xl h-auto max-h-[80vh] rounded" onClick={(e) => e.stopPropagation()} />
        ) : (
          <Image
            width={800}
            height={600}
            style={{ width: "auto", height: "auto" }}
            src={src}
            alt={title || ""}
            className="max-w-full max-h-[60vh] mx-auto rounded-md"
          />
        )}

        {gallery && <p className="italic">{title}</p>}

        {date && (
          <div className="mt-4 max-w-xl mx-auto text-center">
            <h2 className="text-4xl max-sm:text-2xl font-bold font-title text-[#C6A4B6]">{title}</h2>
            <p className="mt-2 max-sm:text-sm">{description}</p>

            <p className="mt-1 italic max-sm:text-sm text-gray-300">{formatDate(date)}</p>
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-80 hover:bg-opacity-100 transition text-white text-3xl font-bold leading-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
