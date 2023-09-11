// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import ProgressItemComponent from "@/component/dashboard/progress/progressItemComponent";
import {useState} from "react";

// Creating And Exporting Progress Component As Default
export default function ProgressComponent({currentStatus,doneStatus}) {
    // Returning JSX
    return (
        <div className={'relative z-10 mb-[40px] lg:block hidden'}>
            <div className={'absolute -z-10 top-[20%] left-[50%] translate-x-[-50%] w-[90%] flex h-[2px]'}>
                <div data-active={(doneStatus === 1 || doneStatus >= 1)} className={'w-[24%] data-[active="true"]:bg-theme data-[active="false"]:bg-gray-300'} />
                <div data-active={(doneStatus === 2 || doneStatus >= 2)} className={'w-[24%] data-[active="true"]:bg-theme data-[active="false"]:bg-gray-300'} />
                <div data-active={(doneStatus === 3 || doneStatus >= 3)} className={'w-[24%] data-[active="true"]:bg-theme data-[active="false"]:bg-gray-300'} />
                <div data-active={(doneStatus === 4 || doneStatus >= 4)} className={'w-[28%] data-[active="true"]:bg-theme data-[active="false"]:bg-gray-300'} />
            </div>
            <div className={'flex items-center gap-[20px] justify-between z-10'}>
                <ProgressItemComponent isActive={(currentStatus === 1 || currentStatus >= 1)} number={'۱'} title={'دیتا سنتر'} icon={'bi-server'} />
                <ProgressItemComponent isActive={(currentStatus === 2 || currentStatus >= 2)} number={'۲'} title={'سیستم عامل'} icon={'bi-windows'} />
                <ProgressItemComponent isActive={(currentStatus === 3 || currentStatus >= 3)} number={'۳'} title={'مشخصات'} icon={'bi-file-text'} />
                <ProgressItemComponent isActive={(currentStatus === 4 || currentStatus >= 4)} number={'۴'} title={'تنظیمات پیشرفته'} icon={'bi-gear'} />
                <ProgressItemComponent isActive={(currentStatus === 5 || currentStatus >= 5)} number={'۵'} title={'بررسی نهایی'} icon={'bi-check-square'} />
            </div>
        </div>
    );
}