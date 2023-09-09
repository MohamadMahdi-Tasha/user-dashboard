// Creating And Exporting Holder Component As Default
export default function HolderComponent({children}) {
    return (
        <div className={'mx-auto max-w-[1100px]'}>
            {children}
        </div>
    );
}