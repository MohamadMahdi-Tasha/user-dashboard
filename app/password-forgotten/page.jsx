// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {useState} from "react";
import InputWithLabelComponent from "@/chunk/input/inputWithLabelComponent";

// Creating And Exporting Password Forgotten Page As Default
export default function passwordForgottenPage() {
    // Defining States Of Component
    const [isFormSubmited, setFormSubmited] = useState(false);

    // Returning JSX
    return (
        <div className={'bg-darkBlue/30 h-[100vh] overflow-auto lg:p-[20px] p-[15px]'}>
            <title>داشبورد کاربر فونیکس سرور - بازگردانی رمز عبور</title>
            <div className={'max-w-[500px] mx-auto'}>
                <div className={'mb-[30px]'}>
                    <h1 className={'text-center font-bold text-theme lg:text-[25px] text-[20px] mb-[20px]'}>PHOENIX SERVER</h1>
                </div>
                <form noValidate={(isFormSubmited)} onSubmit={(event) => {
                    event.preventDefault();

                    setFormSubmited(true)
                }} className={'lg:p-[20px] p-[15px] bg-white rounded-[20px]'} action={'#'}>
                    <InputWithLabelComponent required={true} type={'email'} label={'ایمیل'} id={'email'} />
                    {
                        (!isFormSubmited)
                            ? <button className={'lg:p-[20px] p-[10px] rounded-[10px] bg-theme text-white lg:text-[18px] text-[14px] font-bold text-center truncate w-full'}>بازگردانی رمز عبور</button>
                            : <p className={'lg:text-[16px] text-[14px] font-normal text-theme'}>ما ایمیلی با لینکی برای ورود به وبسایت برای شما ارسال کردیم.</p>
                    }
                </form>
            </div>
        </div>
    );
}