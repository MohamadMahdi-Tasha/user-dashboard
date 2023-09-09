// Importing Part
import Link from 'next/link';
import LogoImage from '@/app/favicon.ico';
import InputWithLabelComponent from "@/chunk/input/inputWithLabelComponent";
import ImageValidationInputComponent from "@/chunk/input/imageValidationInputComponent";

// Creating And Exporting Home Page
export default function HomePage() {
    // Returning JSX
    return (
        <div className={'flex lg:h-[100vh] lg:flex-row gap-[20px] flex-col bg-darkBlue/20'}>
            <div className={'lg:w-[50%] w-full overflow-auto'} dir={'ltr'}>
                <div className={'p-[20px] max-w-[1000px] mx-auto'} dir={'rtl'}>
                    <h1 className={'text-center font-normal text-darkBlue text-[25px] mb-[20px]'}>
                        به
                        <br/>
                        <span className={'font-bold text-theme'}> سرویس داشبورد سرویس ها جناب ابراهیمی</span>
                        <br/>
                        خوش امدید!
                    </h1>
                    <h2 className={'text-darkBlue font-normal text-[20px] text-center mb-[30px]'}>
                        ارائه ی
                        <span className={'font-bold break-after-avoid'}> پنــل قدرتمنــد </span>
                        ابـری با
                        <span className={'font-bold break-after-avoid'}> امکاناتی ویــژه </span>
                        جهت
                        <span className={'font-bold break-after-avoid'}> مدیـریـت ســرورها </span>
                    </h2>
                    <form action="#" className={'bg-white rounded-[20px] p-[20px] mb-[40px]'}>
                        <h5 className={'text-center font-bold text-darkBlue text-[20px] mb-[20px]'}>ورود</h5>
                        <InputWithLabelComponent id={'username'} label={'نام کاربری'} type={'text'} required={true} />
                        <InputWithLabelComponent id={'password'} label={'رمز عبور'} type={'password'} required={true} />
                        <Link className={'mb-[35px] text-theme font-normal text-[16px] block'} href={'/password-forgotten'}>رمز عبور خود را فراموش کرده ام.</Link>
                        <ImageValidationInputComponent />
                        <div className={'flex items-center gap-[10px] mb-[50px]'}>
                            <input required className={'w-[20px] h-[20px] rounded-[10px] accent-theme'} type="checkbox" id={'remember-me-checkbox'} name={'remember-me-checkbox'}/>
                            <label className={'text-theme font-normal text-[16px]'} htmlFor="remember-me-checkbox">مرا به خاطر بسپار</label>
                        </div>
                        <button className={'p-[20px] rounded-[10px] bg-theme text-darkBlue text-[18px] font-bold text-center truncate w-full'}>ورود</button>
                    </form>
                    <h6 className={'text-center font-normal text-darkBlue text-[18px]'}>
                        حساب کاربری ندارید؟
                        <br/>
                        <Link className={'text-theme font-bold'} href={'/signIn'}>ثبت نام کنید</Link>
                    </h6>
                </div>
            </div>
            <div className={'lg:w-[50%] lg:h-auto h-[500px] w-full bg-darkBlue lg:rounded-r-[30px] p-[20px] overflow-auto flex items-center justify-center flex-col'}>
                <img src={LogoImage.src} alt="لوگو"/>
                <h3 className={'mt-[20px] font-normal text-[20px] text-theme text-center'}>
                    سرویس داشبورد سرویس های
                    <span className={'font-bold'}> جناب ابراهیمی </span>
                </h3>
            </div>
        </div>
    );
}