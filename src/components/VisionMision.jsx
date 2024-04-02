'use client'
import { useState } from "react";
import { IoPaperPlane } from "react-icons/io5";
import { FaPersonRunning } from "react-icons/fa6";
import Image from "next/image";

export const VisionMission = () => {
    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id);
    }
    return (
        <>
            <div id="vision-mission" />
            <div className="min-h-screen flex flex-col justify-center">
                <section className="lg:mx-32 mx-5">
                    <div className="relative w-[100$]">
                        <Image
                            width={1000}
                            height={1000}
                            src="https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="w-full h-[80lvh] rounded-[30px] object-cover brightness-75"
                        />
                        <div className="absolute inset-5 lg:inset-14 flex flex-col gap-5 justify-end self-end border border-[#ffffff5b] h-fit p-5 rounded-[30px] lg:w-[50%]">
                            <div className="flex flex-row gap-5 lg:w-fit order-last lg:order-none ">
                                <button
                                    onClick={() => updateToggle(1)}
                                    className={toggle === 1 ? 'bg-[#ffffffd2] backdrop-blur-xl p-3 w-full md:w-fit lg:w-fit h-fit rounded-box scale-105 ml-1 transform duration-500' : 'bg-[#0000004d] backdrop-blur-xl p-3 h-fit rounded-box text-white text-opacity-50 lg:w-fit animate-pulse'}>
                                    <div className="flex items-center gap-2">
                                        <IoPaperPlane size={25} />
                                        <a className="lg:text-3xl text-xl font-semibold">
                                            Vision
                                        </a>
                                    </div>
                                </button>
                                <button
                                    onClick={() => updateToggle(2)}
                                    className={toggle === 2 ? 'bg-[#ffffffd2] backdrop-blur-xl p-3 w-full md:w-fit lg:w-fit h-fit rounded-box scale-105 mr-1 transform duration-500' : 'bg-[#0000004d] backdrop-blur-xl p-3 h-fit rounded-box text-white text-opacity-50 lg:w-fit animate-pulse'}>
                                    <div className="flex items-center gap-2">
                                        <FaPersonRunning size={25} />
                                        <a className="lg:text-3xl text-xl font-semibold">
                                            Mission
                                        </a>
                                    </div>
                                </button>
                            </div>
                            <div className={toggle === 1 ? "visible inline-block" : "hidden"} >
                                <div className="text-white">
                                    <p className="lg:text-xl drop-shadow-xl lg:text-justify">
                                        Kami berkomitmen untuk menjadi Mitra Perjalanan yang unggul, terpercaya, dan dapat membantu Klien mewujudkan mimpi mereka untuk menjelajahi berbagai macam Destinasi di seluruh Dunia hingga melakukan Perjalanan Suci Haji, dengan memberikan pelayanan yang optimal dan pengalaman yang tak terlupakan.
                                    </p>
                                </div>
                            </div>
                            <div className={toggle === 2 ? "visible inline-block" : "hidden"} >
                                <div className="text-white">
                                    <div className="lg:text-xl drop-shadow-xl lg:text-justify">
                                        <p>1. Layanan perjalanan berkualitas dengan standar keamanan terbaik, memberikan pengalaman luar biasa.</p>

                                        <p>2. Menyelenggarakan perjalanan Haji dengan keselamatan dan kenyamanan utama, memastikan ibadah dilakukan dengan khidmat.</p>

                                        <p>3. Mendukung pertumbuhan ekonomi lokal dan memberikan peluang pekerjaan serta pendidikan.</p>

                                        <p>4. Memberikan edukasi tentang tanggung jawab selama perjalanan dan peduli lingkungan.</p>

                                        <p>5. Terus berinovasi dalam teknologi dan layanan perjalanan untuk pengalaman yang lebih baik.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div>
        </>
    )
}