// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {useState} from "react";
import Link from 'next/link';
import {usePathname} from "next/navigation";

// Creating And Exporting Dashboard Nav Open-able Items As Default
export default function DashboardNavOpenableItem({name, icon, link, children}) {
    // Defining States Of Component
    const [isOpened, setOpened] = useState(false);

    // Defining Pathname Hook
    const pathName = usePathname();

    // Returning JSX
    return (
        <li>
            <div className={'flex items-center justify-between gap-[10px] duration-500 transition-all data-[opened="true"]:bg-white/30 rounded-t-[10px] overflow-hidden'} data-opened={isOpened}>
                <Link href={link} className={'w-[90%]'}>
                    <button data-active={(pathName === link)} tabIndex={-1} className={'flex items-center gap-[10px] py-[8px] px-[10px] rounded-[10px] hover:bg-white/20 w-full transition-all duration-500 relative data-[active="true"]:before:absolute data-[active="true"]:before:h-full data-[active="true"]:before:w-[5px] data-[active="true"]:before:bg-theme data-[active="true"]:before:left-full data-[active="true"]:before:top-0 data-[active="true"]:before:translate-x-[15px] data-[active="true"]:before:rounded-l-[20px]'}>
                        <span className={`bi ${icon} text-white font-[16px]`} />
                        <span className={'text-white text-[14px] font-normal w-full truncate text-start'}>{name}</span>
                    </button>
                </Link>
                <button className={'aspect-square p-[8px] flex items-center justify-center'} onClick={() => setOpened(prevState => !prevState)}>
                    <span data-opened={isOpened} className={'bi bi-chevron-down text-white data-[opened="true"]:rotate-180 duration-500 transition-all'} />
                </button>
            </div>
            {
                (isOpened) ? (
                    <ul className={'py-[20px] flex flex-col gap-[20px] bg-white/30 rounded-b-[10px]'}>
                        {children}
                    </ul>
                ) : false
            }
        </li>
    );
}