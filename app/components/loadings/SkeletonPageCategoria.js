export default function SkeletonPageCategoria(){
    return(
        <>
            <header>
                <div className="flex justify-center">
                    <h1 className="m-10 text-4xl font-bold text-[#9758A6] animate-pulse bg-gray-300 h-8 w-[250px] rounded"></h1>
                </div>
            </header>
            <main className="flex justify-center">
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                        <div className="bg-white rounded-lg p-4"> 
                            <div className="bg-gray-300 w-full h-[200px] rounded-lg mb-4 animate-pulse"></div>
                            <div className="bg-gray-300 h-6 w-[150px] mb-2 animate-pulse"></div>
                            <div className="bg-gray-300 h-4 w-[100px] mb-4 animate-pulse"></div>
                            <div className="bg-gray-300 w-[160px] h-[60px] rounded-full animate-pulse"></div>
                        </div>
                        <div className="bg-white rounded-lg p-4"> 
                            <div className="bg-gray-300 w-full h-[200px] rounded-lg mb-4 animate-pulse"></div>
                            <div className="bg-gray-300 h-6 w-[150px] mb-2 animate-pulse"></div>
                            <div className="bg-gray-300 h-4 w-[100px] mb-4 animate-pulse"></div>
                            <div className="bg-gray-300 w-[160px] h-[60px] rounded-full animate-pulse"></div>
                        </div>
                        <div className="bg-white rounded-lg p-4"> 
                            <div className="bg-gray-300 w-full h-[200px] rounded-lg mb-4 animate-pulse"></div>
                            <div className="bg-gray-300 h-6 w-[150px] mb-2 animate-pulse"></div>
                            <div className="bg-gray-300 h-4 w-[100px] mb-4 animate-pulse"></div>
                            <div className="bg-gray-300 w-[160px] h-[60px] rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}