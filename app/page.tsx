import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar/Navbar";
import HeaderSlider from "@/layout/Slider/HeaderSlider";
import ItemShopSlider from "@/layout/Slider/ItemShopSlider";
import SectionSlider from "@/layout/Slider/SectionSlider";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import baaner1 from "./../public/images/SectionPercent/banner_SecondTripletBanners_6xU3qn_c210e84e-fe98-42e4-a9e8-2278fa4fc41e.webp";
import baaner2 from "./../public/images/SectionPercent/banner_SecondTripletBanners_lKjbUO_d87aa85c-8c5a-4862-9312-ab13b31615bb.webp";
import baaner3 from "./../public/images/SectionPercent/banner_SecondTripletBanners_qmeIFC_9354b541-8188-4ab0-be44-c27da83585f3.webp";

const images = [
    { src : baaner1 }, { src : baaner2 }, { src : baaner3 }
]

export default function Home() {
    return (
        <>
            <div id="TopHome"></div>
            <Navbar />

            <div className="mt-[129px] xl:mt-[137px] mb-10 overflow-hidden">
                <HeaderSlider />
            </div>
            <div className="my-10">
                <SectionSlider />
            </div>
            <div className="mb-10">
                <ItemShopSlider />
            </div>

            <div className="flex flex-wrap w-[80%] mx-auto my-10">
                {images.map((item, index) =>
                    <Link key={index} href={'/'} className="w-[33%]">
                        <Image src={item.src} alt="baaner"/>
                    </Link>
                )}
            </div>

            <Footer />
        </>
    );
}
