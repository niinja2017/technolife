'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import Banner1 from "@/public/images/SectionSliderImg/banner_CircleCategories_0iMmqP_38665320-8a04-49e1-8724-3a45aa1b437a.webp";
import Banner2 from "@/public/images/SectionSliderImg/banner_CircleCategories_5MjsFu_2226c193-491d-4aa0-b754-108a63ee9420.webp";
import Banner3 from "@/public/images/SectionSliderImg/banner_CircleCategories_6x4gRz_0cd65c0d-1b86-4fb5-9609-37788665d479.webp";
import Banner4 from "@/public/images/SectionSliderImg/banner_CircleCategories_8ITpYc_43314fc6-a395-4931-83f2-e0da95e8085b.webp";
import Banner5 from "@/public/images/SectionSliderImg/banner_CircleCategories_9VENk4_bc844659-91e5-4873-8950-25703d770578.webp";
import Banner6 from "@/public/images/SectionSliderImg/banner_CircleCategories_QHsBmV_f1a9d4d7-35d6-4b5c-a41b-e029311c4dee.webp";
import Banner7 from "@/public/images/SectionSliderImg/banner_CircleCategories_TFwRxh_188016f1-46d5-48cf-a0ea-8cbae0ab3e62.webp";
import Banner8 from "@/public/images/SectionSliderImg/banner_CircleCategories_bB8ftO_3a169020-2931-47d9-93ef-0b0bc1043762.webp";
import Banner9 from "@/public/images/SectionSliderImg/banner_CircleCategories_haOtmz_03d45f32-436f-4760-8a5e-e30b4f4abdde.webp";
import Banner10 from "@/public/images/SectionSliderImg/banner_CircleCategories_lVLica_0b74146e-2325-42e1-a808-399835917688.webp";
import ArrowUp from "@/public/svg/FooterSvg/ArrowUp";

const images = [
    { src: Banner1, label: 'گوشی سامسونگ' }, { src: Banner2, label: 'گوشی سامسونگ' }, { src: Banner3, label: 'گوشی سامسونگ' }, { src: Banner4, label: 'گوشی سامسونگ' }, { src: Banner5, label: 'گوشی سامسونگ' },
    { src: Banner6, label: 'گوشی سامسونگ' }, { src: Banner7, label: 'گوشی سامسونگ' }, { src: Banner8, label: 'گوشی سامسونگ' }, { src: Banner9, label: 'گوشی سامسونگ' }, { src: Banner10, label: 'گوشی سامسونگ' }
];

const SectionSlider = () => {
    return (
        <div className="w-[80%] mx-auto group relative">
            <Swiper
                slidesPerView={6}
                spaceBetween={20}
                pagination={{ clickable: true, }}
                navigation={{
                    nextEl: ".swiper-button-next-custom2",
                    prevEl: ".swiper-button-prev-custom2",
                }}
                modules={[Navigation]}
                className="mx-auto flex justify-center"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >
                {images.map((item, index) => (
                    <SwiperSlide className="pt-2" key={index}>
                        <div className="w-34 h-[185px] flex flex-col items-center space-y-3 justify-center">
                            <Link href={'/'} className="w-34">
                                <Image src={item.src} alt="banner" className="h-34 w-34 ring-2 ring-blue-600 p-1 hover:ring-4 rounded-full " />
                            </Link>
                            <p>{item.label}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* دکمه PREV */}
            <button className="swiper-button-prev-custom2 [&.swiper-button-disabled]:opacity-40   rotate-90 absolute cursor-pointer w-10 h-10 border border-gray-400 flex items-center justify-center -right-5 top-1/2 -translate-y-3/4 z-10 bg-white p-2 rounded-full shadow">
                <ArrowUp />
            </button>

            {/* دکمه NEXT */}
            <button className="swiper-button-next-custom2 [&.swiper-button-disabled]:opacity-40 absolute -rotate-90 cursor-pointer w-10 h-10 border border-gray-400 flex items-center justify-center -left-5 top-1/2 -translate-y-3/4 z-10 bg-white p-2 rounded-full shadow">
                <ArrowUp />
            </button>
        </div>
    )
}

export default SectionSlider
