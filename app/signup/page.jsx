// Importing Part
import Link from 'next/link';
import InputWithLabelComponent from "@/chunk/input/inputWithLabelComponent";
import ImageValidationInputComponent from "@/chunk/input/imageValidationInputComponent";
import NameAndLogoComponent from "@/component/nameAndLogoComponent";

// Defining Title Of Page
export const metadata = {title: 'داشبورد کاربر - ثبت نام'}

// Creating And Exporting Sign Up Page
export default function SignUpPage() {
    // Returning JSX
    return (
        <div className={'flex lg:h-[100vh] lg:flex-row gap-[20px] flex-col bg-darkBlue/20'}>
            <NameAndLogoComponent rounded={'left'} />
            <div className={'overflow-auto w-[50%]'}>
                <div className={'p-[20px] max-w-[1000px] mx-auto'} >
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
                        <h5 className={'text-center font-bold text-darkBlue text-[20px] mb-[20px]'}>ثبت نام</h5>
                        <InputWithLabelComponent id={'username'} label={'نام کاربری'} type={'text'} required={true} />
                        <InputWithLabelComponent id={'password'} label={'رمز عبور'} type={'password'} required={true} />
                        <InputWithLabelComponent id={'password'} label={'تکرار رمز عبور'} type={'password'} required={true} />
                        <ImageValidationInputComponent />
                        <button className={'p-[20px] rounded-[10px] bg-theme text-darkBlue text-[18px] font-bold text-center truncate w-full'}>ورود</button>
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