// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {useState} from "react";
import DashboardNavBar from "@/component/dashboard/nav/dashboardNavBar";
import HolderComponent from "@/chunk/holderComponent";
import DashboardMainHeaderComponent from "@/component/dashboard/dashboardMainHeaderComponent";

// Creating And Exporting Dashboard Page Component As Default
export default function DashboardPageComponent({children}) {
    // Setting States Of Component
    const [isNavOpened, setNavOpened] = useState(false);

    // Returning JSX
    return (
        <section className={'flex lg:flex-row flex-col gap-[20px] h-[100vh] bg-darkBlue'}>
            <DashboardNavBar isOpened={isNavOpened} closeFunction={() => setNavOpened(false)} />
            <main className={'p-[20px] bg-white/50 lg:w-[80vw] w-full lg:rounded-r-[30px] lg:h-full h-[750px] overflow-auto'}>
                <HolderComponent>
                    <DashboardMainHeaderComponent onClickOfShowNavBtn={() => setNavOpened(true)} />
                    {children}
                </HolderComponent>
            </main>
        </section>
    );
}