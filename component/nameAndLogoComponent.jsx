// Importing Part
import LogoImage from '@/app/favicon.ico';
import Image from "next/image";

// Creating And Exporting Name And Logo Component

export default function NameAndLogoComponent() {
    // Returning JSX
    return (
        <div className={'lg:w-[50%] lg:h-auto h-[500px] w-full bg-darkBlue p-[20px] overflow-auto flex items-center justify-center flex-col'}>
            <Image src={LogoImage.src} alt="لوگو" width={100} height={100}/>
            <h3 className={'mt-[20px] font-bold lg:text-[24px] text-[20px] text-theme text-center'}>PHOENIX SERVER</h3>
        </div>
    );
}