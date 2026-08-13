import Bars from "@/public/svg/NavbarSvg/Bars"
import Box from "@/public/svg/NavbarSvg/Box"
import Coin from "@/public/svg/NavbarSvg/Coin"
import Gift from "@/public/svg/NavbarSvg/Gift"
import Money from "@/public/svg/NavbarSvg/Money"
import Percent from "@/public/svg/NavbarSvg/Percent"
import Link from "next/link"

import { ReactElement } from "react"

type MenuProps = {
    id: string,
    src: string,
    title: string,
    svg?: ReactElement
}

const NavbarItem = () => {
    // این بخش کل تایتل و svg می شه که توی یه لیست گذاشته شده است
    const ListItemMenu: MenuProps[] = [
        {
            id: '1',
            src: '/',
            title: 'دسته بندی محصولات',
            svg: <Bars />,
        },
        {
            id: '2',
            src: '/',
            title: 'تونل زمان',
            svg: <Percent />,
        },
        {
            id: '3',
            src: '/',
            title: 'خرید سازمانی',
            svg: <Box />,
        },
        {
            id: '4',
            src: '/',
            title: 'کارت هدیه',
            svg: <Gift />,
        },
        {
            id: '5',
            src: '/',
            title: 'خرید اقساطی',
            svg: <Money />,
        },
        {
            id: '6',
            src: '/',
            title: 'خرید طلای دیجیتال ',
            svg: <Coin />,
        },
        {
            id: '7',
            src: '/',
            title: 'فروشنده شو',
        }

    ]

    return (
        <>
            {
                ListItemMenu.map(item =>
                    <Link key={item.id} href={item.src} className="lg:flex space-x-2 items-center text-gray-700 hidden">
                        {item?.svg}
                        <span>{item.title}</span>
                    </Link>
                )
            }
        </>
    )
}

export default NavbarItem
