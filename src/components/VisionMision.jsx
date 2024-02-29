'use client'
import { useState } from "react";
import { AiOutlineRadarChart } from "react-icons/ai";
import { SlTarget } from "react-icons/sl";

export const VisionMission = () => {
    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id);
    }
    return (
        <>
            <div id="vision-mission" />
            <section className="lg:mx-32 mx-5 mt-20">
                <div className="relative w-[100$]">
                    <img
                        src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-full h-[80lvh] rounded-[30px] object-cover brightness-75"
                    />
                    <div className="absolute inset-5 lg:inset-14 flex flex-col gap-5 justify-end self-end border border-[#ffffff5b] h-fit p-5 rounded-[30px] lg:w-[50%]">
                        <div className="flex flex-row gap-5 lg:w-fit order-last lg:order-none ">
                            <button
                                onClick={() => updateToggle(1)}
                                className={toggle === 1 ? 'bg-[#ffffffd2] backdrop-blur-xl p-3 w-full md:w-fit lg:w-fit h-fit rounded-box scale-105 ml-1 transform duration-500' : 'bg-[#0000004d] backdrop-blur-xl p-3 h-fit rounded-box text-white text-opacity-50 lg:w-fit animate-pulse'}>
                                <div className="flex items-center gap-2">
                                    <AiOutlineRadarChart size={25} />
                                    <a className="lg:text-3xl text-xl font-semibold">
                                        Vision
                                    </a>
                                </div>
                            </button>
                            <button
                                onClick={() => updateToggle(2)}
                                className={toggle === 2 ? 'bg-[#ffffffd2] backdrop-blur-xl p-3 w-full md:w-fit lg:w-fit h-fit rounded-box scale-105 mr-1 transform duration-500' : 'bg-[#0000004d] backdrop-blur-xl p-3 h-fit rounded-box text-white text-opacity-50 lg:w-fit animate-pulse'}>
                                <div className="flex items-center gap-2">
                                    <SlTarget size={25} />
                                    <a className="lg:text-3xl text-xl font-semibold">
                                        Mission
                                    </a>
                                </div>
                            </button>
                        </div>
                        <div className={toggle === 1 ? "visible inline-block" : "hidden"} >
                            <div className="text-white">
                                <p className="lg:text-xl lg:text-justify">
                                    Becoming an innovative and inspiring Pioneer in the Maritime Export Industry, and contributing positively to the Economy and the Environment by providing high-quality and sustainable products.
                                </p>
                            </div>
                        </div>
                        <div className={toggle === 2 ? "visible inline-block" : "hidden"} >
                            <div className="text-white">
                                <p className="lg:text-xl lg:text-justify">
                                    We are committed to providing sustainable and environmentally-friendly services, ensuring that Our Business activities do not harm Marine Ecosystems and the surrounding environment. Additionally, We aim to build strong Partnership relationships with Customers, Suppliers, and other Stakeholders, fostering mutual growth and benefits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}