import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';
import { CalendarDaysIcon, UserCircleIcon } from '@heroicons/react/24/outline';


export default function NavBar() {
  return (
    <div
      className="md:h-15 flex h-20 shrink-0 items-center rounded-lg bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/assets/bg/bglogohumanovus.png')" }}
    >
      <div className="md:w-4/6">
        <AcmeLogo />
      </div>
      <div className="md:w-1/4 flex items-center justify-end">
        <Link href="/dashboard/calendario">
          <div className="flex h-[48px] md:w-60 grow items-center justify-center gap-2 rounded-md bg-blue-900 p-3 text-white text-sm font-medium hover:bg-white hover:text-blue-900 md:flex-none md:justify-start md:p-2 md:px-3">
            <CalendarDaysIcon className="w-6" />
            <div className="hidden md:block">Calendario</div>
          </div>
        </Link>
      </div>
      <div className="flex flex-row text-white md:w-1/6 items-center justify-center">
        <UserCircleIcon className="w-6" />
        <div className="hidden md:block">Usuario</div>
      </div>
    </div>
  );
}