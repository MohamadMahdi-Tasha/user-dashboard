// Importing Part
import LogoImage from '@/app/favicon.ico';

// Creating And Exporting Name And Logo Component

export default function NameAndLogoComponent({rounded}) {
    // Returning JSX
    return (
        <div className={`lg:w-[50%] lg:h-auto h-[500px] w-full bg-darkBlue p-[20px] overflow-auto flex items-center justify-center flex-col ${(rounded === 'right') ? 'lg:rounded-r-[30px]' : 'lg:rounded-l-[30px]'}`}>
            <img src={LogoImage.src} alt="لوگو"/>
            <h3 className={'mt-[20px] font-normal text-[20px] text-theme text-center'}>
                سرویس داشبورد سرویس های
                <span className={'font-bold'}> جناب ابراهیمی </span>
            </h3>
        </div>
    );
}