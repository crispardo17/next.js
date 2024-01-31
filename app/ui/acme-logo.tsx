import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
            src="/assets/logos/humaLogo.png"
            width={150}
            height={100}
            className="hidden md:block"
            alt="Humanovus logo"
          />
    </div>
  );
}
