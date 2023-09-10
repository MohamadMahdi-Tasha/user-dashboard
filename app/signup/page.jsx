// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import Link from 'next/link';
import InputWithLabelComponent from "@/chunk/input/inputWithLabelComponent";
import ImageValidationInputComponent from "@/chunk/input/imageValidationInputComponent";
import NameAndLogoComponent from "@/component/nameAndLogoComponent";
import WelcomeMassageComponent from "@/component/welcomeMassageComponent";
import {useRouter} from "next/navigation";

// Defining Title Of Page
export const metadata = {title: 'داشبورد کاربر - ثبت نام'}

// Creating And Exporting Sign Up Page
export default function SignUpPage() {
    // Defining useRouter Hook To Use Later
    const routerHook = useRouter();

    // Returning JSX
    return (
        <div className={'flex lg:h-[100vh] lg:flex-row gap-[20px] flex-col-reverse bg-darkBlue/20'}>
            <NameAndLogoComponent rounded={'left'} />
            <div className={'overflow-auto lg:w-[50%] w-full'}>
                <div className={'p-[20px] max-w-[1000px] mx-auto'} >
                    <WelcomeMassageComponent />
                    <form onSubmit={(event) => {
                        event.preventDefault();

                        localStorage.setItem('user-logged-in', 'true');
                        routerHook.push('/dashboard');
                    }} action="#" className={'bg-white rounded-[20px] p-[20px] mb-[40px]'}>
                        <h5 className={'text-center font-bold text-darkBlue text-[20px] mb-[20px]'}>ثبت نام</h5>
                        <InputWithLabelComponent id={'username'} label={'نام کاربری'} type={'text'} required={true} />
                        <InputWithLabelComponent id={'email'} label={'ایمیل'} type={'email'} required={true} />
                        <InputWithLabelComponent id={'password'} label={'رمز عبور'} type={'password'} required={true} />
                        <InputWithLabelComponent id={'password-repeat'} label={'تکرار رمز عبور'} type={'password'} required={true} />
                        <ImageValidationInputComponent />
                        <div className={'flex items-center gap-[10px] mb-[50px]'}>
                            <input required className={'w-[20px] h-[20px] rounded-[10px] accent-theme'} type="checkbox" id={'accept-rules'} name={'accept-rules'}/>
                            <label className={'text-darkBlue font-normal text-[16px]'} htmlFor="accept-rules">
                                اینجانب کلیه
                                <span className={'font-bold text-theme'}> مفاد شرایط </span>
                                و
                                <span className={'font-bold text-theme'}> ضوابط خرید </span>
                                و استفاده را مطالعه نمودم و پذیرفتم
                            </label>
                        </div>
                        <button className={'p-[20px] rounded-[10px] bg-theme text-darkBlue text-[18px] font-bold text-center truncate w-full'}>ثبت نام</button>
                    </form>
                    <h6 className={'text-center font-normal text-darkBlue text-[18px]'}>
                        حساب کاربری دارید؟
                        <br/>
                        <Link className={'text-theme font-bold'} href={'/login'}>وارد شوید</Link>
                    </h6>
                </div>
            </div>
        </div>
    );
}