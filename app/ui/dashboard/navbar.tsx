import AcmeLogo from '@/app/ui/acme-logo';


export default function NavBar() {
  return (
    <div className="md:h-15 flex items-center  h-20 shrink-0  rounded-lg p-4 bg-cover bg-center "style={{backgroundImage: "url('/assets/bg/bglogohumanovus.png')"}}>
        <AcmeLogo />
      </div>
  );
}