import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="pl-6">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
