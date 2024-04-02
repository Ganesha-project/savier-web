export const Location = () => {

    return (
        <>
            <div id="location" />
            <div className="min-h-screen flex flex-col justify-center">
                <section className="lg:mx-32 mx-5">
                    <div className="flex items-center mb-7">
                        <h1 className="lg:text-6xl text-3xl font-bold tracking-wider">
                            Our Address
                        </h1>
                    </div>
                    <div className="w-full rounded-[30px] overflow-hidden">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.903039665767!2d106.94804789767603!3d-6.364822148003377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699348ea1a944d%3A0x2ed5cffca54d5d8d!2sDowntown%20Madison!5e0!3m2!1sid!2sid!4v1710320192715!5m2!1sid!2sid"
                                width={1300}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}