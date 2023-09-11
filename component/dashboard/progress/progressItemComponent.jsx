// Creating And Exporting Progress Item Component As Default
export default function ProgressItemComponent({isActive, icon, title, number}) {
    // Returning JSX
    return (
        <div className={'items-center justify-center flex flex-col gap-[20px]'}>
            <div data-active={isActive}
                 className={'w-[30px] h-[30px] data-[active="true"]:border-sky-300 data-[active="true"]:text-white data-[active="true"]:bg-theme data-[active="false"]:bg-gray-300 data-[active="false"]:text-darkBlue rounded-[5px] flex items-center justify-center text-white text-[14px] border-2 '}>
                {number}
            </div>
            <h6 className={'text-darkBlue flex gap-[10px] text-[14px] font-normal w-full'}>
                <span className={`bi ${icon}`} />
                <span className={'truncate block w-full'}>{title}</span>
            </h6>
        </div>
    );
}