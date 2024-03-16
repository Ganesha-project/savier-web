export const Products = () => {
    const data = [
        {
            name: 'Veligandu Island Resort',
            alt: 'savier-jasmine-asset',
            imgUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=2507&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Al Masjid Al Nabawi',
            alt: 'Al Masjid Al Nabawi (Nabawi Mosque)',
            imgUrl: 'https://images.unsplash.com/photo-1584186028062-637e3e77318d?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Cappadocia Turkey',
            alt: 'savier-jasmine-asset',
            imgUrl: 'https://images.unsplash.com/photo-1568322503878-6c2762c21724?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Tulum Mexico',
            alt: 'savier-jasmine-asset',
            imgUrl: 'https://images.unsplash.com/photo-1520483601560-389dff434fdf?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
    return (
        <>
            <div id="products" />
            <section className="lg:mx-32 mx-5 mt-20">
                <div className="mb-5">
                    <h1 className="lg:text-6xl text-3xl font-bold tracking-wider">
                        The Destination just for you
                    </h1>
                </div>
                <div className="p-3 border rounded-[30px] border-gray-400">
                    <div
                        className="relative"
                    >
                        <img
                            loading="lazy"
                            className="lg:h-[56lvh] w-full object-cover rounded-box"
                            src={'https://images.unsplash.com/photo-1520485292858-60fa55883e1e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                            alt="seaweed-jmaindonesia"
                        />
                        <div
                            href=""
                            className="absolute top-2 right-2 flex flex-row justify-end">
                            <div
                                className="px-2 py-1 w-fit h-fit transition ease-in-out hover:scale-105 duration-500 hover:bg-[#ffffff64] bg-gray-800 lg:text-xl bg-opacity-25 text-white backdrop-blur-md self-end rounded-box">
                                Mushroom Bay Beach, Indonesia
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex carousel lg:flex-row gap-5 mt-5 rounded-[30px]">
                    {data.map(el => (
                        <div
                            key={el.name}
                            className="lg:w-[25%] w-[70%] carousel-item h-fit border border-gray-400 p-3 rounded-[30px] flex flex-col gap-3">
                            <div className="relative">
                                <img
                                    className="w-full h-[40lvh] object-cover rounded-box"
                                    src={el.imgUrl}
                                    alt={el.alt} />
                                <div className="absolute top-2 right-2 flex flex-row justify-end">
                                    <a
                                        href=""
                                        className="px-2 py-1 w-fit h-fit transition ease-in-out hover:scale-105 duration-500 hover:bg-[#ffffff64] bg-gray-800 bg-opacity-25 text-white hover:text-blue-500 backdrop-blur-md self-end rounded-box">
                                        More Info
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-grow items-center justify-center h-[15lvh] bg-base-200 rounded-box p-3">
                                <h1 className="text-center text-xl font-semibold">
                                    {el.name}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}