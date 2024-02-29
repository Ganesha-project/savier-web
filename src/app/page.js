import { AboutUs } from "@/components/AboutUs";
import { AnimateOnce } from "@/components/AnimateOnce";
import { BannerText } from "@/components/BannerText";
import { ContactUs } from "@/components/ContactUs";
import { Location } from "@/components/Location";
import { Products } from "@/components/Products";
import { SlideshowBg } from "@/components/SlideshowBg";
import { VisionMission } from "@/components/VisionMision";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <AnimateOnce animation={'animate__zoomInUp'}>
        <SlideshowBg />
        <BannerText />
      </AnimateOnce>
      <AnimateOnce animation={'animate__zoomInUp'}>
        <AboutUs />
      </AnimateOnce>
      <AnimateOnce animation={'animate__zoomInUp'}>
        <WhyUs />
      </AnimateOnce>
      <AnimateOnce animation={'animate__zoomInUp'}>
        <VisionMission />
      </AnimateOnce>
      <AnimateOnce animation={'animate__zoomInUp'}>
        <Products />
      </AnimateOnce>
      <AnimateOnce animation={'animate__zoomInUp'}>
        <ContactUs />
      </AnimateOnce>
      <AnimateOnce animation={'animate__zoomInUp'}>
        <Location />
      </AnimateOnce>
    </>
  );
}
