// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {useState} from "react";

// Creating And Exporting Input Component As Default
export default function InputComponent({type, required, name, min, max}) {
    // Conditional Rendering
    if (type === 'password') {
        // Defining State Of Component
        const [isShowing, setShowing] = useState(false);

        // Returning JSX
        return (
            <div className={'flex bg-darkBlue/30 w-full rounded-[10px] overflow-hidden'}>
                <input required className={'w-full p-[10px] focus:bg-darkBlue/30 transition-all duration-500 bg-transparent outline-0'} type={(isShowing) ? 'text' : 'password'} id={name} name='password' />
                <button onClick={() => setShowing(prevState => !prevState)}
                        type={'button'} className={'w-[50px] h-[50px] aspect-square flex items-center justify-center hover:bg-darkBlue/30 transition-all duration-500'}>
                    {
                        (isShowing)
                            ? <span className={'bi bi-eye-slash text-[18px]'} />
                            : <span className={'bi bi-eye text-[18px]'} />
                    }
                </button>
            </div>
        );
    } else if (type === 'number') {
        return (
            <input required={required}
                   max={max}
                   min={min}
                   type='number'
                   id={name}
                   name={name}
                   className={'bg-darkBlue/30 w-full p-[15px] appearance-none no-arrow rounded-[10px] outline-0 focus:bg-darkBlue/40 transition-all duration-500 text-darkBlue'}/>
        );
    } else {
        return (
            <input required={required}
                   type={type}
                   id={name}
                   name={name}
                   className={'bg-darkBlue/30 w-full p-[15px] rounded-[10px] outline-0 focus:bg-darkBlue/40 transition-all duration-500 text-darkBlue'}/>
        );
    }
}