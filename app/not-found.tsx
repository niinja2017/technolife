import Footer from "@/layout/Footer"
import Navbar from "@/layout/Navbar/Navbar"

import PNotFound from "./../public/images/404Img/static_404_1200.webp";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div id="TopHome"></div>
            <Navbar />

            <div className="flex items-center justify-center">
                <div className="bg-[#142740] w-[90%] xl:w-[70%]  xl:h-[720px] rounded-4xl flex flex-col items-center justify-center mt-40 mb-10">
                    <Image src={PNotFound} alt="NotFound Picture" />

                    <Link href={'/'} className="bg-white px-10 xl:px-18 py-1 xl:py-3 rounded-full font-bold text-2xl mb-10 xl:mb-0">بازگشت به صفحه اصلی</Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default NotFound
