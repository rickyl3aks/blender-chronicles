import Image from "next/image";

interface Latest {
  render: string;
  title: string;
}

interface InfoCardProps {
  latest?: Latest | null;
  folder: string;
  label: string;
}

const InfoCard = ({ latest, folder, label }: InfoCardProps) => {
  return (
    <>
      {latest ? (
        <span className="flex items-center space-x-4 overflow-hidden p-2">
          <Image
            src={`/images/render/${folder}/${latest.render}.png`}
            alt={latest.title}
            width={150}
            height={150}
            className="flex-shrink-0 border-[3px] border-white/80 rounded-[10px]"
          />
          <span className="text-base font-bold">{label}</span>
        </span>
      ) : (
        <span className="w-[150px] h-[150px] flex items-center justify-center bg-gray-200 text-gray-500">No Image</span>
      )}
    </>
  );
};

export default InfoCard;
