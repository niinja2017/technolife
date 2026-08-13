"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

import Banner1 from "@/public/images/HeaderSliderImg/banner_SlideBanner_2CYedN_1bc9f693-22a2-412f-890e-091a71f7233a (1).webp";
import Banner2 from "@/public/images/HeaderSliderImg/banner_SlideBanner_2fUyBp_712ddae1-6672-4d5f-9428-8ba56f8ac5cb.webp";
import Banner3 from "@/public/images/HeaderSliderImg/banner_SlideBanner_49WzQO_ba9771ee-14af-4302-8ea0-035a6ae7c7b3.webp";
import Banner4 from "@/public/images/HeaderSliderImg/banner_SlideBanner_7L2h7A_30855587-7bb7-4e90-8d8b-4c12f3b0eacb.webp";
import Banner5 from "@/public/images/HeaderSliderImg/banner_SlideBanner_7NslsY_2cae573d-c9d6-47c4-950f-c4cedcf898dd.webp";
import Banner6 from "@/public/images/HeaderSliderImg/banner_SlideBanner_CyF8uk_7a66a246-1aaf-4c19-96bf-3b4ae5a81774.webp";
import Banner7 from "@/public/images/HeaderSliderImg/banner_SlideBanner_ExQGzn_c6ca19cd-6ec7-488d-85cc-4f0171c06e15.webp";
import Banner8 from "@/public/images/HeaderSliderImg/banner_SlideBanner_FdinDt_c85f0007-5dc4-4bb9-8d8b-039acca7310a.gif";
import Banner9 from "@/public/images/HeaderSliderImg/banner_SlideBanner_IR39rz_74706191-630f-4e34-9319-e788ba84bfdd.webp";
import Banner10 from "@/public/images/HeaderSliderImg/banner_SlideBanner_pWNZCE_233b27a5-692a-4073-bcee-d9d316fd88d5.webp";
import Banner11 from "@/public/images/HeaderSliderImg/banner_SlideBanner_w4blZT_31559d92-c15d-460d-88ea-f7dbaaaf940e.webp";

const images = [
    Banner1, Banner2, Banner3, Banner4, Banner5,
    Banner6, Banner7, Banner8, Banner9, Banner10, Banner11
];

export default function HeaderSlider() {
    const prevBtn = useRef<HTMLDivElement | null>(null);
    const nextBtn = useRef<HTMLDivElement | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    // اتصال امن دکمه‌ها به swiper
    useEffect(() => {
        if (!swiperInstance) return;

        swiperInstance.params.navigation.prevEl = prevBtn.current;
        swiperInstance.params.navigation.nextEl = nextBtn.current;

        swiperInstance.navigation.destroy();
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
    }, [swiperInstance]);

    return (
        <div className="relative group w-full">

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                modules={[Navigation, Pagination, Autoplay]}
                onSwiper={setSwiperInstance}
                className="relative"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[350px] md:h-[450px] lg:h-[550px] relative">
                            <Link href={'/'}>
                                <Image src={img} alt="banner" className="object-cover" fill />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Prev Button */}
            <div
                ref={nextBtn}
                className="
          absolute right-31 bottom-10
          w-12 h-12 rounded-full
          lg:flex items-center justify-center
          bg-white text-black cursor-pointer
          opacity-0 group-hover:opacity-100 transition
          z-50
          hidden
        "
            >
                <svg width="22" height="22" stroke="currentColor" fill="none">
                    <path d="M14 4L6 11l8 7" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            {/* Next Button */}
            <div
                ref={prevBtn}
                className="
          absolute right-17 bottom-10
          w-12 h-12 rounded-full
          lg:flex items-center justify-center
          bg-white text-black cursor-pointer
          opacity-0 group-hover:opacity-100 transition
          z-50
          hidden
        "
            >
                <svg width="22" height="22" stroke="currentColor" fill="none">
                    <path d="M8 4l8 7-8 7" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            {/* 👇 Pagination زیر دکمه‌ها */}
            <div className="custom-pagination absolute right-12 bottom-4 cursor-pointer space-x-2 z-10 flex items-center"></div>
        </div>
    );
}
