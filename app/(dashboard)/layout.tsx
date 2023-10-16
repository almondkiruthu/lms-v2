import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <div className="inset-y-0 z-50 hidden h-full w-56 flex-col bg-fixed md:flex">
        <Sidebar />
      </div>
      <main className="">{children}</main>
    </div>
  );
};

export default DashboardLayout;
