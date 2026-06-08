const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-12 h-12">
        
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500/30"></div>
        
        <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>

      </div>
      <p className="ml-4 text-lg text-indigo-600">Loading...</p>
    </div>
  );
};

export default Loading;