import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="scroll-m-20 text-4xl text-orange-600 font-extrabold tracking-tight lg:text-5xl">
          Grants Dashboard
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome to a simple dashboard created for the purposes of a home assessment.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground bg-orange-600 text-background gap-2 hover:bg-orange-700 dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/dashboard"
          >
            Go to dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
