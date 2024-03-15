export const BannerText = () => {
    return (
        <div className="absolute inset-5 lg:inset-20 flex items-center">
            <div className="lg:mx-0 mx-5 flex lg:flex-row flex-col gap-5 lg:gap-20">
                <div className="lg:w-[50%] flex flex-col justify-around gap-5 lg:justify-between">
                    <h1 className="lg:text-6xl text-2xl capitalize rounded-box font-semibold text-[#ffffff]">
                        Layanan Travel dan Haji Terpercaya. Hanya di Savier Jasmine!
                    </h1>
                    <div className="border border-b-[#eaeaeae0]"></div>
                    <p className="lg:text-xl capitalize rounded-box font-medium text-[#ffffffe4]">
                        Selamat datang di Savier Jasmine Tour & Travel – tempat di mana impian perjalanan dan ibadah Haji Anda menjadi kenyataan. Kami mengajak Anda untuk menjelajahi dunia, menggali keindahan setiap sudutnya, dan menemukan kedamaian yang mendalam di setiap langkah perjalanan Haji Anda.
                    </p>
                </div>
                <div className="lg:w-[50%] flex flex-col lg:gap-3">
                    <div className="bg-[#ffffff43] backdrop-blur-lg p-3 hidden lg:inline-block rounded-box">
                        <img
                            loading="lazy"
                            className="lg:h-[40lvh] w-full object-cover rounded-lg"
                            src={'https://images.unsplash.com/photo-1579305796288-c534f6cf17ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                            alt="travel-destination-banner"
                        />
                    </div>
                    <div className="flex gap-3">
                        <a 
                        href="#about-us"
                        className="w-full bg-[#ffffff43] backdrop-blur-lg px-5 py-3 rounded-box text-center text-white font-bold lg:text-xl transition duration-500 hover:scale-105 hover:bg-[#ffffff65]">
                            Explore Now
                        </a>
                        <a 
                        href=""
                        className="w-full bg-[#ffffff43] backdrop-blur-lg px-5 py-3 rounded-box text-center text-white font-bold lg:text-xl transition duration-500 hover:scale-105 hover:bg-[#ffffff65]">
                            Contact Now!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};