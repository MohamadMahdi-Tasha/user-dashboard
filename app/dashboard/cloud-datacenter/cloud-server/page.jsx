// Importing Part
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";
import BreadcrumbComponent from "@/chunk/breadcrumbComponent";
import Link from "next/link";

// Creating And Exporting Cloud Servers Page As Default
export default function CloudServersPage() {
    // Returning JSX
    return (
        <DashboardPageComponent>
            <title>داشبورد کاربر فونیکس سرور - سرور های ابری</title>
            <BreadcrumbComponent />
            <div className={'lg:mt-[30px] mt-[20px]'}>
                <div className={'flex lg:mb-[20px mb-[30px] flex-wrap items-center justify-between gap-[20px]'}>
                    <div>
                        <h1 className={'text-darkBlue font-bold text-[16px] mb-[10px]'}>لیست سرور های ابری</h1>
                        <h4 className={'text-darkBlue/70 font-normal text-[14px]'}>در این بخش میتوانید لیست سرور های ابری خود را مشاهده کرده و گروه ایجاد کنید.</h4>
                    </div>
                    <div className={'flex lg:flex-row flex-col gap-[10px] lg:w-auto w-full'}>
                        <Link href={'/dashboard/cloud-datacenter/cloud-server/projects'}><button className={'lg:text-[16px] text-[14px] lg:w-auto w-full px-[20px] text-center py-[10px] bg-darkBlue/80 text-white rounded-[10px] truncate'}>لیست پروژه ها</button></Link>
                        <Link href={'/dashboard/cloud-datacenter/cloud-server/new'}>
                            <button className={'lg:text-[16px] text-[14px] lg:w-auto w-full px-[20px] py-[10px] bg-theme text-white rounded-[10px] flex items-center justify-center gap-[10px]'}>
                                <span className={'bi bi-plus-circle'} />
                                <span className={'truncate'}>ایجاد سرور ابری</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={'flex lg:flex-row flex-col flex-wrap mb-[20px] gap-[20px]'}>
                    <div className={'px-[20px] py-[10px] bg-white shadow-lg lg:text-[16px] text-[14px] lg:w-auto w-full text-darkBlue/70 rounded-[10px] flex items-center lg:justify-start justify-center gap-[10px]'}>
                        <span className={'bi bi-folder'} />
                        <span className={'truncate'}>پروژه ها</span>
                    </div>
                </div>
            </div>
            <div className={'bg-white p-[20px] rounded-[20px]'}>
                <div className={'overflow-auto w-full mb-[20px]'}>
                    <table className={'w-full lg:rounded-[20px] rounded-[15px] overflow-hidden'}>
                        <thead className={'bg-gray-200'}>
                            <tr>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>ردیف</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>نام سرور</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>سیستم عامل</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>ادرس IP</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>وضعیت</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>پروژه</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>1</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>ffff</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>Ubuntu</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>193.151.140.97</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}><span className={'bg-green-200 px-[10px] py-[10px] text-[14px] font-normal rounded-[10px] text-green-500'}>روشن</span></td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] flex justify-center items-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>
                                    <Link href={'/dashboard/cloud-datacenter/server/1'} className={'w-[30px] h-[30px] bg-darkBlue/30 rounded-[10px] flex justify-center items-center'}>
                                        <span className={'bi bi-three-dots-vertical'} />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>1</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>ffff</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>Ubuntu</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>193.151.140.97</td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] text-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}><span className={'bg-green-200 px-[10px] py-[10px] text-[14px] font-normal rounded-[10px] text-green-500'}>روشن</span></td>
                                <td className={'lg:py-[15px] lg:px-[20px] py-[15px] px-[15px] flex justify-center items-center truncate lg:text-[16px] text-[12px] font-light text-darkBlue'}>
                                    <Link href={'/dashboard/cloud-datacenter/server/1'} className={'w-[30px] h-[30px] bg-darkBlue/30 rounded-[10px] flex justify-center items-center'}>
                                        <span className={'bi bi-three-dots-vertical'} />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardPageComponent>
    );
}