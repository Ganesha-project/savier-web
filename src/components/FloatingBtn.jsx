"use client"
import { useState, useEffect } from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

export const FloatingButton = () => {
    const WaLink = "https://api.whatsapp.com/send?phone=625215402378&text=Hello%20Savier%20Jasmine"
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fungsi yang dijalankan setiap kali komponen di-mount atau nilai isVisible berubah
        const handleScroll = () => {
            // Tentukan titik scroll ketika tombol muncul
            const scrollThreshold = 200;

            // Periksa posisi scroll
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Pasang event listener untuk memantau scroll
        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Dependency array kosong agar useEffect hanya dijalankan sekali saat komponen di-mount

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animasi scroll ke atas
        });
    };
    return (
        <>
            <div>
                <a
                    href={WaLink}
                    className="fixed bottom-6 lg:bottom-5 lg:right-5 right-6 z-50 bg-[#34bd4b] backdrop-blur-md hover:bg-[#0e253072] text-white rounded-full p-4 shadow-lg"
                >
                    <RiWhatsappFill size={25} />
                </a>
            </div>

            <div>
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-[11.5vh] md:bottom-[10vh] lg:bottom-[12vh] lg:right-5 right-6 z-50 bg-[#575757a0] backdrop-blur-md hover:bg-[#757575a0] text-white rounded-full p-4 shadow-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </button>
                )}
            </div>
        </>
    )
}