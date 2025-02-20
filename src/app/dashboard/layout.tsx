import Header from "@/app/dashboard/_components/header/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 h-[calc(100vh-64px)]">
        {children}
      </main>
    </div>
  );
}