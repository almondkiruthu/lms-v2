'use client';

import { Layout, Compass } from 'lucide-react';

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
];
const SidebarRoutes = () => {
  return <div className='flex flex-col w-full'>sidebarroutes!</div>;
};

export default SidebarRoutes;
