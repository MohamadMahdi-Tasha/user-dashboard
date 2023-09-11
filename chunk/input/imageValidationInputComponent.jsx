// Importing Part
import InputComponent from "@/chunk/input/inputComponent";

// Creating And Exporting Image Validation Input Component As Default
export default function ImageValidationInputComponent() {
    // Returning JSX
    return (
        <div className={'mb-[35px]'}>
            <label className={'block lg:text-[18px] text-[16px] text-darkBlue font-normal truncate w-full mb-[10px]'} htmlFor="code">لطفا کد امنیتی را وارد کنید.</label>
            <div className={'flex lg:flex-row flex-col gap-[10px]'}>
                <InputComponent min={1111} max={9999} type={'number'} required={true} name={'code'} />
                {/*TODO:Replace With Image*/}
                <div className={'bg-theme lg:w-[200px] w-full rounded-[10px] lg:h-auto h-[40px]'} />
                <button type={'button'} className={'lg:w-[90px] w-full lg:h-auto h-[40px] flex justify-center items-center rounded-[10px] duration-500 transition-all hover:bg-darkBlue/30'}><span className={'bi bi-arrow-repeat'} /></button>
            </div>
        </div>
    );
}