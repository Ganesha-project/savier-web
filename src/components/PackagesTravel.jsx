import Image from "next/image"
import Link from "next/link"

export const PackagesTravel = () => {
    const WaLink = "https://api.whatsapp.com/send?phone=6285215402378&text=Hello%20Savier%20Jasmine"
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center">
                <section className="lg:mx-32 mx-5">
                    <div className="mb-5">
                        <h1 className="lg:text-6xl text-3xl text-center font-bold tracking-wider">
                            Paket Wisata & Penyewaaan Kendaraan
                        </h1>
                    </div>

                    <div className="carousel flex gap-5 lg:rounded-[30px]">
                        <div className="relative lg:w-[41lvw] lg:h-[75lvh] h-[60lvh] w-[80lvw] group carousel-item">
                            <Image
                                width={1000}
                                height={2000}
                                src="https://images.unsplash.com/photo-1512100254544-47340ba56b5d?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="rounded-[30px] w-full object-cover h-full brightness-[.80] duration-200 group-hover:brightness-100"
                            />
                            <div className="absolute inset-5 w-fit flex flex-col justify-end group">
                                <div className="text-white group-hover:opacity-0 duration-100 group-hover:scale-50 scale-300">
                                    <p className="">
                                        Paket Perjalanan
                                    </p>
                                    <p className="uppercase tracking-widest text-3xl lg:text-4xl font-semibold drop-shadow-lg">
                                        Wisata Dalam dan Luar Negeri
                                    </p>
                                </div>
                            </div>
                            <div className="absolute flex flex-col justify-end inset-5">
                                <p className="text-white text-justify bg-[#00000050] p-3 backdrop-blur-2xl rounded-box opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 ease-in-out duration-300">
                                    Mari Jelajahi berbagai macam keindahan Dunia dengan Paket Perjalanan Wisata kami. Rasakan pengalaman Wisata yang autentik dan menarik dengan layanan Paket Wisata kami. Dapatkan kenangan berharga dengan panduan profesional dari kami. Hubungi kami sekarang untuk merencanakan perjalanan Anda ke destinasi impian Anda!

                                </p>
                                <Link
                                    href={WaLink}
                                    className="text-white bg-blue-500 py-2 px-3 mt-2 opacity-0 rounded-full backdrop-blur-sm w-fit group-hover:opacity-100 duration-300 font-bold group-hover:scale-100 scale-50"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        <div className="relative lg:w-[41lvw] lg:h-[75lvh] h-[60lvh] w-[80lvw] group carousel-item">
                            <Image
                                width={1000}
                                height={2000}
                                src="https://media.istockphoto.com/id/945297486/id/foto/bus-wisata-putih-berturut-turut.jpg?s=612x612&w=0&k=20&c=ORNJkQz-lEBngwnsEHEM0fBuC8kEQ8kTzNXvhC6dC-8="
                                alt=""
                                className="rounded-[30px] w-full object-cover h-full brightness-[.85] duration-200 group-hover:brightness-100"
                            />
                            <div className="absolute inset-5 w-fit flex flex-col justify-end group">
                                <div className="text-white group-hover:opacity-0 duration-100 group-hover:scale-50 scale-300">
                                    <p className="">
                                        Penyewaan
                                    </p>
                                    <p className="uppercase tracking-widest drop-shadow-lg text-3xl lg:text-4xl font-semibold">
                                        Mobil, Bus, dan Truck
                                    </p>
                                </div>
                            </div>
                            <div className="absolute flex flex-col justify-end inset-5">
                                <p className="text-white text-justify bg-[#00000050] p-3 backdrop-blur-2xl rounded-box opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 ease-in-out duration-300">
                                    Kami menyediakan layanan penyewaan berbagai macam transportasi, mulai dari Mobil, Bus, hingga Truck dengan kapasitas yang sesuai dengan kebutuhan Anda. Dengan armada Transportasi yang unggul dan pemeliharaan yang rutin, kami siap memenuhi segala kebutuhan transportasi Anda dan membuat perjalanan Anda menjadi lebih nyaman. Hubungi kami sekarang untuk penawaran yang terbaik dari kami.
                                </p>
                                <Link
                                    href={WaLink}
                                    className="text-white bg-blue-500 py-2 px-3 mt-2 opacity-0 rounded-full backdrop-blur-sm w-fit group-hover:opacity-100 duration-300 font-bold group-hover:scale-100 scale-50"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}