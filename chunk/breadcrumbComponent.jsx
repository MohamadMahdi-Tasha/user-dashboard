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
        <div>
            <div>
                <span>فونیکس سرور</span>
                <span className={'bi bi-chevron-left'} />
            </div>
            {
                slicedRoutes.map((route,index) => (
                    <div>
                        <span>
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
                                : <span className={'bi bi-chevron-left'} />
                        }
                    </div>
                ))
            }
        </div>
    );
}