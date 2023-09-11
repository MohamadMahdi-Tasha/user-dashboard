// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import Link from 'next/link';
import InputWithLabelComponent from "@/chunk/input/inputWithLabelComponent";
import ImageValidationInputComponent from "@/chunk/input/imageValidationInputComponent";
import NameAndLogoComponent from "@/component/nameAndLogoComponent";
import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";

// Creating And Exporting Sign Up Page
export default function SignUpPage() {
    // Defining useRouter Hook To Use Later
    const routerHook = useRouter();

    // Defining State Of Component
    const [isUserLoggedIn, setUserLoggedIn] = useState();

    // Using useEffect Hook To Set If User Is Logged In
    useEffect(() => setUserLoggedIn(localStorage.getItem('user-logged-in') === 'true'), [])

    // Conditional Rendering
    if (isUserLoggedIn) {
        return (
            <div className={'flex lg:h-[100vh] lg:flex-row gap-[20px] flex-col-reverse bg-darkBlue/20'}>
                <title>داشبورد کاربر فونیکس سرور - ثبت نام</title>
                <NameAndLogoComponent />
                <div className={'overflow-auto lg:w-[50%] w-full'}>
                    <div className={'lg:p-[20px] p-[15px] max-w-[1000px] mx-auto'} >
                        <div className={'mb-[30px]'}>
                            <h1 className={'text-center font-bold text-theme lg:text-[25px] text-[20px] mb-[20px]'}>PHOENIX SERVER</h1>
                        </div>
                        <h1 className={'text-center text-theme lg:text-[18px] text-[16px] font-bold'}>شما هم اکنون وارد شده اید</h1>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={'flex lg:h-[100vh] lg:flex-row gap-[20px] flex-col-reverse bg-darkBlue/20'}>
                <title>داشبورد کاربر - ثبت نام</title>
                <NameAndLogoComponent />
                <div className={'overflow-auto lg:w-[50%] w-full'}>
                    <div className={'lg:p-[20px] p-[15px] max-w-[1000px] mx-auto'} >
                        <div className={'mb-[30px]'}>
                            <h1 className={'text-center font-bold text-theme lg:text-[25px] text-[20px] mb-[20px]'}>PHOENIX SERVER</h1>
                        </div>
                        <form onSubmit={(event) => {
                            event.preventDefault();

                            localStorage.setItem('user-logged-in', 'true');
                            routerHook.push('/dashboard');
                        }} action="#" className={'bg-white rounded-[20px] lg:p-[20px] p-[15px] mb-[40px]'}>
                            <InputWithLabelComponent id={'username'} label={'نام کاربری'} type={'text'} required={true} />
                            <InputWithLabelComponent id={'email'} label={'ایمیل'} type={'email'} required={true} />
                            <InputWithLabelComponent id={'password'} label={'رمز عبور'} type={'password'} required={true} />
                            <InputWithLabelComponent id={'password-repeat'} label={'تکرار رمز عبور'} type={'password'} required={true} />
                            <ImageValidationInputComponent />
                            <div className={'flex items-center gap-[10px] mb-[50px]'}>
                                <input required className={'lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] rounded-[10px] accent-theme'} type="checkbox" id={'accept-rules'} name={'accept-rules'}/>
                                <label className={'text-darkBlue/80 font-normal lg:text-[16px] text-[14px]'} htmlFor="accept-rules">
                                    اینجانب کلیه
                                    <span className={'font-bold text-theme'}> مفاد شرایط </span>
                                    و
                                    <span className={'font-bold text-theme'}> ضوابط خرید </span>
                                    و استفاده را مطالعه نمودم و پذیرفتم
                                </label>
                            </div>
                            <button className={'lg:p-[20px] p-[10px] rounded-[10px] bg-theme text-white lg:text-[18px] text-[14px] font-bold text-center truncate w-full'}>ثبت نام</button>
                        </form>
                        <h6 className={'text-center font-normal text-darkBlue lg:text-[18px] text-[16px]'}>
                            حساب کاربری دارید؟
                            <br/>
                            <Link className={'text-theme font-bold'} href={'/login'}>وارد شوید</Link>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}