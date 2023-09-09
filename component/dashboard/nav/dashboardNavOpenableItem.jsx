// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {useState} from "react";
import Link from 'next/link';

// Creating And Exporting Dashboard Nav Open-able Items As Default
export default function DashboardNavOpenableItem({name, icon, link, children}) {
    // Defining States Of Component
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <li>
            <div>
                <Link href={link}>
                    <button tabIndex={-1}>
                        <span className={`bi ${icon}`} />
                        <span>{name}</span>
                    </button>
                </Link>
                <button onClick={() => setOpened(prevState => !prevState)}>
                    <span className={'bi bi-chevron-down'} />
                </button>
            </div>
            <ul>
                {children}
            </ul>
        </li>
    );
}