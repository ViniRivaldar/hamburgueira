export default function SkeletonProduto(){
    return(
        <div className="flex gap-4 mt-5 mb-5 bg-gray-200 animate-pulse p-3 rounded">
            <div className="bg-gray-300 w-[300px] h-[200px] rounded"></div>
            <div className="flex flex-col flex-1">
                <div className="bg-gray-300 h-6 w-1/2 rounded mb-2"></div>
                <div className="bg-gray-300 h-4 w-full rounded mt-4"></div>
                <div className="bg-gray-300 h-4 w-3/4 rounded mt-2"></div>
                <div className="mt-32">
                    <div className="bg-gray-300 h-6 w-1/4 rounded mb-4"></div>
                    <div className="bg-gray-300 h-[50px] w-[200px] rounded-full"></div>
                </div>
            </div>
        </div>
    );
}