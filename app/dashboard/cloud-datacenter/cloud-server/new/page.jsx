// Importing Part
import BreadcrumbComponent from "@/chunk/breadcrumbComponent";
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";

// Creating And Exporting Creating Server Page As Default
export default function createServerPage() {
    // Returning JSX
    return (
        <DashboardPageComponent>
            <title>داشبورد کاربر فونیکس سرور - ایجاد سرور</title>
            <BreadcrumbComponent />
            <div>
                <div>
                    <div />
                    <div>
                        <div>
                            <div>۱</div>
                            <h6><span className={'bi bi-server'} />دیتا سنتر </h6>
                        </div>
                        <div>
                            <div>۲</div>
                            <h6><span className={'bi bi-windows'} />سیستم عامل </h6>
                        </div>
                        <div>
                            <div>۳</div>
                            <h6><span className={'bi bi-file-text'} />مشخصات </h6>
                        </div>
                        <div>
                            <div>۴</div>
                            <h6><span className={'bi bi-gear'} />تنظیمات پیشرفته </h6>
                        </div>
                        <div>
                            <div>۵</div>
                            <h6><span className={'bi bi-check-square'} />بررسی نهایی </h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>انتخواب دیتاسنتر</h4>
                        <p>دیتاسنتر مورد نظر خود را انتحواب کنید.</p>
                        <div>
                            <button><span className={'bi bi-check-circle-fill'} />تهران</button>
                            <button><span className={'bi bi-check-circle-fill'} />تهران ۲و۳</button>
                            <button><span className={'bi bi-check-circle-fill'} />شیراز</button>
                            <button><span className={'bi bi-check-circle-fill'} />تبریز</button>
                            <button><span className={'bi bi-check-circle-fill'} />مشهد</button>
                            <button><span className={'bi bi-check-circle-fill'} />قم</button>
                            <button><span className={'bi bi-check-circle-fill'} />همدان</button>
                        </div>
                        <button>گام بعدی</button>
                    </div>
                </div>
            </div>
        </DashboardPageComponent>
    );
}