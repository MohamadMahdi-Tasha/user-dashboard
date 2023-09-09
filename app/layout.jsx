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
            <body dir={'rtl'}>
                {children}
            </body>
        </html>
    );
}