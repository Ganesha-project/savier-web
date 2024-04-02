import { GrAed } from "react-icons/gr";
import { PiListChecksBold } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

export const WhyUs = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center">
                <div className="bg-gray-100 p-16">
                    <section className="lg:mx-32 mx-5">
                        <div>
                            <h1 className="lg:text-5xl text-3xl text-center font-bold tracking-wider">
                                Kenapa harus di Savier Jasmine Tour & Travel?
                            </h1>
                            <h1 className="lg:text-xl text-center font-medium tracking-normal text-gray-500 mt-5">
                                Kami menyajikan berbagai macam layanan yang lengkap mulai dari Paket Travel, Paket Haji, sampai dengan Paket Wisata!
                            </h1>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center gap-3 mt-10">
                            <div className="flex flex-col items-center justify-center gap-3 lg:w-[25%]">
                                <div className="bg-white p-3 rounded-full w-fit text-gray-600">
                                    <PiListChecksBold size={25} />
                                </div>
                                <h1 className="font-semibold mb-3">
                                    Paket Lengkap
                                </h1>
                                <p className="text-center text-gray-400">
                                    Kami menyajikan berbagai macam layanan yang lengkap mulai dari Paket Travel, Paket Haji, sampai dengan Paket Wisata!
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 lg:w-[25%]">
                                <div className="bg-white p-3 rounded-full w-fit text-gray-600">
                                    <GiReceiveMoney size={25} />
                                </div>
                                <h1 className="font-semibold mb-3">
                                    Harga Terjangkau
                                </h1>
                                <p className="text-center text-gray-400">
                                    Dengan sistem pemesanan yang mudah dan efisien, proses pemesanan perjalanan Anda akan kami proses dengan cepat!
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 lg:w-[25%]">
                                <div className="bg-white p-3 rounded-full w-fit text-gray-600">
                                    <GrAed size={25} />
                                </div>
                                <h1 className="font-semibold mb-3">
                                    Sistem Pemesanan Mudah
                                </h1>
                                <p className="text-center text-gray-400">
                                    Dengan sistem pemesanan yang mudah dan efisien, proses pemesanan perjalanan Anda akan kami proses dengan cepat!
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 lg:w-[25%]">
                                <div className="bg-white p-3 rounded-full w-fit text-gray-600">
                                    <RiCustomerService2Fill size={25} />
                                </div>
                                <h1 className="font-semibold mb-3">
                                    Pelayanan Responsif
                                </h1>
                                <p className="text-center text-gray-400">
                                    Kami berkomitmen untuk memberikan pelayanan yang ramah, tanggap, dan efisien agar memberikan pengalaman pelanggan yang optimal!
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}