'use client'
import { useState } from "react";

import Bars from "@/public/svg/NavbarSvg/Bars";
import Logo from "@/public/svg/NavbarSvg/Logo";
import Search from "@/public/svg/NavbarSvg/Search";
import Shopping from "@/public/svg/NavbarSvg/Shopping";
import Link from "next/link";
import NavbarItem from "./NavbarItem";


const Navbar = () => {

    const [showSearch, setShowSearch] = useState<boolean>(false)

    return (
        <>
            <nav className="pt-4 px-6 border-b border-[#c7c7c7] fixed z-30 w-full top-0 bg-white">
                {/* این بخش شامل لوگو سرچ و ورود و ثبت نام و ایکون سبد خرید می شه */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-8">
                        <Link href={'/'}><Logo /></Link>
                        <div className="bg-[#F0F0F0] rounded-sm w-[620px] h-14 justify-center items-center lg:flex hidden">
                            <label htmlFor="Search"><Search /></label>
                            <input
                                id="Search"
                                className="w-[550px] h-6 px-4 py-6 outline-0 placeholder:text-[#9c9d9e] placeholder:font-bold select-none"
                                type="search"
                                placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید" />
                        </div>
                    </div>


                    <div className="flex items-center sm:space-x-8 space-x-4">
                        <button className="border border-[#223c78] cursor-pointer px-2 xl:px-6 py-1.5 rounded-md">
                            <span className="font-bold text-gray-600 text-xl sm:pl-3 border-l">ورود</span>
                            <span className="font-bold text-gray-600 text-xl sm:pr-5">ثبت نام</span>
                        </button>
                        <button className="border border-[#d7dee0] p-2 rounded-md cursor-pointer">
                            <Shopping />
                        </button>
                    </div>
                </div>

                {/* این بخش شامل ایتم های نوبار می شه برای مثال دسته بندی ها */}
                <div className="hidden lg:flex items-center pb-4 pt-6 mx-2">
                    <ul className="flex items-center gap-6 xl:gap-10 text-sm xl:text-base">
                        <NavbarItem />
                    </ul>
                </div>

                {/* این بخش هم برای فرست موبایل هست که زمانی که سرچ بالا حذف می شه یه ایکون سرچ اضافه بشه */}
                <div className="flex lg:hidden justify-between items-center py-3">
                    <div className="flex items-center gap-3">
                        <button className="p-2 border border-gray-300 rounded-md cursor-pointer">
                            <Bars />
                        </button>
                    </div>
                    <div className="flex items-center gap-3 relative">
                        <button onClick={() => setShowSearch(!showSearch)} className="p-2 border border-gray-300 rounded-md">
                            <Search />

                        </button>
                        {
                            showSearch
                            &&
                            <div className="animate-slideDown absolute left-0 mt-5 top-12 bg-[#cfcfcf] pr-2 rounded-sm w-[90vw] sm:w-[500px] h-14 flex justify-center items-center shadow-md z-50">
                                <label htmlFor="Search"><Search /></label>
                                <input
                                    id="Search"
                                    className="w-[550px] h-6 px-4 py-6 outline-0 placeholder:text-[#9c9d9e] placeholder:font-bold select-none"
                                    type="search"
                                    placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید" />
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
