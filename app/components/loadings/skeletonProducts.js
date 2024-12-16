export default function SkeletonProducts() {
    return (
        <main className="animate-pulse">
            <section className="m-5">
                <ul className="flex gap-20 justify-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <li
                            key={index}
                            className="w-20 h-6 bg-gray-300 rounded"
                        ></li>
                    ))}
                </ul>
            </section>

            <section className="flex justify-center m-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex gap-3 w-[350px] h-[202px] p-5 rounded-[30px] bg-gray-200"
                        >
                            <div className="w-1/2 bg-gray-300 h-full rounded"></div>
                            <div className="flex-1 space-y-4">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                <div className="h-8 bg-gray-300 rounded w-[156px] mt-4"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
