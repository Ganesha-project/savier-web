import Image from "next/image"

export const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content mt-20 rounded-tl-[30px] rounded-tr-[30px]">
                <aside>
                    <Image
                        src={'/SavierLogo.png'}
                        width={100}
                        height={100}
                        alt="" />
                    <p className="font-bold text-lg">Savier jasmine</p>
                    <p>Always be your best travel buddy</p>
                </aside>
                <nav className="w-[20lvw]">
                    <h6 className="footer-title">Address</h6>
                    <p
                        className="link link-hover"
                        href="https://www.google.com/maps?sca_esv=a6f2d24d067aab7e&output=search&q=Ruko+Downtown+madison+Blok+SHC+3+No.2,+Kota+Wisata,+Desa/Kelurahan+Ciangsana,+Kec.+Gunung+Putri,+Kab.+Bogor,+Provinsi+Jawa+Barat,+Kode+Pos:+16968&source=lnms&entry=mc&ved=1t:200715&ictx=111"
                    >
                        Ruko Downtown madison Blok SHC 3 No.2, Kota Wisata, Desa/Kelurahan
                        Ciangsana, Kec. Gunung Putri, Kab. Bogor, Provinsi Jawa Barat,
                        Kode Pos: 16968
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Navigation</h6>
                    <ul>
                        <li>
                            <a
                                href="#about-us"
                                className="link link-hover">
                                About Us</a>
                        </li>
                        <li>
                            <a
                                href="#vision-mission"
                                className="link link-hover">
                                Vision & Mission</a>
                        </li>
                        <li>
                            <a
                                href="#products"
                                className="link link-hover">
                                Products</a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="link link-hover">
                                Contact</a>
                        </li>
                        <li>
                            <a
                                href="#location"
                                className="link link-hover">
                                Location</a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h6 className="footer-title">contact</h6>
                    <ul>
                        <li>
                            <a
                                href=""
                                className="link link-hover">
                                WhatsApp</a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/savierjasmine88/"
                                className="link link-hover">
                                Instagram</a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="link link-hover">
                                Facebook</a>
                        </li>
                        <li>
                            <a
                                href="mailto:saktiviekontama.p@gmail.com"
                                className="link link-hover">
                                Email</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}