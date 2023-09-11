// Importing Part
import LogoImage from '@/app/favicon.ico';
import Image from "next/image";
import Link from 'next/link';
import DashboardNavBarItem from "@/component/dashboard/nav/dashboardNavBarItem";
import DashboardNavOpenableItem from "@/component/dashboard/nav/dashboardNavOpenableItem";

// Creating And Exporting Dashboard Navigation On Right Side As Default
export default function DashboardNavBar({isOpened, closeFunction}) {
    // Returning JSX
    return (
        <div dir={'ltr'}>
            <div data-opened={isOpened} onClick={closeFunction} className={'bg-black/60 backdrop-blur fixed top-0 left-0 w-full h-full lg:hidden data-[opened="false"]:opacity-0 data-[opened="false"]:invisible transition-all duration-500'} />
            <nav data-opened={isOpened} className={'bg-darkBlue py-[20px] scroll-hidden overflow-auto h-full lg:static fixed right-0 top-0 lg:w-[20vw] w-[80%] lg:data-[opened="false"]:visible data-[opened="false"]:invisible data-[opened="false"]:right-[-80%] lg:transition-none transition-all duration-500'} dir={'rtl'}>
                <button onClick={closeFunction} className={'lg:hidden flex items-center justify-center w-[40px] h-[40px] mx-[20px] bg-theme rounded-[10px] mb-[30px]'}>
                    <span className={'bi bi-x-lg text-darkBlue'} />
                </button>
                <Link href={'/dashboard'} className={'mb-[20px] block'}>
                    <Image className={'mx-auto'} src={LogoImage.src} alt={'لوگو'} height={75} width={75} />
                </Link>
                <hr className={'border-white/20'}/>
                <ul className={'p-[20px] gap-[10px] flex flex-col'}>
                    <DashboardNavBarItem link={'/dashboard'} name={'داشبورد'} icon={'bi-house'} />
                    <DashboardNavBarItem link={'/dashboard/hosts'} name={'دامنه ها'} icon={'bi-cloud-download'} />
                    <DashboardNavOpenableItem link={'/dashboard/cloud-datacenter/cloud-server'} name={'دیتاسنتر ابری'} icon={'bi bi-building'}>
                        <li>
                            <Link href={'/dashboard/cloud-datacenter/cloud-server'}>
                                <button className={'hover:bg-white/30 py-[8px] pl-[10px] pr-[30px] transition-all duration-500 text-white truncate w-full text-start'} tabIndex={-1}>
                                    سرور ابری
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/dashboard/cloud-datacenter/cloud-switch'}>
                                <button className={'hover:bg-white/30 py-[8px] pl-[10px] pr-[30px] transition-all duration-500 text-white truncate w-full text-start'} tabIndex={-1}>
                                    سوویچ ابری
                                </button>
                            </Link>
                        </li>
                    </DashboardNavOpenableItem>
                    <DashboardNavBarItem link={'/dashboard/cloud-distribution'} name={'توزیع ابری'} icon={'bi-asterisk'} />
                    <DashboardNavOpenableItem link={'/dashboard/cloud-safety'} name={'امنیت ابری'} icon={'bi bi-shield'}>
                        <li>
                            <Link href={'/dashboard/cloud-datacenter/cloud-server'}>
                                <button className={'hover:bg-white/30 py-[8px] pl-[10px] pr-[30px] transition-all duration-500 text-white truncate w-full text-start'} tabIndex={-1}>
                                    سرور ابری
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/dashboard/cloud-datacenter/cloud-switch'}>
                                <button className={'hover:bg-white/30 py-[8px] pl-[10px] pr-[30px] transition-all duration-500 text-white truncate w-full text-start'} tabIndex={-1}>
                                    سوویچ ابری
                                </button>
                            </Link>
                        </li>
                    </DashboardNavOpenableItem>
                    <DashboardNavOpenableItem link={'/dashboard/money'} name={'مالی'} icon={'bi bi-wallet'}>
                        <li>
                            <Link href={'/dashboard/cloud-datacenter/cloud-server'}>
                                <button className={'hover:bg-white/30 py-[8px] pl-[10px] pr-[30px] transition-all duration-500 text-white truncate w-full text-start'} tabIndex={-1}>
                                    سرور ابری
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/dashboard/cloud-datacenter/cloud-switch'}>
                                <button className={'hover:bg-white/30 py-[8px] pl-[10px] pr-[30px] transition-all duration-500 text-white truncate w-full text-start'} tabIndex={-1}>
                                    سوویچ ابری
                                </button>
                            </Link>
                        </li>
                    </DashboardNavOpenableItem>
                    <DashboardNavBarItem link={'/dashboard/tickets'} name={'تیکت ها'} icon={'bi-chat-square-text'} />
                </ul>
            </nav>
        </div>
    );
}