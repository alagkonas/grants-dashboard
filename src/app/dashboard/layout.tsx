import Header from "@/app/dashboard/_components/header/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none ">
        <Header />
      </div>
      <div className="flex-grow md:overflow-y-auto w-full">{children}</div>
    </div>
  );
}