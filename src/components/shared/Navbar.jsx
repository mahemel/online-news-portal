"use client";
import Link from "next/link";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
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

    const { data: session, isPending } = authClient.useSession();

    const handleSignOut = () => {
        authClient.signOut();
        router.push("/login");
    };

    return (
        <div className="grid grid-cols-3 items-center pt-7.5">
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
                {isPending ? (
                    <div className="flex">
                        <span className="loading loading-ring loading-md"></span>
                    </div>
                ) : session?.user ? (
                    <>
                        <div className="flex items-center gap-4">
                            <p>{session.user.name}</p>
                            <button className="btn" onClick={handleSignOut}>
                                Sign Out
                            </button>
                        </div>
                    </>
                ) : (
                    <Link
                        className="btn btn-neutral rounded-none"
                        href={"/login"}
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
