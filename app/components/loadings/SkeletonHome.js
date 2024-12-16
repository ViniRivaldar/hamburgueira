const Skeleton = ({ type }) => {
    if (type === 'category') {
      return (
        <div className="w-[412px] h-[71px] bg-gray-300 animate-pulse my-14"></div>  
      );
    }
  
    if (type === 'product') {
      return (
        <div className="flex flex-wrap gap-8 justify-center w-full">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-[282.793px] h-[400px] bg-gray-300 animate-pulse rounded-lg my-10">
              <div className="w-full h-[200px] bg-gray-400 mb-4"></div>
              <div className="h-6 bg-gray-400 mb-2"></div>
              <div className="h-6 bg-gray-400"></div>
            </div>
          ))}
        </div>
      );
    }
  
    return null;
  };
  
  export default Skeleton;
  