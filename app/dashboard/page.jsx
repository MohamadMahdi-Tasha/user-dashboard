// Importing Part
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";
import Link from "next/link";
import FeaturesComponent from "@/component/dashboard/featuresComponent";
import IconsComponent from "@/chunk/iconsComponent";

// Defining Title Of Page
export const metadata = {title: 'داشبورد کاربر - داشبورد'}

// Creating And Exporting Dashboard Page As Default
export default function DashboardPage() {
    // Returning JSX
    return (
        <DashboardPageComponent>
            <div className={'grid lg:grid-cols-5 gap-[10px] lg:mb-[20px] mb-[30px]'}>
                <FeaturesComponent icon={'bi-server'} title={'سرور ابری'} fgColor={'text-white'} bgColor={'bg-orange-500'} subtitle={'ساخت و مدیریت سرور های ابری'} />
                <FeaturesComponent icon={'bi-cloud-download'} title={'توزیع ابری'} fgColor={'text-white'} bgColor={'bg-teal-500'} subtitle={'امنیت ابری'} />
                <FeaturesComponent icon={'bi-shield'} title={'امنیت ابری'} fgColor={'text-white'} bgColor={'bg-sky-500'} subtitle={'برقراری امنیت کامل خدمات ابری'} />
                <FeaturesComponent icon={'bi-globe'} title={'DNS ابری'} fgColor={'text-white'} bgColor={'bg-yellow-400'} subtitle={'مدیریت ایمن دامنه ها'} />
                <FeaturesComponent icon={'bi-cart'} title={'بازارچه ابری'} fgColor={'text-white'} bgColor={'bg-purple-400'} subtitle={'شروعی سریع برای کسب و کارها'} />
            </div>
            <div className={'grid lg:grid-cols-3 gap-[10px]'}>
                <div className={'lg:col-span-2 cols-span-1 p-[20px] rounded-[20px] bg-white shadow-lg'}>
                    <div className={'flex items-center gap-[10px] mb-[30px]'}>
                        <IconsComponent name={'bi-envelope'} small={true} bgColor={'bg-sky-500'} fgColor={'text-sky-900'} />
                        <span className={'text-[16px] text-darkBlue font-bold w-full truncate'}>پیام ها</span>
                    </div>
                    <ul className={'flex flex-col gap-[25px]'}>
                        <li>
                            <Link className={'transition-all duration-500 bg-white hover:bg-darkBlue/20'} href={'#'}>
                                <span className={'block truncate mb-[10px] text-[16px] font-black text-darkBlue'}>
                                    1
                                    ماه پیش
                                </span>
                                <p className={'text-[16px] line-clamp-3 font-light text-darkBlue/80'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.س</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={'transition-all duration-500 bg-white hover:bg-darkBlue/20'} href={'#'}>
                                <span className={'block truncate mb-[10px] text-[16px] font-black text-darkBlue'}>
                                    1
                                    ماه پیش
                                </span>
                                <p className={'text-[16px] line-clamp-3 font-light text-darkBlue/80'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.س</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={'transition-all duration-500 bg-white hover:bg-darkBlue/20'} href={'#'}>
                                <span className={'block truncate mb-[10px] text-[16px] font-black text-darkBlue'}>
                                    1
                                    ماه پیش
                                </span>
                                <p className={'text-[16px] line-clamp-3 font-light text-darkBlue/80'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.س</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={'transition-all duration-500 bg-white hover:bg-darkBlue/20'} href={'#'}>
                                <span className={'block truncate mb-[10px] text-[16px] font-black text-darkBlue'}>
                                    1
                                    ماه پیش
                                </span>
                                <p className={'text-[16px] line-clamp-3 font-light text-darkBlue/80'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.س</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={'lg:cols-span-1 cols-span-1 p-[20px] rounded-[20px] bg-white shadow-lg flex flex-col gap-[20px] items-end justify-between'}>
                    <div>
                        <div className={'flex items-center gap-[10px] mb-[30px]'}>
                            <IconsComponent name={'bi-calculator'} small={true} bgColor={'bg-sky-500'} fgColor={'text-sky-900'} />
                            <span className={'text-[16px] text-darkBlue font-bold w-full truncate'}>ماشین حساب</span>
                        </div>
                        <p className={'text-[16px] line-clamp-3 font-light text-darkBlue/80'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.س</p>
                    </div>
                    <Link className={'block truncate text-[14px] font-light text-darkBlue/50'} href={'#'}>محاسبه هزینه ها</Link>
                </div>
            </div>
        </DashboardPageComponent>
    );
}