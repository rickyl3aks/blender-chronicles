"use client";

export const Button = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    >
      Go Back
    </button>
  );
};
