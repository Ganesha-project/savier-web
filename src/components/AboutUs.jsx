import Image from "next/image"

export const AboutUs = () => {
    return (
        <>
            <div id="about-us" />
            <section className="lg:mx-32 mx-5 mt-20">
                <div className="w-full h-[70lvh] relative">
                    <Image
                        width={1000}
                        height={1000}
                        src="https://images.unsplash.com/photo-1699234726037-799bf98e821c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="rounded-[30px] w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-5 z-10 flex flex-col gap-3 justify-end">
                        <h1 className="lg:text-5xl text-xl text-white drop-shadow-xl rounded-box px-5 font-semibold w-fit">
                            About Us
                        </h1>
                        <p className="text-white drop-shadow-xl rounded-box px-5 pb-5 lg:w-[75%] lg:text-xl">
                            Di Savier Jasmine Tour & Travel kami memahami bahwa setiap perjalanan adalah cerita unik yang membentuk bagian berharga dari kehidupan Anda. Sebagai penyedia layanan Travel dan Haji, kami bangga menjadi teman setia yang akan mengantarkan Anda meraih impian perjalanan Anda. Dengan kombinasi antara inovasi, dedikasi, dan nilai-nilai keberagaman, kami berkomitmen untuk memberikan pelayanan yang memenuhi segala kebutuhan Travel Anda.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}