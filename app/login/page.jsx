// Importing Part
import Link from 'next/link';
import InputWithLabelComponent from "@/chunk/input/inputWithLabelComponent";
import ImageValidationInputComponent from "@/chunk/input/imageValidationInputComponent";
import NameAndLogoComponent from "@/component/nameAndLogoComponent";
import WelcomeMassageComponent from "@/component/welcomeMassageComponent";

// Defining Title Of Page
export const metadata = {title: 'داشبورد کاربر - ورود'}

// Creating And Exporting Login Page
export default function LoginPage() {
    // Returning JSX
    return (
        <div className={'flex lg:h-[100vh] lg:flex-row gap-[20px] flex-col bg-darkBlue/20'}>
            <div className={'lg:w-[50%] w-full overflow-auto'} dir={'ltr'}>
                <div className={'p-[20px] max-w-[1000px] mx-auto'} dir={'rtl'}>
                    <WelcomeMassageComponent />
                    <form action="#" className={'bg-white rounded-[20px] p-[20px] mb-[40px]'}>
                        <h5 className={'text-center font-bold text-darkBlue text-[20px] mb-[20px]'}>ورود</h5>
                        <InputWithLabelComponent id={'username'} label={'نام کاربری'} type={'text'} required={true} />
                        <InputWithLabelComponent id={'password'} label={'رمز عبور'} type={'password'} required={true} />
                        <Link className={'mb-[35px] text-theme font-normal text-[16px] block'} href={'/password-forgotten'}>رمز عبور خود را فراموش کرده ام.</Link>
                        <ImageValidationInputComponent />
                        <div className={'flex items-center gap-[10px] mb-[50px]'}>
                            <input className={'w-[20px] h-[20px] rounded-[10px] accent-theme'} type="checkbox" id={'remember-me-checkbox'} name={'remember-me-checkbox'}/>
                            <label className={'text-theme font-normal text-[16px]'} htmlFor="remember-me-checkbox">مرا به خاطر بسپار</label>
                        </div>
                        <button className={'p-[20px] rounded-[10px] bg-theme text-darkBlue text-[18px] font-bold text-center truncate w-full'}>ورود</button>
                    </form>
                    <h6 className={'text-center font-normal text-darkBlue text-[18px]'}>
                        حساب کاربری ندارید؟
                        <br/>
                        <Link className={'text-theme font-bold'} href={'/signup'}>ثبت نام کنید</Link>
                    </h6>
                </div>
            </div>
            <NameAndLogoComponent rounded={'right'} />
        </div>
    );
}