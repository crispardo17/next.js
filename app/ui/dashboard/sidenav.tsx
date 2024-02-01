
import NavLinks from '@/app/ui/dashboard/nav-links';
import styles from '@/app/ui/home.module.css';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-cover bg-center rounded-lg" style={{backgroundImage: "url('/assets/bg/degradenuevo.png')"}}>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <form
        action={async () => {
          'use server';
          await signOut();
        }}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-blue-900 text-white p-3 text-sm font-medium hover:bg-white hover:text-blue-900 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Salir</div>
          </button>
        </form>
      </div>
    </div>
  );
}
