import "./globals.css";
import { Inter, Lato } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingBtn";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jasmine Travel",
  description: "Layanan Haji Umroh dan Travel Terlengkap!",
};

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth transition duration-500">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
      </head>
      <body className={lato.className}>
        <section>
          <Navbar />
          <FloatingButton />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
