// Importing Part
import Link from "next/link";

// Creating And Exporting Dashboard Nav Bar Item Asd Default
export default function DashboardNavBarItem({link, name, icon}) {
    // Returning JSX
    return (
        <li>
            <Link href={link}>
                <button tabIndex={-1}>
                    <span className={`bi ${icon}`} />
                    {name}
                </button>
            </Link>
        </li>
    );
}