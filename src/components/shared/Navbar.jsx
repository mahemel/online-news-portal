import Link from "next/link";
import Navlink from "./Navlink";

const Navbar = () => {
    const links = [
        {
            id: 1,
            href: "/",
            hrefName: "Home",
        },
        {
            id: 2,
            href: "/about",
            hrefName: "About",
        },
        {
            id: 3,
            href: "/career",
            hrefName: "Career",
        },
    ];

    return (
        <div className="grid grid-cols-3 items-center">
            <div></div>
            <ul className="flex gap-8 justify-center">
                {links.map((link) => (
                    <Navlink
                        key={link.id}
                        href={link.href}
                        hrefName={link.hrefName}
                    ></Navlink>
                ))}
            </ul>

            <div className="flex justify-end">
                <Link className="btn btn-neutral rounded-none" href={"/login"}>
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
