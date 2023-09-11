// Creating And Exporting Icon Component As Default
export default function IconsComponent({name, small = false, bgColor, fgColor}) {
    // Conditional Rendering
    if (small) {
        return (
            <div className={`${bgColor} w-[30px] h-[30px] flex aspect-square justify-center items-center rounded-[10px]`}>
                <span className={`bi ${name} ${fgColor} text-[12px]`} />
            </div>
        );
    } else {
        return (
            <div className={`${bgColor} w-[40px] h-[40px] flex aspect-square justify-center items-center rounded-[10px]`}>
                <span className={`bi ${name} ${fgColor} text-[16px]`} />
            </div>
        );
    }
}