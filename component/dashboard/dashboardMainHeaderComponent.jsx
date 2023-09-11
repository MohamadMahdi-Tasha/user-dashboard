// Importing Part
import Link from "next/link";

// Creating And Exporting Dashboard Pages Header In Main Side As Default
export default function DashboardMainHeaderComponent({onClickOfShowNavBtn}) {
    // Returning JSX
    return (
        <header className={'flex items-center justify-between flex-wrap gap-[20px] lg:mb-[30px] mb-[20px]'}>
            <div className={'flex flex-wrap gap-[10px]'}>
                <button onClick={onClickOfShowNavBtn} className={'bg-darkBlue/30 aspect-square rounded-[10px] w-[35px] lg:hidden flex items-center justify-center'}>
                    <span className={'bi bi-list text-white'} />
                </button>
                <Link href={'/dashboard/money'}>
                    <button tabIndex={-1} className={'px-[10px] py-[5px] bg-darkBlue/30 text-white flex items-center rounded-[10px] gap-[10px] transition-all duration-500'}>
                        <span className={'bi bi-plus'} />
                        <span>{(500000).toLocaleString()}</span>
                        <span>ریال</span>
                    </button>
                </Link>
            </div>
            <div className={'lg:flex hidden gap-[30px]'}>
                <Link className={'block'} href={'/dashboard/support'}><button className={'bg-darkBlue/30 h-full rounded-[10px] aspect-square'} tabIndex={-1}><span className={'bi bi-headphones text-white'} /></button></Link>
                <Link className={'block'} href={'/dashboard/notifications'}><button className={'bg-darkBlue/30 h-full rounded-[10px] aspect-square'} tabIndex={-1}><span className={'bi bi-bell text-white'} /></button></Link>
                <Link href={'/dashboard/profile'}>
                    <button className={'px-[10px] py-[5px] bg-darkBlue/30 text-white flex items-center rounded-[10px] gap-[10px] transition-all duration-500'} tabIndex={-1}>
                        <span className={'bi bi-person'} />
                        <span className={'text-[14px]'}>محمد مهدی تاشا</span>
                        <span className={'bi bi-chevron-down'} />
                    </button>
                </Link>
            </div>
        </header>
    );
}