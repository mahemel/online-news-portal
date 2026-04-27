"use client";
import Loading from "@/app/loading";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        const { name, image, email, password } = formData;

        console.log(name, image, email, password);

        const { data, error } = await authClient.signUp.email(
            {
                name,
                image,
                email,
                password,
                callbackURL: "/login",
            },
            {
                onRequest: (ctx) => {
                    <Loading></Loading>;
                },
                onSuccess: (ctx) => {
                    router.push("/login");
                },
                onError: (ctx) => {
                    alert(ctx.error.message);
                },
            },
        );

        if (data) {
            console.log(data);
        }

        if (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="bg-white p-10 border border-gray-200 rounded-lg w-md">
                <h2 className="font-semibold text-2xl">
                    Register your account
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Enter your name"
                            {...register("name", {
                                required: "Please enter you name",
                                minLength: 3,
                            })}
                        />
                        {errors.name && (
                            <p className="text-[12px] text-red-500">
                                {errors.name.message}
                            </p>
                        )}

                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Enter your photo URL"
                            {...register("image", {
                                required: "Please enter your photo url",
                            })}
                        />
                        {errors.image && (
                            <p className="text-[12px] text-red-500">
                                {errors.image.message}
                            </p>
                        )}

                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Please enter your email.",
                            })}
                        />
                        {errors.email && (
                            <p className="text-[12px] text-red-500">
                                {errors.email.message}
                            </p>
                        )}

                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input w-full"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Please enter your password",
                            })}
                        />
                        {errors.password && (
                            <p className="text-[12px] text-red-500">
                                {errors.password.message}
                            </p>
                        )}

                        <button className="btn btn-neutral mt-4">
                            Register
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
