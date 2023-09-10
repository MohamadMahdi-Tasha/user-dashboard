// Importing Part
import HolderComponent from "@/chunk/holderComponent";
import InputWithLabelComponent from "@/chunk/input/inputWithLabelComponent";

// Creating And Exporting Password Forgotten Page As Default
export default function passwordForgottenPage() {
    // Returning JSX
    return (
        <div>
            <HolderComponent>
                <form className={'p-[20px]'} action={'#'}>
                    <h1>بازگردانی رمز عبور</h1>
                    <InputWithLabelComponent required={true} type={'email'} label={'ایمیل'} id={'email'} />
                    <button>بازگردانی رمز عبور</button>
                </form>
            </HolderComponent>
        </div>
    );
}