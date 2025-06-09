import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8">
      <Image src="/images/icon/not-found.svg" alt="404 Error" width={200} height={200} />
      <h1 className="text-4xl font-bold mt-6">404 - Page Not Found</h1>
      <p className="text-lg mt-4 text-center">Oops! The page you’re looking for doesn’t exist.</p>
      <div className="mt-8">
        <Link
          href="/"
          passHref
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
