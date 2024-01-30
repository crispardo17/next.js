import AcmeLogo from '@/app/ui/acme-logo';
import SideNav from '@/app/ui/dashboard/sidenav';
import { inter } from '@/app/ui/fonts';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col p-3 overflow-y-block">
      <div className="md:h-15 flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div
          className={`${inter.className} flex-grow p-6  md:p-3`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
