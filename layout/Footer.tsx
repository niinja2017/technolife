import ArrowUp from "@/public/svg/FooterSvg/ArrowUp"
import FooterLogo from "@/public/svg/FooterSvg/FooterLogo"

import Instagram from './../public/images/FooterImg/footerImgsnd3HZ.webp'
import Aparat from './../public/images/FooterImg/footerImgLueLo3.webp'
import Telegram from './../public/images/FooterImg/footerImgcHi6f1.webp'
import Youtube from './../public/images/FooterImg/footerImg7ujbp2.webp'

import Bazzar from './../public/images/FooterImg/footerBazzar.webp'
import Sibapp from './../public/images/FooterImg/footerSibapp.webp'
import Mayket from './../public/images/FooterImg/footerMayket.webp'

import technoP from './../public/images/FooterImg/footerImg9b2XMW.webp'
import technoGold from './../public/images/FooterImg/footerImgcXMKSD.webp'
import technoExp from './../public/images/FooterImg/footerImghICzG8.webp'

import UOTC from './../public/svg/FooterSvg/download.svg'
import License from "./../public/images/FooterImg/c4.webp";
import TradeA from "./../public/images/FooterImg/c5.webp";
import Samandehi from "./../public/images/FooterImg/samandehi.webp";

import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <>
            <footer className="mx-3 bg-linear-to-r rounded-4xl px-1 md:px-10 xl:px-35 from-[#0079B1] to-[#1B3671]">
                {/* section 1 */}
                <div className="flex justify-between items-center border-b border-white">
                    <FooterLogo />
                    <Link href={'/'} className="flex space-x-5 bg-white px-8 py-3 rounded-xl">
                        <ArrowUp />
                        <span>بازگشت به بالا</span>
                    </Link>
                </div>

                {/* section 2 */}
                <div className="py-10 border-b border-white">
                    <ul className="flex flex-wrap gap-y-15">
                        {/* ستون اول */}
                        <ul className="space-y-3 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                            <h3 className="text-white font-bold text-xl pb-2">دسترسی سریع</h3>
                            <li className="text-white text-[15px] pt-2">
                                <Link href={'/'}>بلاگ</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>خرید گوشی</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>گوشی سامسونگ</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>گوشی آیفون</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>گوشی شیائومی</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>گوشی پوکو</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>مقایسه گوشی</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>خرید لپ تاپ</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>هندزفری بلوتوثی</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>لپ تاپ ایسوس</Link>
                            </li>
                        </ul>

                        {/* ستون دوم */}
                        <ul className="space-y-3 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                            <h3 className="text-white font-bold text-xl pb-2">پرفروش ترین محصولات</h3>
                            <li className="text-white text-[15px] pt-2">
                                <Link href={'/'}>بلک فرایدی ۱۴۰۴</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>گیمینگ</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>آیفون ۱۷</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>آیفون ۱۷ پرومکس</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>گوشی a۱۷</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>گوشی s۲۵ سامسونگ</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>ساعت هوشمند</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>مانیتور</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>هارد اکسترنال</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>لوازم خانگی</Link>
                            </li>
                        </ul>

                        {/* ستون سوم */}
                        <ul className="space-y-3 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                            <h3 className="text-white font-bold text-xl pb-2">درباره ما</h3>
                            <li className="text-white text-[15px] pt-2">
                                <Link href={'/'}>تکنولایف در یک نگاه</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>اهداف و تعهد های ما</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>سوالات متداول</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>فروشگاه های حضوری</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>تماس با ما</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>گزارش سال ۱۴۰۳</Link>
                            </li>
                        </ul>

                        {/* ستون چهارم */}
                        <ul className="space-y-3 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                            <h3 className="text-white font-bold text-xl pb-2">پیش از خرید</h3>
                            <li className="text-white text-[15px] pt-2">
                                <Link href={'/'}>راهنمای خرید اقساطی</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>خرید سازمانی</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>راهنمای خرید از تکنولایف</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>روش های خرید از تکنولایف</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>ضمانت هفت‌روزه تکنولایف</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>شیوه‌ها و هزینه ارسال</Link>
                            </li>
                        </ul>

                        {/* ستون پنجم */}
                        <ul className="space-y-3 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                            <h3 className="text-white font-bold text-xl pb-2">پس از خرید</h3>
                            <li className="text-white text-[15px] pt-2">
                                <Link href={'/'}>تضمین رجیستری</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>رویه‌های بازگرداندن کالا</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>سوالات متداول رجیستری</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>رهگیری سفارش</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>راهنمای مرجوعی در سایت</Link>
                            </li>
                        </ul>

                        {/* ستون ششم */}
                        <ul className="space-y-3 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                            <h3 className="text-white font-bold text-xl pb-2">قوانین و مقررات</h3>
                            <li className="text-white text-[15px] pt-2">
                                <Link href={'/'}>قوانین و مقررات</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>حریم خصوصی کاربران</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>از زبان مشتریان تکنولایف</Link>
                            </li>
                            <li className="text-white text-[15px]">
                                <Link href={'/'}>چرا تکنولایف؟</Link>
                            </li>
                        </ul>
                    </ul>
                </div>

                {/* section 3 */}
                <div className="flex flex-wrap space-y-10 py-10 border-b border-white">

                    {/* ستون 1 */}
                    <div className="space-y-5 w-full md:w-1/2 lg:w-1/3">
                        <h3 className="text-white font-bold text-xl">ارتباط با ما</h3>
                        <h4 className="text-white">تلفن:
                            <span className="mr-1"><Link href="/">۹۱۰۷۷۵۰۰ - ۰۲۱</Link></span>
                            -
                            <span className="mr-1"><Link href="/">۵۸۴۲۴۰۰۰ - ۰۲۱</Link></span>
                        </h4>
                        <h4 className="text-white">ایمیل:<Link href="/" className="mr-1">info@technolife.com</Link></h4>
                    </div>

                    {/* ستون 2 */}
                    <div className="space-y-5 w-full md:w-1/2 lg:w-1/3">
                        <h3 className="text-white font-bold text-xl">شبکه های اجتماعی</h3>
                        <div className="flex items-center gap-5">
                            <Link href="/"><Image src={Instagram} alt="instagram" className="filter brightness-0 invert hover:filter-none transition" /></Link>
                            <Link href="/"><Image src={Aparat} alt="Aparat" className="filter brightness-0 invert hover:filter-none transition" /></Link>
                            <Link href="/"><Image src={Telegram} alt="Telegram" className="filter brightness-0 invert hover:filter-none transition" /></Link>
                            <Link href="/"><Image src={Youtube} alt="Youtube" className="filter brightness-0 invert hover:filter-none transition" /></Link>
                        </div>
                    </div>

                    {/* ستون 3 */}
                    <div className="space-y-5 w-full md:w-1/2 lg:w-1/3">
                        <h3 className="text-white font-bold text-xl">دانلود اپلیکیشن ما از:</h3>
                        <div className="flex items-center gap-5">
                            <Link href="/" className="bg-white px-6 py-2 rounded"><Image src={Bazzar} className="size-full" alt="Bazzar" /></Link>
                            <Link href="/" className="bg-white px-6 py-2 rounded"><Image src={Sibapp} className="size-full" alt="Sibapp" /></Link>
                            <Link href="/" className="bg-white px-6 py-2 rounded"><Image src={Mayket} className="size-full" alt="Mayket" /></Link>
                        </div>
                    </div>

                </div>

                {/* section 4 */}
                <div className="flex flex-wrap space-y-10 md:space-y-0 py-10 ">
                    <div className="w-full md:w-1/2 flex space-x-5 items-center justify-center md:justify-start">
                        <Link href={'/'}><Image className="w-32" src={technoP} alt="technoP" /></Link>
                        <Link href={'/'}><Image className="w-32" src={technoGold} alt="technoGold" /></Link>
                        <Link href={'/'}><Image className="w-32" src={technoExp} alt="technoExp" /></Link>
                    </div>

                    <div className="w-full md:w-1/2 flex space-x-5 items-center md:justify-end px-4 justify-center">
                        <Link href={'/'} className="bg-white rounded w-20 flex items-center justify-center h-20"><Image className="w-14" src={UOTC} alt="UOTC" /></Link>
                        <Link href={'/'} className="bg-white rounded w-20 flex items-center justify-center h-20"><Image className="w-14" src={License} alt="License" /></Link>
                        <Link href={'/'} className="bg-white rounded w-20 flex items-center justify-center h-20"><Image className="w-14" src={TradeA} alt="TradeA" /></Link>
                        <Link href={'/'} className="bg-white rounded w-20 flex items-center justify-center h-20"><Image className="w-14" src={Samandehi} alt="Samandehi" /></Link>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center py-10 space-x-4">
                    <span className="text-white font-bold">
                        ۱۳۹۱
                        -
                        ۱۴۰۴
                    </span>
                    <h2 className="text-white font-bold">تمامی حقوق مادی و معنوی این سایت متعلق به تکنولایف می‌باشد.</h2>
                </div>
            </footer>
        </>
    )
}

export default Footer
