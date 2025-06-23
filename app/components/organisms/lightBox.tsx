import Image from "next/image";
import { useEffect, useRef } from "react";
import { formatDate } from "../../functions/formatDate";

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
      <div className="relative bg-[#392d35] rounded-lg max-w-[90vw] max-h-[90vh] landscape:m-[10rem] overflow-auto p-4 pb-[3rem] shadow-lg text-white">
        {src.endsWith(".mp4") ? (
          <video src={src} autoPlay loop controls onClick={(e) => e.stopPropagation()} playsInline />
        ) : (
          <Image width={800} height={600} style={{ objectFit: "contain" }} src={src} alt={title || ""} priority={true} />
        )}

        {gallery && <p className="absolute bottom-2 italic text-sm">{title}</p>}

        {date && (
          <div className="mt-4 max-w-[800px] ">
            <h2 className="text-2xl max-sm:text-2xl font-bold font-title text-[#C6A4B6]">{title}</h2>
            <p className="text-left mt-2 text-base">{description}</p>

            <p className="text-left text-xs mt-1 italic text-gray-300">{formatDate(date)}</p>
          </div>
        )}
      </div>
      <button
        onClick={onClose}
        title="Close"
        className="absolute cursor-pointer top-1 right-1 w-10 h-10 shadow-lg rounded-full bg-black bg-opacity-80 hover:bg-opacity-100 transition text-white text-3xl font-bold leading-none"
      >
        &times;
      </button>
    </div>
  );
};

export default Lightbox;
