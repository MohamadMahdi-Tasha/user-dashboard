// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {useState, useEffect} from "react";
import DashboardNavBar from "@/component/dashboard/nav/dashboardNavBar";
import HolderComponent from "@/chunk/holderComponent";
import DashboardMainHeaderComponent from "@/component/dashboard/dashboardMainHeaderComponent";
import Link from "next/link";

// Creating And Exporting Dashboard Page Component As Default
export default function DashboardPageComponent({children}) {
    // Setting States Of Component
    const [isNavOpened, setNavOpened] = useState(false);
    const [isUserLoggedIn, setUserLoggedIn] = useState();

    // Checking If User Is Logged In
    useEffect(() => setUserLoggedIn(localStorage.getItem('user-logged-in') === 'true'), [])

    // Conditional Rendering
    if (isUserLoggedIn) {
        return (
            <section className={'flex lg:flex-row flex-col lg:gap-[20px] h-[100vh] bg-darkBlue'}>
                <DashboardNavBar isOpened={isNavOpened} closeFunction={() => setNavOpened(false)} />
                <main className={'p-[20px] bg-white/50 lg:w-[80vw] w-full lg:h-full h-[750px] overflow-auto'}>
                    <HolderComponent>
                        <DashboardMainHeaderComponent onClickOfShowNavBtn={() => setNavOpened(true)} />
                        {children}
                    </HolderComponent>
                </main>
            </section>
        );
    } else {
        return (
            <section className={'lg:h-[100vh] bg-darkBlue p-[20px]'}>
                <main className={'p-[20px] bg-white/50 w-full rounded-[30px] lg:h-full h-[750px] overflow-auto'}>
                    <h1 className={'text-center text-[30px] font-black text-white'}>لطفا برای استفاده از این بخش وارد شوید.</h1>
                    <div className={'flex justify-center items-center mt-[30px]'}>
                        <Link href={'/login'}>
                            <button tabIndex={-1} className={'text-[16px] text-white bg-theme px-[30px] py-[10px] rounded-[10px]'}>
                                ورود
                            </button>
                        </Link>
                    </div>
                </main>
            </section>
        );
    }
}