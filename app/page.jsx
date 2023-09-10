// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {useEffect} from "react";
import {useRouter} from "next/navigation";

// Creating A Home Page That Checks If User Is Logged In Then Redirects To Dashboard Page. Otherwise, Redirects To Login Page
export default function HomePage() {
    // Defining Router Hook To Use Later
    const routerHook = useRouter();

    // Using useEffect Hook To Redirect To Pages Based On User Status
    useEffect(() => {
        (localStorage.getItem('user-logged-in') === 'true')
            ? routerHook.push('/dashboard')
            : routerHook.push('/login')
    }, [])

    return (
        <div>
            <title>داشبورد کاربر - خانه</title>
            <h1>Home Page</h1>
        </div>
    );
}