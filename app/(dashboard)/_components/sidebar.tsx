import Logo from './logo';

const SideBar = () => {
  return (
    <div className='h-full border-r flex-col overflow-y-auto bg-white shadow-sm'>
      <div className='p-6'>
        <Logo />
      </div>
    </div>
  );
};

export default SideBar;
