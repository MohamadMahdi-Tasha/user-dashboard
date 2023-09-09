// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {useRouter} from "next/navigation";

// Defining Title Of Page
export const metadata = {title: 'داشبورد کاربر - خانه'}

// Creating A Home Page That Checks If User Is Logged In Then Redirects To Dashboard Page. Otherwise, Redirects To Login Page
export default function HomePage() {
    // Defining Router Hook To Use Later
    const routerHook = useRouter();

    if (localStorage.getItem('user-logged-in') === 'true') {
        routerHook.push('/dashboard');
    } else {
        routerHook.push('/login');
    }
}