import logo from "@/assets/logo.png";
import Image from "next/image";
const Header = () => {
    const today = new Date();
    const formatted = today.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className="flex flex-col items-center gap-2.5  pt-8">
            <Image src={logo} alt="Logo" width={468} height={54}></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{formatted}</p>
        </div>
    );
};

export default Header;
