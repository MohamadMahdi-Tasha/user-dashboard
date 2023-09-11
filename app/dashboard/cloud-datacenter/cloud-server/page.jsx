// Importing Part
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";
import BreadcrumbComponent from "@/chunk/breadcrumbComponent";

// Creating And Exporting Cloud Servers Page As Default
export default function CloudServersPage() {
    // Returning JSX
    return (
        <DashboardPageComponent>
            <title>داشبورد کاربر فونیکس سرور - سرور های ابری</title>
            <BreadcrumbComponent />
            <div className={'mt-[30px]'}>
                <div className={'flex mb-[20px] flex-wrap items-center justify-between gap-[20px]'}>
                    <div>
                        <h1 className={'text-darkBlue font-bold text-[16px] mb-[10px]'}>لیست سرور های ابری</h1>
                        <h4 className={'text-darkBlue/70 font-normal text-[14px]'}>در این بخش میتوانید لیست سرور های ابری خود را مشاهده کرده و گروه ایجاد کنید.</h4>
                    </div>
                    <div className={'flex gap-[10px]'}>
                        <button className={'text-[16px] px-[20px] py-[10px] bg-darkBlue/80 text-white rounded-[10px]'}>لیست پروژه ها</button>
                        <button className={'text-[16px] px-[20px] py-[10px] bg-theme text-white rounded-[10px] flex items-center gap-[10px]'}>
                            <span className={'bi bi-plus-circle'} />
                            ایجاد سرور ابری
                        </button>
                    </div>
                </div>
                <div className={'flex flex-wrap mb-[20px] gap-[20px]'}>
                    <div className={'px-[20px] py-[10px] bg-white shadow-lg text-[16px] text-darkBlue/70 rounded-[10px] flex items-center gap-[10px]'}>
                        <span className={'bi bi-folder'} />
                        <span>پروژه ها</span>
                    </div>
                </div>
            </div>
            <div className={'bg-white p-[20px] rounded-[20px]'}>
                <div className={'overflow-auto w-full'}>
                    <table className={'w-full rounded-[20px] overflow-hidden mb-[20px]'}>
                        <thead className={'bg-gray-200'}>
                        <tr>
                            <td className={'py-[15px] px-[20px] text-center truncate text-[16px] font-light text-darkBlue'}>ردیف</td>
                            <td className={'py-[15px] px-[20px] text-center truncate text-[16px] font-light text-darkBlue'}>نام سرور</td>
                            <td className={'py-[15px] px-[20px] text-center truncate text-[16px] font-light text-darkBlue'}>سیستم عامل</td>
                            <td className={'py-[15px] px-[20px] text-center truncate text-[16px] font-light text-darkBlue'}>ادرس IP</td>
                            <td className={'py-[15px] px-[20px] text-center truncate text-[16px] font-light text-darkBlue'}>وضعیت</td>
                            <td className={'py-[15px] px-[20px] text-center truncate text-[16px] font-light text-darkBlue'}>پروژه</td>
                        </tr>
                        </thead>
                    </table>
                </div>
                <span className={'text-center text-[18px] font-normal text-darkBlue block'}>موردی برای نمایش یافت نشد.</span>
            </div>
        </DashboardPageComponent>
    );
}