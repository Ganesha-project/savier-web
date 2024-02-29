export const Location = () => {

    return (
        <>
            <div id="location" />
            <section className="lg:mx-32 mx-5 mt-20">
                <div className="flex items-center mb-7">
                    <h1 className="lg:text-6xl text-3xl font-bold tracking-wider">
                        Our Address
                    </h1>
                </div>
                <div className="w-full rounded-[30px] overflow-hidden">
                    <div class="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.880973765095!2d119.41221172883606!3d-5.122874899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf029f33567041%3A0x83b40fc945132089!2sJl.%20Sarappo%20No.100A%2C%20RT.001%2FRW.01%2C%20Butung%2C%20Kec.%20Wajo%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan%2090173!5e0!3m2!1sid!2sid!4v1708945775362!5m2!1sid!2sid"
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
        </>
    )
}