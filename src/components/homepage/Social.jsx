"use client";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGitHubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    };
    return (
        <div className="col-span-3 space-y-3">
            <h2 className="font-bold text-2xl">Login With</h2>

            <div className="space-y-3">
                <button className="btn w-full" onClick={handleGoogleSignIn}>
                    <FaGoogle />
                    Login with google
                </button>
                <button className="btn w-full" onClick={handleGitHubSignIn}>
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default Social;
