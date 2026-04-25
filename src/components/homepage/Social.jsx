import { FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
    return (
        <div className="col-span-3 space-y-3">
            <h2 className="font-bold text-2xl">Login With</h2>

            <div className="space-y-3">
                <button className="btn w-full">
                    <FaGoogle />
                    Login with google
                </button>
                <button className="btn w-full">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default Social;
