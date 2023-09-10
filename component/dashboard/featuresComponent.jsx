// Importing Part
import IconsComponent from "@/chunk/iconsComponent";

// Creating And Exporting Features Component
export default function FeaturesComponent({title,icon,bgColor,fgColor,subtitle}) {
    // Returning JSX
    return (
        <div>
            <IconsComponent name={icon} bgColor={bgColor} fgColor={fgColor} />
            <span>{title}</span>
            <p>{subtitle}</p>
        </div>
    );
}