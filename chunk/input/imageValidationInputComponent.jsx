// Importing Part
import InputComponent from "@/chunk/input/inputComponent";

// Creating And Exporting Image Validation Input Component As Default
export default function ImageValidationInputComponent() {
    // Returning JSX
    return (
        <div className={'mb-[35px]'}>
            <label className={'block text-[18px] text-darkBlue font-normal truncate w-full mb-[10px]'} htmlFor="code">لطفا کد امنیتی را وارد کنید.</label>
            <div className={'flex gap-[10px]'}>
                <InputComponent type={'number'} required={true} name={'code'} />
                {/*TODO:Replace With Image*/}
                <div className={'bg-theme w-[200px] rounded-[10px]'} />
                <button className={'w-[90px] flex justify-center items-center rounded-[10px] duration-500 transition-all hover:bg-darkBlue/30'}><span className={'bi bi-arrow-repeat'} /></button>
            </div>
        </div>
    );
}