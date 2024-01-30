import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';


export default function NavBar() {
  return (
    <div className="flex w-full flex-row px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
    </div>
  );
}