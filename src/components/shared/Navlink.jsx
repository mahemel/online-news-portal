"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, hrefName }) => {
    const pathname = usePathname();
    return (
        <li>
            <Link
                className={pathname === href ? "text-red-900" : ""}
                href={href}
            >
                {hrefName}
            </Link>
        </li>
    );
};

export default Navlink;
