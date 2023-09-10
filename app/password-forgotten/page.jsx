// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {useState} from "react";
import InputWithLabelComponent from "@/chunk/input/inputWithLabelComponent";
import WelcomeMassageComponent from "@/component/welcomeMassageComponent";

// Creating And Exporting Password Forgotten Page As Default
export default function passwordForgottenPage() {
    // Defining States Of Component
    const [isFormSubmited, setFormSubmited] = useState(false);

    // Returning JSX
    return (
        <div className={'bg-darkBlue/30 h-[100vh] overflow-auto p-[20px]'}>
            <title>داشبورد کاربر - بازگردانی رمز عبور</title>
            <div className={'max-w-[500px] mx-auto'}>
                <WelcomeMassageComponent />
                <form noValidate={(isFormSubmited)} onSubmit={(event) => {
                    event.preventDefault();

                    setFormSubmited(true)
                }} className={'p-[20px] bg-white rounded-[20px]'} action={'#'}>
                    <h5 className={'text-center font-bold text-darkBlue text-[20px] mb-[20px]'}>بازگردانی رمز عبور</h5>
                    <InputWithLabelComponent required={true} type={'email'} label={'ایمیل'} id={'email'} />
                    {
                        (!isFormSubmited)
                            ? <button className={'p-[20px] rounded-[10px] bg-theme text-darkBlue text-[18px] font-bold text-center truncate w-full'}>بازگردانی رمز عبور</button>
                            : <p className={'text-[16px] font-normal text-theme'}>ما ایمیلی با لینکی برای ورود به وبسایت برای شما ارسال کردیم.</p>
                    }
                </form>
            </div>
        </div>
    );
}