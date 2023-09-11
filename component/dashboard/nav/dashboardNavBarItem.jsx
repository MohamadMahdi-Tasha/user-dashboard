// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import Link from "next/link";
import {usePathname} from "next/navigation";

// Creating And Exporting Dashboard Nav Bar Item Asd Default
export default function DashboardNavBarItem({link, name, icon}) {
    // Defining Pathname Hook
    const pathName = usePathname();

    // Returning JSX
    return (
        <li>
            <Link href={link} className={'block'}>
                <button data-active={(pathName === link)} tabIndex={-1} className={'flex items-center data-[active="true"]:bg-white/20 gap-[10px] py-[8px] px-[10px] rounded-[10px] hover:bg-white/20 w-full transition-all duration-500 relative data-[active="true"]:before:absolute data-[active="true"]:before:h-full data-[active="true"]:before:w-[5px] data-[active="true"]:before:bg-theme data-[active="true"]:before:left-full data-[active="true"]:before:top-0 data-[active="true"]:before:translate-x-[15px] data-[active="true"]:before:rounded-l-[20px]'}>
                    <span className={`bi ${icon} text-white text-[14px]`} />
                    <span className={'text-white w-full block truncate text-[14px] font-normal text-start'}>{name}</span>
                </button>
            </Link>
        </li>
    );
}