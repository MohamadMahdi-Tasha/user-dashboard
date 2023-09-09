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
        <nav>
            <Link href={'/dashboard'}>
                <Image src={LogoImage.src} alt={'لوگو'} height={100} width={100} />
            </Link>
            <hr/>
            <ul>
                <DashboardNavBarItem link={'/dashboard'} name={'داشبورد'} icon={'bi-house'} />
                <DashboardNavBarItem link={'/dashboard/hosts'} name={'دامنه ها'} icon={'bi-cloud-download'} />
                <DashboardNavOpenableItem link={'/dashboard/cloud-datacenter'} name={'دیتاسنتر ابری'} icon={'bi bi-building'}>
                    <li>
                        <Link href={'/dashboard/cloud-datacenter/cloud-server'}>
                            <button tabIndex={-1}>
                                سرور ابری
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/dashboard/cloud-datacenter/cloud-switch'}>
                            <button tabIndex={-1}>
                                سوویچ ابری
                            </button>
                        </Link>
                    </li>
                </DashboardNavOpenableItem>
                <DashboardNavBarItem link={'/dashboard/cloud-distribution'} name={'توزیع ابری'} icon={'bi-asterisk'} />
                <DashboardNavOpenableItem link={'/dashboard/cloud-safety'} name={'امنیت ابری'} icon={'bi bi-shield'}>
                    <li>
                        <Link href={'/dashboard/cloud-datacenter/cloud-server'}>
                            <button tabIndex={-1}>
                                سرور ابری
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/dashboard/cloud-datacenter/cloud-switch'}>
                            <button tabIndex={-1}>
                                سوویچ ابری
                            </button>
                        </Link>
                    </li>
                </DashboardNavOpenableItem>
                <DashboardNavOpenableItem link={'/dashboard/money'} name={'مالی'} icon={'bi bi-wallet'}>
                    <li>
                        <Link href={'/dashboard/cloud-datacenter/cloud-server'}>
                            <button tabIndex={-1}>
                                سرور ابری
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/dashboard/cloud-datacenter/cloud-switch'}>
                            <button tabIndex={-1}>
                                سوویچ ابری
                            </button>
                        </Link>
                    </li>
                </DashboardNavOpenableItem>
                <DashboardNavBarItem link={'/dashboard/tickets'} name={'تیکت ها'} icon={'bi-chat-square-text'} />
            </ul>
        </nav>
    );
}