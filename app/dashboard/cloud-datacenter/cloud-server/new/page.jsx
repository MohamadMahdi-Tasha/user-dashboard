// Forcing NextJs To Render This Component As Client Side Component
'use client';

// Importing Part
import BreadcrumbComponent from "@/chunk/breadcrumbComponent";
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";
import ProgressComponent from "@/component/dashboard/progress/progressComponent";
import AlmaLinuxLogo from '@/public/assets/img/OS/img-alma.png';
import CentosLogo from '@/public/assets/img/OS/img-centos.png';
import DebianLogo from '@/public/assets/img/OS/img-debian.png';
import MikroTikLogo from '@/public/assets/img/OS/img-mikrotik.png';
import UbuntoLogo from '@/public/assets/img/OS/img-ubunto.png';
import WindowsLogo from '@/public/assets/img/OS/img-windows.png';
import {useState} from "react";

// Creating And Exporting Creating Server Page As Default
export default function createServerPage() {
    // Defining States Of Component
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCenter, setDataCenter] = useState('');
    const [os, setOs] = useState('');
    const [config, setConfig] = useState({});
    const [isConfiged, setConfiged] = useState(false);

    // Returning JSX
    return (
        <DashboardPageComponent>
            <title>داشبورد کاربر فونیکس سرور - ایجاد سرور</title>
            <BreadcrumbComponent />
            <div className={'lg:mt-[30px] mt-[20px]'}>
                <ProgressComponent currentStatus={currentStep} doneStatus={currentStep - 1} />
                <div className={'mt-[30px] p-[20px] rounded-[20px] bg-white'}>
                    <div className={'data-[active="true"]:block data-[active="false"]:hidden'} data-active={(currentStep === 1)}>
                        <h4 className={'text-[16px] font-bold text-darkBlue mb-[10px]'}>انتخواب دیتاسنتر</h4>
                        <h6 className={'text-[14px] font-normal text-darkBlue/80 mb-[20px]'}>دیتاسنتر مورد نظر خود را انتحواب کنید.</h6>
                        <div className={'grid lg:grid-cols-4 grid-cols-2 gap-x-[10px] gap-y-[30px] mb-[20px]'}>
                            <button onClick={() => setDataCenter('تهران')} data-selected={(dataCenter === 'تهران')} className={'selectable-button'}><span data-selected={(dataCenter === 'تهران')} className={'selectable-button-icon bi bi-check-circle-fill'} />تهران</button>
                            <button onClick={() => setDataCenter('تهران ۲و۳')} data-selected={(dataCenter === 'تهران ۲و۳')} className={'selectable-button'}><span data-selected={(dataCenter === 'تهران ۲و۳')} className={'selectable-button-icon bi bi-check-circle-fill'} />تهران ۲و۳</button>
                            <button onClick={() => setDataCenter('شیراز')} data-selected={(dataCenter === 'شیراز')} className={'selectable-button'}><span data-selected={(dataCenter === 'شیراز')} className={'selectable-button-icon bi bi-check-circle-fill'} />شیراز</button>
                            <button onClick={() => setDataCenter('تبریز')} data-selected={(dataCenter === 'تبریز')} className={'selectable-button'}><span data-selected={(dataCenter === 'تبریز')} className={'selectable-button-icon bi bi-check-circle-fill'} />تبریز</button>
                            <button onClick={() => setDataCenter('مشهد')} data-selected={(dataCenter === 'مشهد')} className={'selectable-button'}><span data-selected={(dataCenter === 'مشهد')} className={'selectable-button-icon bi bi-check-circle-fill'} />مشهد</button>
                            <button onClick={() => setDataCenter('قم')} data-selected={(dataCenter === 'قم')} className={'selectable-button'}><span data-selected={(dataCenter === 'قم')} className={'selectable-button-icon bi bi-check-circle-fill'} />قم</button>
                            <button onClick={() => setDataCenter('همدان')} data-selected={(dataCenter === 'همدان')} className={'selectable-button'}><span data-selected={(dataCenter === 'همدان')} className={'selectable-button-icon bi bi-check-circle-fill'} />همدان</button>
                        </div>
                        <div className={'flex items-end justify-end'}><button onClick={() => setCurrentStep(2)} data-active={(dataCenter !== '')} className={'px-[30px] py-[10px] lg:w-auto w-full bg-theme rounded-[10px] text-[14px] font-normal text-white data-[active="false"]:opacity-50 data-[active="false"]:pointer-events-none'} tabIndex={(dataCenter !== '') ? -1 : 1}>گام بعدی</button></div>
                    </div>
                    <div className={'data-[active="true"]:block data-[active="false"]:hidden'} data-active={(currentStep === 2)}>
                        <h4 className={'text-[16px] font-bold text-darkBlue mb-[10px]'}>انتخواب سیستم عامل</h4>
                        <h6 className={'text-[14px] font-normal text-darkBlue/80 mb-[20px]'}>سیستم عامل مورد نظر خود را انتحواب کنید.</h6>
                        <div className={'grid lg:grid-cols-4 grid-cols-2 gap-x-[10px] gap-y-[30px] mb-[20px]'}>
                            <button onClick={() => setOs('almanliux os')} data-selected={(os === 'almanliux os')} className={'selectable-button'}>
                                <span data-selected={(os === 'almanliux os')} className={'selectable-button-icon bi bi-check-circle-fill'} />
                                <div className={'flex flex-col items-center justify-center gap-[20px]'}>
                                    <div data-selected={(os === 'almanliux os')} className={'w-[50px] h-[50px] data-[selected="false"]:grayscale data-[selected="true"]:grayscale-0 bg-darkBlue/20 rounded-[10px] p-[10px]'}>
                                        <img className={'w-full h-full aspect-square'} src={AlmaLinuxLogo.src} alt="AlmaLinux OS"/>
                                    </div>
                                    <span className={'text-darkBlue text-[14px] block font-normal'}>AlmaLinux OS</span>
                                </div>
                            </button>
                            <button onClick={() => setOs('centos')} data-selected={(os === 'centos')} className={'selectable-button'}>
                                <span data-selected={(os === 'centos')} className={'selectable-button-icon bi bi-check-circle-fill'} />
                                <div className={'flex flex-col items-center justify-center gap-[20px]'}>
                                    <div data-selected={(os === 'centos')} className={'w-[50px] h-[50px] data-[selected="false"]:grayscale data-[selected="true"]:grayscale-0 bg-darkBlue/20 rounded-[10px] p-[10px]'}>
                                        <img className={'w-full h-full aspect-square'} src={CentosLogo.src} alt="cent os"/>
                                    </div>
                                    <span className={'text-darkBlue text-[14px] block font-normal'}>Centos</span>
                                </div>
                            </button>
                            <button onClick={() => setOs('debian')} data-selected={(os === 'debian')} className={'selectable-button'}>
                                <span data-selected={(os === 'debian')} className={'selectable-button-icon bi bi-check-circle-fill'} />
                                <div className={'flex flex-col items-center justify-center gap-[20px]'}>
                                    <div data-selected={(os === 'debian')} className={'w-[50px] h-[50px] data-[selected="false"]:grayscale data-[selected="true"]:grayscale-0 bg-darkBlue/20 rounded-[10px] p-[10px]'}>
                                        <img className={'w-full h-full aspect-square'} src={DebianLogo.src} alt="Debian"/>
                                    </div>
                                    <span className={'text-darkBlue text-[14px] block font-normal'}>Debian</span>
                                </div>
                            </button>
                            <button onClick={() => setOs('mikrotik')} data-selected={(os === 'mikrotik')} className={'selectable-button'}>
                                <span data-selected={(os === 'mikrotik')} className={'selectable-button-icon bi bi-check-circle-fill'} />
                                <div className={'flex flex-col items-center justify-center gap-[20px]'}>
                                    <div data-selected={(os === 'mikrotik')} className={'w-[50px] h-[50px] data-[selected="false"]:grayscale data-[selected="true"]:grayscale-0 bg-darkBlue/20 rounded-[10px] p-[10px]'}>
                                        <img className={'w-full h-full aspect-square'} src={MikroTikLogo.src} alt="Mikrotik"/>
                                    </div>
                                    <span className={'text-darkBlue text-[14px] block font-normal'}>Mikrotik</span>
                                </div>
                            </button>
                            <button onClick={() => setOs('ubuntu')} data-selected={(os === 'ubuntu')} className={'selectable-button'}>
                                <span data-selected={(os === 'ubuntu')} className={'selectable-button-icon bi bi-check-circle-fill'} />
                                <div className={'flex flex-col items-center justify-center gap-[20px]'}>
                                    <div data-selected={(os === 'ubuntu')} className={'w-[50px] h-[50px] data-[selected="false"]:grayscale data-[selected="true"]:grayscale-0 bg-darkBlue/20 rounded-[10px] p-[10px]'}>
                                        <img className={'w-full h-full aspect-square'} src={UbuntoLogo.src} alt="Ubuntu"/>
                                    </div>
                                    <span className={'text-darkBlue text-[14px] block font-normal'}>Ubuntu</span>
                                </div>
                            </button>
                            <button onClick={() => setOs('windows')} data-selected={(os === 'windows')} className={'selectable-button'}>
                                <span data-selected={(os === 'windows')} className={'selectable-button-icon bi bi-check-circle-fill'} />
                                <div className={'flex flex-col items-center justify-center gap-[20px]'}>
                                    <div data-selected={(os === 'windows')} className={'w-[50px] h-[50px] data-[selected="false"]:grayscale data-[selected="true"]:grayscale-0 bg-darkBlue/20 rounded-[10px] p-[10px]'}>
                                        <img className={'w-full h-full aspect-square'} src={WindowsLogo.src} alt="Windows"/>
                                    </div>
                                    <span className={'text-darkBlue text-[14px] block font-normal'}>Windows</span>
                                </div>
                            </button>
                        </div>
                        <div className={'flex items-end justify-end lg:flex-row flex-col gap-[20px] flex-wrap'}>
                            <button onClick={() => setCurrentStep(1)} className={'px-[30px] lg:w-auto w-full py-[10px] bg-darkBlue rounded-[10px] text-[14px] font-normal text-white'}>گام قبلی</button>
                            <button onClick={() => setCurrentStep(3)} data-active={(os !== '')} className={'px-[30px] lg:w-auto w-full py-[10px] bg-theme rounded-[10px] text-[14px] font-normal text-white data-[active="false"]:opacity-50 data-[active="false"]:pointer-events-none'} tabIndex={(os !== '') ? -1 : 1}>گام بعدی</button>
                        </div>
                    </div>
                    <div className={'data-[active="true"]:block data-[active="false"]:hidden'} data-active={(currentStep === 3)}>
                        <h4 className={'text-[16px] font-bold text-darkBlue mb-[10px]'}>انتخواب منابع</h4>
                        <h6 className={'text-[14px] font-normal text-darkBlue/80 mb-[20px]'}>منابع مورد نیاز مورد نظر خود را انتحواب کنید.</h6>
                        <div className={'bg-white rounded-[20px]'}>
                            <div className={'overflow-auto w-full mb-[20px]'}>
                                <table className={'w-full lg:rounded-[20px] rounded-[15px] overflow-hidden'}>
                                    <thead className={'bg-gray-200'}>
                                        <tr>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>#</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>نام بسته</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>CPU</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>RAM</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>DISK</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>ترافیک دریافتی</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>ترافیک ارسال</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>هزینه تقریبی ماهانه</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>هزینه ساعتی</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>
                                                <input onInput={(event) => {
                                                    if (event.target.checked) {
                                                        setConfig({
                                                            name: 'Advanced 1',
                                                            cpu: 16,
                                                            ram: 32,
                                                            disk: 320,
                                                            uploadTraffic: 0,
                                                            downloadTraffic: 3750,
                                                            monthlyPrice: 44544428,
                                                            hourlyPrice: 61867
                                                        });
                                                        setConfiged(true);
                                                    } else {
                                                        setConfig({});
                                                        setConfiged(false);
                                                    }

                                                }} type="checkbox"/>
                                            </td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>Advanced 1</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>۱۶ هسته</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>32 GB</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>320 GB/SSD</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>رایگان</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>3,750 ریال</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>44,544,528 ریال</td>
                                            <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>61,867 ریال</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={'flex items-end justify-end lg:flex-row flex-col gap-[20px] flex-wrap'}>
                            <button onClick={() => setCurrentStep(2)} className={'px-[30px] lg:w-auto w-full py-[10px] bg-darkBlue rounded-[10px] text-[14px] font-normal text-white'}>گام قبلی</button>
                            <button onClick={() => setCurrentStep(4)} data-active={(isConfiged)} className={'px-[30px] lg:w-auto w-full py-[10px] bg-theme rounded-[10px] text-[14px] font-normal text-white data-[active="false"]:opacity-50 data-[active="false"]:pointer-events-none'} tabIndex={(isConfiged) ? 1 : -1}>گام بعدی</button>
                        </div>
                    </div>
                    <div className={'data-[active="true"]:block data-[active="false"]:hidden'} data-active={(currentStep === 4)}>
                        <h4 className={'text-[16px] font-bold text-darkBlue mb-[10px]'}>بررسی و افزودن فضای ابری جدید</h4>
                        <h6 className={'text-[14px] font-normal text-darkBlue/80 mb-[20px]'}>سرویس مجازی ابری با تنظیمات و پیکر بندی زیر اماده ایجاد است.</h6>
                        <p className={'block bg-theme/30 text-theme font-light text-[14px] lg:text-[16px] p-[10px] rounded-[10px] mb-[20px]'}>
                            <span className={'bi bi-info-circle ml-[20px]'} />
                            مشترک گرامی به علت
                            <span className={'font-bold'}> حجم بالای درخواست ها </span>
                            , احتمال
                            <span className={'font-bold'}> طولانی شدن زمان ساخت سرور مجازی ابری </span>
                            وجود دارد.خواهشمند است تا
                            <span className={'font-bold'}> اتمام ساخت سرور مجازی ابری جاری </span>
                            , از ایجاد مجدد
                            <span className={'font-bold'}> خودداری فرمایید. </span>
                        </p>
                        <div className={'pb-[20px] border border-darkBlue/20 py-[20px] px-[10px] rounded-[10px] mb-[20px]'}>
                            <div className={'flex items-center gap-[20px] justify-between py-[8px] px-[20px] flex-wrap'}>
                                <h6 className={'text-[16px] font-normal text-darkBlue/80 flex items-center gap-[10px]'}><span className={'block bi bi-windows'} />سیستم عامل</h6>
                                <span className={'text-[16px] font-normal text-darkBlue'}>{os}</span>
                            </div>
                            <div className={'flex items-center gap-[20px] justify-between py-[8px] px-[20px] flex-wrap'}>
                                <h6 className={'text-[16px] font-normal text-darkBlue/80 flex items-center gap-[10px]'}><span className={'block bi bi-cpu'} />CPU</h6>
                                <span className={'text-[16px] font-normal text-darkBlue'}>{config.cpu}هسته</span>
                            </div>
                            <div className={'flex items-center gap-[20px] justify-between py-[8px] px-[20px] flex-wrap'}>
                                <h6 className={'text-[16px] font-normal text-darkBlue/80 flex items-center gap-[10px]'}><span className={'block bi bi-usb-c'} />RAM</h6>
                                <span className={'text-[16px] font-normal text-darkBlue'}>{config.ram}گیگابایت </span>
                            </div>
                            <div className={'flex items-center gap-[20px] justify-between py-[8px] px-[20px] flex-wrap'}>
                                <h6 className={'text-[16px] font-normal text-darkBlue/80 flex items-center gap-[10px]'}><span className={'block bi bi-disc'} />DISK</h6>
                                <span className={'text-[16px] font-normal text-darkBlue'}>{config.disk}گیگابایت </span>
                            </div>
                            <div className={'flex items-center gap-[20px] justify-between py-[8px] px-[20px] flex-wrap'}>
                                <h6 className={'text-[16px] font-normal text-darkBlue/80 flex items-center gap-[10px]'}><span className={'block bi bi-asterisk'} />نوع IP</h6>
                                <span className={'text-[16px] font-normal text-darkBlue'}>ادرس IPV4</span>
                            </div>
                            <div className={'flex items-center gap-[20px] justify-between py-[8px] px-[20px] flex-wrap'}>
                                <h6 className={'text-[16px] font-normal text-darkBlue/80 flex items-center gap-[10px]'}><span className={'block bi bi-cash-coin'} />هزینه ساخت ماشین</h6>
                                <span className={'text-[16px] font-normal text-darkBlue'}>رایگان</span>
                            </div>
                            <div className={'flex items-center gap-[20px] justify-between py-[8px] px-[20px] flex-wrap'}>
                                <h6 className={'text-[16px] font-normal text-darkBlue/80 flex items-center gap-[10px]'}><span className={'block bi bi-coin'} />هزینه ساعتی</h6>
                                <span className={'text-[16px] font-normal text-darkBlue'}>{config.hourlyPrice}ریال </span>
                            </div>
                        </div>
                        <div className={'flex items-end justify-end gap-[20px] flex-wrap'}>
                            <button onClick={() => setCurrentStep(3)} className={'px-[30px] py-[10px] bg-darkBlue rounded-[10px] text-[14px] font-normal text-white'}>گام قبلی</button>
                            <button className={'px-[30px] py-[10px] bg-theme rounded-[10px] text-[14px] font-normal text-white'}>ساخت سرور مجازی</button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardPageComponent>
    );
}