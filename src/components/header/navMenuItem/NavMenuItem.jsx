import "./navMenuItem.css"
import Link from "next/link";

export default function NavMenuItem({ href, children }) {
    return (
        <li className="header__menu__item">
            <Link href={href}>{children}</Link>
        </li>
    );
}