// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {usePathname} from "next/navigation";

// Creating And Exporting Breadcrumb Component As Default
export default function BreadcrumbComponent() {
    // Setting usePathname Hook
    const pathname = usePathname();
    const routes = pathname.split('/');
    const slicedRoutes = routes.slice(1,routes.length);

    // Returning JSX
    return (
        <div className={'flex flex-wrap items-center gap-[10px]'}>
            <div className={'flex items-center gap-[10px]'}>
                <span className={'block text-darkBlue/70 font-light text-[14px]'}>فونیکس سرور</span>
                <span className={'bi bi-chevron-left block text-darkBlue/70 font-light text-[14px]'} />
            </div>
            {
                slicedRoutes.map((route,index) => (
                    <div className={'flex items-center gap-[10px]'}>
                        <span className={'block text-darkBlue/70 font-light text-[14px]'}>
                            {
                                (route === 'dashboard')
                                    ? 'داشبورد'
                                    : (route === 'cloud-datacenter')
                                        ? 'دیتا سنتر ابری'
                                        : (route === 'cloud-server')
                                            ? 'سرور ابری'
                                            : ''
                            }
                        </span>
                        {
                            (index + 1 === slicedRoutes.length)
                                ? false
                                : <span className={'bi bi-chevron-left block text-darkBlue/70 font-light text-[14px]'} />
                        }
                    </div>
                ))
            }
        </div>
    );
}