// Importing Part
import Link from "next/link";

// Creating And Exporting Dashboard Pages Header In Main Side As Default
export default function DashboardMainHeaderComponent() {
    // Returning JSX
    return (
        <header>
            <Link href={'/dashboard/money'}>
                <button tabIndex={-1}>
                    <span className={'bi bi-plus'} />
                    <span>{(500000).toLocaleString()}</span>
                    <span>ریال</span>
                </button>
                <div>
                    <Link href={'/dashboard/support'}><button tabIndex={-1}><span className={'bi bi-headphones'} /></button></Link>
                    <Link href={'/dashboard/notifications'}><button tabIndex={-1}><span className={'bi bi-bell'} /></button></Link>
                    <Link href={'/dashboard/profile'}>
                        <button tabIndex={-1}>
                            <span className={'bi bi-person'} />
                            <span>محمد مهدی تاشا</span>
                            <span className={'bi bi-chevron-down'} />
                        </button>
                    </Link>
                </div>
            </Link>
        </header>
    );
}