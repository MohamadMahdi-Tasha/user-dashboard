// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import Link from 'next/link';
import {useRouter} from "next/navigation";
import InputWithLabelComponent from "@/chunk/input/inputWithLabelComponent";
import ImageValidationInputComponent from "@/chunk/input/imageValidationInputComponent";
import NameAndLogoComponent from "@/component/nameAndLogoComponent";
import {useEffect, useState} from "react";

// Creating And Exporting Login Page
export default function LoginPage() {
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
                <div className={'overflow-auto lg:w-[50%] w-full'}>
                    <div className={'lg:p-[20px] p-[15px] max-w-[1000px] mx-auto'} >
                        <WelcomeMassageComponent />
                        <h1 className={'text-center text-theme lg:text-[18px] text-[16px] font-bold'}>شما هم اکنون وارد شده اید</h1>
                    </div>
                </div>
                <NameAndLogoComponent />
            </div>
        );
    } else {
        return (
            <div className={'flex lg:h-[100vh] lg:flex-row gap-[20px] flex-col bg-darkBlue/20'}>
                <title>داشبورد کاربر - ورود</title>
                <div className={'lg:w-[50%] w-full overflow-auto'} dir={'ltr'}>
                    <div className={'lg:p-[20px] p-[15px] max-w-[1000px] mx-auto'} dir={'rtl'}>
                        <div className={'mb-[30px]'}>
                            <h1 className={'text-center font-black text-theme lg:text-[25px] text-[20px] mb-[20px]'}>PHOENIX SERVER</h1>
                        </div>
                        <form onSubmit={(event) => {
                            event.preventDefault();

                            localStorage.setItem('user-logged-in', 'true');
                            routerHook.push('/dashboard');
                        }} action="#" className={'bg-white rounded-[20px] lg:p-[20px] p-[15px] mb-[40px]'}>
                            <InputWithLabelComponent id={'username'} label={'نام کاربری'} type={'text'} required={true} />
                            <InputWithLabelComponent id={'password'} label={'رمز عبور'} type={'password'} required={true} />
                            <Link className={'mb-[35px] text-theme font-normal text-[16px] block'} href={'/password-forgotten'}>رمز عبور خود را فراموش کرده ام.</Link>
                            <ImageValidationInputComponent />
                            <button className={'lg:p-[20px] p-[10px] rounded-[10px] bg-theme text-white lg:text-[18px] text-[14px] font-bold text-center truncate w-full'}>ورود</button>
                        </form>
                        <h6 className={'text-center font-normal text-darkBlue lg:text-[18px] text-[16px]'}>
                            حساب کاربری ندارید؟
                            <Link className={'text-theme font-bold'} href={'/signup'}> ثبت نام کنید </Link>
                        </h6>
                    </div>
                </div>
                <NameAndLogoComponent />
            </div>
        );
    }
}