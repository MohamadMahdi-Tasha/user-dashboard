// Importing Part
import '@/app/index.css';
import localFont from "next/font/local";
import '@/public/assets/styles/bootstrap-icons.css';

// Defining Our Font
const yekanBakhFont = localFont({
    src: [
        {
            path: '../public/assets/font/YekanBakh/YekanBakh-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../public/assets/font/YekanBakh/YekanBakh-Bold.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../public/assets/font/YekanBakh/YekanBakh-Regular.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/assets/font/YekanBakh/YekanBakh-Light.woff2',
            weight: '300',
            style: 'italic',
        },
    ],
})

// Defining Meta Data Of Pages
export const metadata = {
    title: 'داشبورد کاربر',
    description: 'داشبورد کاربران و پنل کاربری جناب ابراهیمی',
    keywords: 'پنل,کاربر,کاربری,داشبورد,پنل کاربری,سرور,ایران,اینترنت,panel,user,dashboard,user dashboard,server,iran,internet',
    themeColor: '',
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    manifest: '/manifest.json',
    robots: '/robots.txt'
}

// Creating And Exporting Layout Of Pages As Default
export default function LayoutComponent({children}) {
    // Returning JSX
    return (
        <html lang={'fa'}>
            <body dir={'rtl'} className={yekanBakhFont.className}>
                {children}
            </body>
        </html>
    );
}