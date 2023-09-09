// Importing Part
import Link from 'next/link';
import LogoImage from '@/app/favicon.ico';

// Creating And Exporting Home Page
export default function HomePage() {
    // Returning JSX
    return (
        <div>
            <div>
                <h1>
                    به
                    <span>سرویس داشبورد سرویس ها جناب ابراهیمی</span>
                    <br/>
                    خوش امدید!
                </h1>
                <h2>
                    ارائه ی
                    <span>پنــل قدرتمنــد</span>
                    ابـری با
                    <span>امکاناتی ویــژه</span>
                   جهت
                    <span>مدیـریـت ســرورها</span>
                </h2>
                <form action="#">
                    <div>
                        <label htmlFor="username-input">نام کاربری (کد ملی/ شناسه شرکت)</label>
                        <input type="text" id='username' name='username' />
                    </div>
                    <div>
                        <label htmlFor="password-input">رمز عبور</label>
                        <div>
                            <input type="text" id='password' name='password' />
                            <span className={'bi bi-wordpress'} />
                        </div>
                    </div>
                    <Link href={'/password-forgotten'}>رمز عبور خود را فراموش کرده ام.</Link>
                    <div>
                        <label htmlFor="code-input">رمز عبور</label>
                        <div>
                            <input type="number" id={'code-input'} name={'code-input'} />
                            {/*TODO:Replace With Image*/}
                            <div />
                            <button><span className={'bi bi-arrow-repeat'} /></button>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id={'remember-me-checkbox'} name={'remember-me-checkbox'}/>
                        <label htmlFor="remember-me-checkbox">مرا به خاطر بسپار</label>
                    </div>
                    <button>ورود</button>
                </form>
                <h6>
                    حساب کاربری ندارید؟
                    <Link href={'/signIn'}>ثبت نام کنید</Link>
                </h6>
            </div>
            <div>
                <img src={LogoImage.src} alt="لوگو"/>
            </div>
        </div>
    );
}