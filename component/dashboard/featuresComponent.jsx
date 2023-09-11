// Importing Part
import IconsComponent from "@/chunk/iconsComponent";

// Creating And Exporting Features Component
export default function FeaturesComponent({title,icon,bgColor,fgColor,subtitle}) {
    // Returning JSX
    return (
        <div className={'bg-white rounded-[20px] lg:p-[20px] p-[15px] shadow-lg'}>
            <IconsComponent name={icon} bgColor={bgColor} fgColor={fgColor} />
            <span className={'my-[10px] block font-bold text-darkBlue text-[15px] truncate'}>{title}</span>
            <p className={'truncate font-light text-darkBlue/80 text-[13px]'}>{subtitle}</p>
        </div>
    );
}
