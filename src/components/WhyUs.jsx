import { GrAed } from "react-icons/gr";

export const WhyUs = () => {
    return (
        <>
            <section className="lg:mx-32 mx-5 mt-20">
                <div>
                    <h1 className="lg:text-6xl text-3xl text-center font-bold tracking-wider">
                        Top values for you
                    </h1>
                    <h1 className="lg:text-xl text-center font-medium tracking-normal text-gray-500 mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-3 mt-10">
                    <div className="flex flex-col items-center justify-center gap-3 lg:w-[25%]">
                        <div className="bg-base-200 p-3 rounded-full w-fit text-gray-600">
                            <GrAed size={25} />
                        </div>
                        <h1 className="font-semibold mb-3">
                            Carefully Fast
                        </h1>
                        <p className="text-center text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, modi! Libero maxime dolore sapiente deleniti atque porro similique,.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:w-[25%]">
                        <div className="bg-base-200 p-3 rounded-full w-fit text-gray-600">
                            <GrAed size={25} />
                        </div>
                        <h1 className="font-semibold mb-3">
                            Carefully Fast
                        </h1>
                        <p className="text-center text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, modi! Libero maxime dolore sapiente deleniti atque porro similique,.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:w-[25%]">
                        <div className="bg-base-200 p-3 rounded-full w-fit text-gray-600">
                            <GrAed size={25} />
                        </div>
                        <h1 className="font-semibold mb-3">
                            Carefully Fast
                        </h1>
                        <p className="text-center text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, modi! Libero maxime dolore sapiente deleniti atque porro similique,.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:w-[25%]">
                        <div className="bg-base-200 p-3 rounded-full w-fit text-gray-600">
                            <GrAed size={25} />
                        </div>
                        <h1 className="font-semibold mb-3">
                            Carefully Fast
                        </h1>
                        <p className="text-center text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, modi! Libero maxime dolore sapiente deleniti atque porro similique,.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}