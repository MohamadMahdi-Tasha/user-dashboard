// Creating And Exporting Welcome Text Massage Component As Default
export default function WelcomeMassageComponent() {
    // Returning JSX
    return (
        <div className={'mb-[30px]'}>
            <h1 className={'text-center font-normal text-darkBlue text-[25px] mb-[20px]'}>
                به
                <br/>
                <span className={'font-bold text-theme'}> سرویس داشبورد سرویس ها جناب ابراهیمی</span>
                <br/>
                خوش امدید!
            </h1>
            <h2 className={'text-darkBlue font-normal text-[20px] text-center'}>
                ارائه ی
                <span className={'font-bold break-after-avoid'}> پنــل قدرتمنــد </span>
                ابـری با
                <span className={'font-bold break-after-avoid'}> امکاناتی ویــژه </span>
                جهت
                <span className={'font-bold break-after-avoid'}> مدیـریـت ســرورها </span>
            </h2>
        </div>
    );
}