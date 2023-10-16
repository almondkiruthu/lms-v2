"use client";

import { UserButton } from "@clerk/nextjs";

const NavbarRoutes = () => {
  return (
    <div className="ml-auto flex gap-x-2">
      <UserButton />
    </div>
  );
};

export default NavbarRoutes;
