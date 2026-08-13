'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import Banner1 from "@/public/images/ItemShopSliderImg/small_product-TLP-122499_e1694021-d279-460f-824c-9824c43377c9.webp";
import Banner2 from "@/public/images/ItemShopSliderImg/small_product-TLP-125910_bef27233-1c95-405a-86e3-99c4d2d1e24d.webp";
import Banner3 from "@/public/images/ItemShopSliderImg/small_product-TLP-126393_0c2cb58a-e6a1-4b56-a1af-47085523b60d.webp";
import Banner4 from "@/public/images/ItemShopSliderImg/small_product-TLP-130539_da09eda0-5ef4-11f0-aba2-33c4e03c9e17.webp";
import Banner5 from "@/public/images/ItemShopSliderImg/small_product-TLP-136040_1f7db1a5-729f-11f0-bea5-17f082fe705a.webp";
import Banner6 from "@/public/images/ItemShopSliderImg/small_product-TLP-142671_0462e9ac-0854-4ca2-acc8-2c29ca1a9858.webp";
import Banner7 from "@/public/images/ItemShopSliderImg/small_product-TLP-168682_e06921d9-fac9-4dde-a896-b588481c160f.webp";
import Banner8 from "@/public/images/ItemShopSliderImg/small_product-TLP-40809_dc29be35-1dc8-11ef-841f-9f7f9f3a37ea.webp";
import Banner9 from "@/public/images/ItemShopSliderImg/small_product-TLP-60990_119d77c1-cae0-431c-9d05-b5c1c480ce2e.webp";
import Banner10 from "@/public/images/ItemShopSliderImg/small_product-TLP-99319_58a851a8-feba-4b22-9982-1b720b6a15ff.webp";
import ArrowUp from "@/public/svg/FooterSvg/ArrowUp";

const images = [
    { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner1, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' }, { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner2, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' }, { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner3, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' }, { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner4, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' }, { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner5, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' },
    { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner6, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' }, { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner7, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' }, { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner8, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' }, { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner9, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' }, { typePercent: 'تکنو‌آف', percentTime: '12:00:00', pricePercent: '73,500,000 تومان', price: '71,990,000 تومان', percent: 3, src: Banner10, description: 'گوشی موبايل سامسونگ Galaxy A36 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام' }
];

const ItemShopSlider = () => {
    return (
        <div className="w-[80%] mx-auto group p-6 border-2 border-[#fed6d8] rounded-3xl my-5 relative">
            <div className="bg-[#A2191F] w-full py-4 px-12 flex rounded-xl mb-4 justify-between items-center ">
                <h4 className="text-white font-bold text-2xl">تکنوآف</h4>
                <Link className="text-white flex items-center" href={'/'}>نمایش همه &nbsp;&gt;</Link>
            </div>
            <Swiper
                slidesPerView={6}
                spaceBetween={20}
                pagination={{ clickable: true, }}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                modules={[Navigation]}
                className="relative"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    530: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    770: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1540: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >

                {images.map((item, index) => (
                    <SwiperSlide className="pt-2" key={index}>
                        <div className="w-[80%] mx-auto flex justify-between items-center">
                            <h5 className="text-[#da1e28] font-bold text-sm">{item.typePercent}</h5>
                            <h5 className="text-[#da1e28] font-bold text-sm">{item.percentTime}</h5>
                        </div>
                        <div className="w-[80%] mx-auto h-1 bg-[#da1e28] rounded-2xl"></div>
                        <div className="flex flex-col items-center space-y-3  border-l border-gray-300">
                            <Link href={'/'}>
                                <Image src={item.src} alt="banner" className="p-1" />
                            </Link>
                            <p className="line-clamp-2 text-gray-700 text-sm w-10/12">{item.description}</p>
                            <div className="flex justify-between w-[90%] pb-4 items-center relative">
                                <span className="bg-[#f70709] text-white px-2 rounded flex items-center justify-between text-sm">&#37; {item?.percent}</span>
                                <h5>
                                    {item.price}
                                </h5>
                                <span className="absolute -bottom-1 line-through text-sm left-0 text-gray-500">{item.pricePercent}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* دکمه PREV */}
            <button className="swiper-button-prev-custom [&.swiper-button-disabled]:opacity-40   rotate-90 absolute cursor-pointer w-10 h-10 border border-gray-400 flex items-center justify-center right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
                <ArrowUp />
            </button>

            {/* دکمه NEXT */}
            <button className="swiper-button-next-custom [&.swiper-button-disabled]:opacity-40 absolute -rotate-90 cursor-pointer w-10 h-10 border border-gray-400 flex items-center justify-center left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
                <ArrowUp />
            </button>
        </div>
    )
}

export default ItemShopSlider
