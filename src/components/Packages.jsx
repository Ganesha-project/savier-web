export const Packages = () => {
    return (
        <>
            <section className="lg:mx-32 mx-5 mt-20">
                <div className="mb-5">
                    <h1 className="lg:text-6xl text-3xl text-center font-bold tracking-wider">
                        Paket Haji & Umroh
                    </h1>
                </div>

                <div className="carousel flex gap-5 rounded-[30px]">
                    <div className="relative lg:w-[41lvw] lg:h-[75lvh] h-[50lvh] w-[75lvw] group carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1551254740-8e0eca21c129?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="rounded-[30px] w-full object-cover h-auto brightness-[.80] duration-200 group-hover:brightness-100"
                        />
                        <div className="absolute inset-5 w-fit flex flex-col justify-end group">
                            <div className="text-white group-hover:opacity-0 duration-100 group-hover:scale-50 scale-300">
                                <p className="">
                                    Paket Umroh
                                </p>
                                <p className="uppercase tracking-widest text-3xl lg:text-4xl font-semibold drop-shadow-lg">
                                    Reguler
                                </p>
                            </div>
                        </div>
                        <div className="absolute flex flex-col justify-end inset-5">
                            <p className="text-white text-justify bg-[#00000050] p-3 backdrop-blur-2xl rounded-box opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 ease-in-out duration-300">
                                Di Paket Umroh Reguler kami menyediakan layanan perjalanan ibadah yang akan memberikan pengalaman terbaik untuk Anda. Dengan penerbangan yang nyaman, akomodasi berkualitas, transportasi handal, itinerary terstruktur, serta harga yang bersahabat kami memastikan perjalanan umroh Anda lancar dan bermakna. Hubungi kami segera untuk reservasi.
                            </p>
                            <a
                                href=""
                                className="text-white bg-blue-500 py-2 px-3 mt-2 opacity-0 rounded-full backdrop-blur-sm w-fit group-hover:opacity-100 duration-300 font-bold group-hover:scale-100 scale-50"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div className="relative lg:w-[41lvw] lg:h-[75lvh] h-[50lvh] w-[75lvw] group carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1633546707050-88e2b545831c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW1yYWh8ZW58MHx8MHx8fDA%3D"
                            alt=""
                            className="rounded-[30px] w-full object-cover h-auto brightness-[.85] duration-200 group-hover:brightness-100"
                        />
                        <div className="absolute inset-5 w-fit flex flex-col justify-end group">
                            <div className="text-white group-hover:opacity-0 duration-100 group-hover:scale-50 scale-300">
                                <p className="">
                                    Paket Umroh
                                </p>
                                <p className="uppercase tracking-widest text-yellow-400 drop-shadow-lg text-3xl lg:text-4xl font-semibold">
                                    Plus+
                                </p>
                            </div>
                        </div>
                        <div className="absolute flex flex-col justify-end inset-5">
                            <p className="text-white text-justify bg-[#00000050] p-3 backdrop-blur-2xl rounded-box opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 ease-in-out duration-300">
                                Di Paket Umroh Plus lebih banyak layanan dan keuntungan yang akan anda dapatkan. Penerbangan yang super nyaman, akomodasi yang lebih bermutu tinggi, pendampingan spiritual, kami akan pastikan perjalanan Umroh Anda berjalan dengan lancar dan menjadikan ini pengalaman yang tidak akan anda lupakan. Kami juga akan mengurus semua administrasi, serta memberikan waktu dan energi untuk sepenuhnya menikmati ibadah Anda. Hubungi kami segera untuk penawaran selengkapnya.
                            </p>
                            <a
                                href=""
                                className="text-white bg-blue-500 py-2 px-3 mt-2 opacity-0 rounded-full backdrop-blur-sm w-fit group-hover:opacity-100 duration-300 font-bold group-hover:scale-100 scale-50"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}