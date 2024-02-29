export const BannerText = () => {
    return (
        <div className="absolute inset-5 lg:inset-20 flex items-center">
            <div className="lg:mx-0 mx-5 flex lg:flex-row flex-col gap-20">
                <div className="lg:w-[50%] flex flex-col justify-around lg:justify-between">
                    <h1 className="lg:text-7xl text-2xl capitalize rounded-box font-semibold text-[#ffffff]">
                        Travel with zero worries only at Travelios
                    </h1>
                    <div className="border border-b-[#eaeaeae0]"></div>
                    <p className="lg:text-xl capitalize rounded-box font-medium text-[#ffffff92]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore corrupti quia. Libero iusto nobis numquam ducimus ipsa! Voluptatibus quo optio minus.
                    </p>
                </div>
                <div className="lg:w-[50%] flex flex-col gap-3">
                    <div className="bg-[#ffffff43] backdrop-blur-lg p-3 rounded-box">
                        <img
                            loading="lazy"
                            className="lg:h-[40lvh] w-full object-cover rounded-lg"
                            src={'https://images.unsplash.com/photo-1507237615867-0d4d2ad6b2d1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                            alt="travel-destination-banner"
                        />
                    </div>
                    <div className="flex gap-3">
                        <button className="w-full bg-[#ffffff43] backdrop-blur-lg px-5 py-3 rounded-box text-white font-bold lg:text-xl transition duration-500 hover:scale-105 hover:bg-[#ffffff65]">
                            Explore Now
                        </button>
                        <button className="w-full bg-[#ffffff43] backdrop-blur-lg px-5 py-3 rounded-box text-white font-bold lg:text-xl transition duration-500 hover:scale-105 hover:bg-[#ffffff65]">
                            Contact Us!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};