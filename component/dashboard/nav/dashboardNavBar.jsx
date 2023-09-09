// Importing Part
import LogoImage from '@/app/favicon.ico';
import Image from "next/image";
import Link from 'next/link';
import DashboardNavBarItem from "@/component/dashboard/nav/dashboardNavBarItem";
import DashboardNavOpenableItem from "@/component/dashboard/nav/dashboardNavOpenableItem";

// Creating And Exporting Dashboard Navigation On Right Side As Default
export default function DashboardNavBar() {
    // Returning JSX
    return (
        <div dir={'ltr'} className={'h-full bg-darkBlue overflow-auto lg:w-[20vw] lg:static fixed top-0 right-0 w-[80%] lg:shadow-0 shadow-lg'}>
            <nav className={'bg-darkBlue py-[20px]'} dir={'rtl'}>
                <Link href={'/dashboard'} className={'mb-[20px] block'}>
                    <Image className={'mx-auto'} src={LogoImage.src} alt={'لوگو'} height={75} width={75} />
                </Link>
                <hr className={'border-white/20'}/>
                <ul className={'p-[20px] gap-[10px] flex flex-col'}>
                    <DashboardNavBarItem link={'/dashboard'} name={'داشبورد'} icon={'bi-house'} />
                    <DashboardNavBarItem link={'/dashboard/hosts'} name={'دامنه ها'} icon={'bi-cloud-download'} />
                    <DashboardNavOpenableItem link={'/dashboard/cloud-datacenter'} name={'دیتاسنتر ابری'} icon={'bi bi-building'}>
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