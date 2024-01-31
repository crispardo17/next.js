
import SideNav from '@/app/ui/dashboard/sidenav';
import NavBar from '@/app/ui/dashboard/navbar';
import { inter } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col p-3">
      <NavBar />
      <div className={`${styles.shape} mt-1 flex grow flex-col gap-4 md:flex-row`}>
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div
          className={`${inter.className} flex-grow p-6 md:p-3 ${styles.shape1}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
