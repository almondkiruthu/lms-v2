import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="pl-6">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
