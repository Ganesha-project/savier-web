import { AiOutlineWhatsApp } from "react-icons/ai"
import { GrFacebookOption, GrInstagram, GrMail } from "react-icons/gr"

export const ContactUs = () => {
    return (
        <>
            <div id="contact" />
            <section className="lg:mx-32 mx-5 mt-20">
                <div className="flex gap-5">
                    <div className="lg:w-full w-full lg:h-[50lvh] h-[90lvh] relative">
                        <img
                            className="object-cover w-full h-full rounded-[30px] brightness-75"
                            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="contact-us" />
                        <div className="absolute inset-2 lg:w-fit rounded-[30px] flex flex-col justify-end gap-5">
                            <h1 className="lg:text-5xl text-3xl px-5 font-bold tracking-wider flex flex-col justify-end text-white">
                                Contact Us!
                            </h1>
                            <div className="lg:flex lg:flex-row flex-col grid grid-cols-1 justify-between gap-2 px-5 mb-5 lg:w-fit w-full h-auto">
                                <div className="bg-[#ffffffad] backdrop-blur-xl rounded-box p-5">
                                    <div className="lg:text-3xl flex items-center gap-2">
                                        <AiOutlineWhatsApp size={20} />
                                        <p>
                                            WhatsApp

                                        </p>
                                    </div>
                                    <p>
                                        0123 456 789
                                    </p>
                                </div>
                                <a
                                    href="mailto:saktiviekontama.p@gmail.com"
                                    className="  bg-[#ffffffad] text-gray-700 backdrop-blur-xl rounded-box p-5">
                                    <div className="lg:text-3xl flex items-center gap-2">
                                        <GrMail size={20} />
                                        <p>
                                            Email

                                        </p>
                                    </div>
                                    <p>
                                        saktiviekontama.p@gmail.com
                                    </p>
                                </a>
                                <a
                                    href="https://www.instagram.com/savierjasmine88/"
                                    className="  bg-[#ffffffad] text-gray-700 backdrop-blur-xl rounded-box p-5">
                                    <div className="lg:text-3xl flex items-center gap-2">
                                        <GrInstagram size={20} />
                                        <p>
                                            Instagram

                                        </p>
                                    </div>
                                    <p>
                                        @savierjasmine88
                                    </p>
                                </a>
                                <div className="  bg-[#ffffffad] text-gray-700 backdrop-blur-xl rounded-box p-5">
                                    <div className="lg:text-3xl flex items-center gap-2">
                                        <GrFacebookOption size={20} />
                                        <p>
                                            Facebook

                                        </p>
                                    </div>
                                    <p>
                                        facebook
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}