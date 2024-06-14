import "./navMenuItem.css"
import Link from "next/link";

export default function NavMenuItem({ href, children, className, onClick }) {
    return (
        <li onClick={onClick} className={className}>
            <Link href={href}>{children}</Link>
        </li>
    );
}