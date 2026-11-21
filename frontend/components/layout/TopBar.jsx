import Link from "next/link";
import { UserIcon } from "@/components/ui/Icons";

export default function TopBar() {
  return (
    <div className="bg-forest text-sm text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-end gap-5 px-6 py-2">
        <p className="mr-auto hidden text-white/80 sm:block">Check a job level or evaluate a candidate</p>
        <Link href="/dashboard" className="inline-flex items-center gap-2 font-medium hover:text-white/80">
          <UserIcon className="h-4 w-4" />
          Open app
        </Link>
      </div>
    </div>
  );
}
