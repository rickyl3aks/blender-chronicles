"use client";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white-600 mb-6">Work in Progress</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">This section is under construction. Stay tuned for exciting projects!</p>
      <div className="w-48 h-48 border-4 border-dashed border-yellow-600 flex items-center justify-center rounded-full mb-6">
        <span className="text-xl font-semibold text-white-600">🚧</span>
      </div>
      <p className="mt-4 text-sm text-gray-500 text-center">Working hard to bring you something great. Thanks for your patience!</p>

      <button
        onClick={() => window.history.back()}
        className="mt-8 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        Go Back
      </button>
    </div>
  );
};

export default Projects;
