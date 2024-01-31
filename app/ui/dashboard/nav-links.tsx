'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Requerimiento', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Gestionar Requerimiento',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Selección', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Gestionar Selección', href: '/dashboard/gestionSeleccion', icon: UserGroupIcon },
  { name: 'Contratación', href: '/dashboard/contratacion', icon: UserGroupIcon },
  { name: 'Planta', href: '/dashboard/planta', icon: UserGroupIcon },
  { name: 'Configuración', href: '/dashboard/configuracion', icon: UserGroupIcon },
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
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
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
