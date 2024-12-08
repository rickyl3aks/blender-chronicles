const Description = async () => {
  const { summary } = await import("../data/summary.json");

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-left text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
        {summary.title}
      </h1>
      <p className="text-left text-lg sm:text-xl text-gray-600 font-medium mb-4">{summary.description}</p>
    </>
  );
};

export default Description;
