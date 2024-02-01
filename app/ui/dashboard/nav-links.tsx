'use client';
import {
  UserGroupIcon,
  InboxIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  UserPlusIcon,
  AcademicCapIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: InboxIcon },
  { name: 'Requerimiento', href: '/dashboard/requerimiento', icon: InboxIcon },
  {
    name: 'Gestionar Requerimiento',
    href: '/dashboard/invoices',
    icon: InboxArrowDownIcon,
  },
  { name: 'Selección', href: '/dashboard/customers', icon: UserPlusIcon },
  { name: 'Gestionar Selección', href: '/dashboard/gestionSeleccion', icon: UserGroupIcon },
  { name: 'Contratación', href: '/dashboard/contratacion', icon: AcademicCapIcon },
  { name: 'Planta', href: '/dashboard/planta', icon: HomeModernIcon },
  { name: 'Configuración', href: '/dashboard/configuracion', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-blue-900 p-3 text-sm text-white font-medium hover:bg-white hover:text-blue-900 md:flex-none md:justify-start md:p-2 md:px-4',
              {
                'bg-blue-900 text-white': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
