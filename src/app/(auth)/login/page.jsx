"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleLoginFn = async (formData) => {
        const { email, password } = formData;

        const { data, error } = await authClient.signIn.email(
            {
                email,
                password,
                callbackURL: "/",
            },
            {
                onError: (ctx) => {
                    alert(ctx.error.message);
                },
            },
        );
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="bg-white p-10 border border-gray-200 rounded-lg w-md">
                <h2 className="font-semibold text-3xl">Login your account</h2>

                <form onSubmit={handleSubmit(handleLoginFn)}>
                    <fieldset className="fieldset">
                        <label htmlFor="email" className="label">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                            {...register("email", {
                                required: "Please enter your email.",
                            })}
                        />
                        {errors.email && (
                            <p className="text-sm italic text-red-600">
                                {errors.email.message}
                            </p>
                        )}

                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="input w-full"
                            placeholder="Password"
                            {...register("password", {
                                required: "Please enter your password.",
                            })}
                        />
                        {errors.password && (
                            <p className="text-sm italic text-red-600">
                                {errors.password.message}
                            </p>
                        )}

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                    <p>
                        Don&apos;t have an account?{" "}
                        <Link className="text-blue-600" href={"/register"}>
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
