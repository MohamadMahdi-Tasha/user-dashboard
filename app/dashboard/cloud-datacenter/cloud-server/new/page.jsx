// Forcing NextJs To Render This Component As Client Side Component
'use client';

// Importing Part
import BreadcrumbComponent from "@/chunk/breadcrumbComponent";
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";
import ProgressComponent from "@/component/dashboard/progress/progressComponent";
import {useState} from "react";

// Creating And Exporting Creating Server Page As Default
export default function createServerPage() {
    // Defining States Of Component
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCenter, setDataCenter] = useState('');

    // Returning JSX
    return (
        <DashboardPageComponent>
            <title>داشبورد کاربر فونیکس سرور - ایجاد سرور</title>
            <BreadcrumbComponent />
            <div className={'lg:mt-[30px] mt-[20px]'}>
                <ProgressComponent currentStatus={currentStep} doneStatus={currentStep - 1} />
                <div className={'mt-[30px] p-[20px] rounded-[20px] bg-white'}>
                    <div className={'data-[active="true"]:visible data-[active="false"]:invisible'} data-active={(currentStep === 1)}>
                        <h4 className={'text-[16px] font-bold text-darkBlue mb-[10px]'}>انتخواب دیتاسنتر</h4>
                        <h6 className={'text-[14px] font-normal text-darkBlue/80 mb-[20px]'}>دیتاسنتر مورد نظر خود را انتحواب کنید.</h6>
                        <div className={'grid grid-cols-4 gap-x-[10px] gap-y-[30px] mb-[20px]'}>
                            <button onClick={() => setDataCenter('تهران')} data-selected={(dataCenter === 'تهران')} className={'selectable-button'}><span data-selected={(dataCenter === 'تهران')} className={'selectable-button-icon bi bi-check-circle-fill'} />تهران</button>
                            <button onClick={() => setDataCenter('تهران ۲و۳')} data-selected={(dataCenter === 'تهران ۲و۳')} className={'selectable-button'}><span data-selected={(dataCenter === 'تهران ۲و۳')} className={'selectable-button-icon bi bi-check-circle-fill'} />تهران ۲و۳</button>
                            <button onClick={() => setDataCenter('شیراز')} data-selected={(dataCenter === 'شیراز')} className={'selectable-button'}><span data-selected={(dataCenter === 'شیراز')} className={'selectable-button-icon bi bi-check-circle-fill'} />شیراز</button>
                            <button onClick={() => setDataCenter('تبریز')} data-selected={(dataCenter === 'تبریز')} className={'selectable-button'}><span data-selected={(dataCenter === 'تبریز')} className={'selectable-button-icon bi bi-check-circle-fill'} />تبریز</button>
                            <button onClick={() => setDataCenter('مشهد')} data-selected={(dataCenter === 'مشهد')} className={'selectable-button'}><span data-selected={(dataCenter === 'مشهد')} className={'selectable-button-icon bi bi-check-circle-fill'} />مشهد</button>
                            <button onClick={() => setDataCenter('قم')} data-selected={(dataCenter === 'قم')} className={'selectable-button'}><span data-selected={(dataCenter === 'قم')} className={'selectable-button-icon bi bi-check-circle-fill'} />قم</button>
                            <button onClick={() => setDataCenter('همدان')} data-selected={(dataCenter === 'همدان')} className={'selectable-button'}><span data-selected={(dataCenter === 'همدان')} className={'selectable-button-icon bi bi-check-circle-fill'} />همدان</button>
                        </div>
                        <div className={'flex items-end justify-end'}><button data-active={(dataCenter !== '')} className={'px-[30px] py-[10px] bg-theme rounded-[10px] text-[14px] font-normal text-white data-[active="false"]:opacity-50 data-[active="false"]:pointer-events-none'} tabIndex={(dataCenter !== '') ? -1 : 1}>گام بعدی</button></div>
                    </div>
                </div>
            </div>
        </DashboardPageComponent>
    );
}