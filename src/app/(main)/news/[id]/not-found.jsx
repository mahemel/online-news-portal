import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-25 px-4">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">Page not found</p>

            <Link
                href="/"
                className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
