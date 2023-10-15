import Sidebar from './_components/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='hidden md:flex z-50 h-full w-56 flex-col bg-fixed inset-y-0'>
        <Sidebar />
      </div>
      <main className='md:pl-56 h-full'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
