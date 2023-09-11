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
            <div>
                <div>
                    <div>
                        <h1>لیست سرور های ابری</h1>
                        <h4>در این بخش میتوانید لیست سرور های ابری خود را مشاهده کرده و گروه ایجاد کنید.</h4>
                    </div>
                    <button>لیست پروژه ها</button>
                    <button>
                        <span className={'bi bi-plus-circle'} />
                        ایجاد سرور ابری
                    </button>
                </div>
                <div>
                    <span className={'bi bi-folder'} />
                    <span>پروژه هاس</span>
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ردیف</td>
                            <td>نام سرور</td>
                            <td>سیستم عامل</td>
                            <td>ادرس IP</td>
                            <td>وضعیت</td>
                            <td>پروژه</td>
                        </tr>
                    </thead>
                </table>
                <span>موردی برای نمایش یافت نشد.</span>
            </div>
        </DashboardPageComponent>
    );
}