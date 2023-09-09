// Importing Part
import InputComponent from "@/chunk/input/inputComponent";

// Creating And Exporting Input With Label Component As Default
export default function InputWithLabelComponent({id, label, type, required}) {
    // Returning JSX
    return (
        <div className={'mb-[20px]'}>
            <label className={'block text-[18px] text-darkBlue font-normal truncate w-full mb-[10px]'} htmlFor={id}>
                {label}
            </label>
            <InputComponent type={type} required name={id} />
        </div>
    );
}