'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  //Pagina Requerimientos
  { name: 'Insertar', id: 'insertarReq', href: '/dashboard/invoices/create' },
  { name: 'Modificar', id: 'modificarReq', href: '/dashboard' },
  { name: 'Ver', id: 'verReq', href: '/dashboard' },
  { name: 'Asignar', id: 'asignarReq', href: '/dashboard' },
  { name: 'Anular', id: 'anularReq', href: '/dashboard' },
  { name: 'Gestionar', id: 'gestionarReq', href: '/dashboard' },
  //Pagina Gestionar Requerimientos
  { name: 'Poblar', id: 'poblar', href: '/dashboard' },
  { name: 'Base', id: 'base', href: '/dashboard' },
  { name: 'Cerrar Requerimiento', id: 'cerrarReq', href: '/dashboard' },
  { name: 'Kpi', id: 'kpi', href: '/dashboard' },
  //Pagina base
  // { name: 'Insertar', id: 'insertBase', href: '/dashboard' },
  // { name: 'Modificar', id: 'modificarBase', href: '/dashboard' },
  // { name: 'Ver', id: 'verBase', href: '/dashboard' },
  //Pagina Seleccion
  { name: 'Descartar', id: 'descartar', href: '/dashboard' },
  { name: 'Perfil Cargo', id: 'perfilCargoSel', href: '/dashboard' },
  { name: 'Gestionar', id: 'gestionarSel', href: '/dashboard' },
  //Pagina Gestion Seleccion
  { name: 'Contacto', id: 'contacto', href: '/dashboard' },
  { name: 'Citaciones', id: 'citaciones', href: '/dashboard' },
  { name: 'Entrevista', id: 'entrevista', href: '/dashboard' },
  { name: 'Referenciacion', id: 'referenciacion', href: '/dashboard' },
  { name: 'Exp. Laboral', id: 'expLaboral', href: '/dashboard' },
  //Pagina Contratacion
  { name: 'Examen Medico', id: 'examen', href: '/dashboard' },
  { name: 'Afiliacion', id: 'afiliacion', href: '/dashboard' },
  { name: 'Documento', id: 'documento', href: '/dashboard' },
  { name: 'Seguridad', id: 'seguridad', href: '/dashboard' },
  { name: 'Contrato', id: 'contrato', href: '/dashboard' },
  { name: 'Contratar', id: 'contratar', href: '/dashboard' },
  { name: 'Generar', id: 'generar', href: '/dashboard' },
  { name: 'Ver Contrato', id: 'verCont', href: '/dashboard' },
  { name: 'Finalizar', id: 'finalizar', href: '/dashboard' },
  // //Pagina Examenes Medicos
  // { name: 'Insertar', id: 'insExamen', href: '/dashboard' },
  // { name: 'Resultado', id: 'resultado', href: '/dashboard' },
  //Pagina Generar
  // { name: 'Ver', id: 'verGenerar', href: '/dashboard' },
  // { name: 'Generar', id: 'genGenerar', href: '/dashboard' },
  //Pagina Planta
  { name: 'Activo', id: 'activo', href: '/dashboard' },
  { name: 'Inactivo', id: 'inactivo', href: '/dashboard' },
  //Pagina Planta Activo
  // { name: 'Activo', id: 'actActivo', href: '/dashboard' },
  // { name: 'Inactivo', id: 'actActivo', href: '/dashboard' },
  // { name: 'Cesion Patronal', id: 'cesPatronal', href: '/dashboard' },
  //Pagina Planta inaActivo
  { name: 'Inactivo', id: 'verInactivo', href: '/dashboard' },
  //Pagina configuracion
  { name: 'Campaña', id: 'campana', href: '/dashboard/configuracion/campanas' },
  { name: 'Cargo', id: 'cargo', href: '/dashboard/configuracion/cargos' },
  { name: 'Perfil Cargo', id: 'perfilCargoCon', href: '/dashboard' },
  { name: 'Usuarios', id: 'usuarios', href: '/dashboard' },
  { name: 'Perfiles', id: 'perfiles', href: '/dashboard' },
  //Pagina configuracion / usuario
  // { name: 'Crear', id: 'crearUsuario', href: '/dashboard' },
  // { name: 'Editar', id: 'editUsuario', href: '/dashboard' },
  // { name: 'Ver', id: 'verUsuario', href: '/dashboard' },
  //Pagina configuracion / perfil
  // { name: 'Crear', id: 'crearPerfil', href: '/dashboard' },
  // { name: 'Editar', id: 'editPerfil', href: '/dashboard' },
  // { name: 'Ver', id: 'verPerfil', href: '/dashboard' },
  //Pagina configuracion / campaña
  // { name: 'Crear', id: 'crearCampana', href: '/dashboard' },
  // { name: 'Editar', id: 'editCampana', href: '/dashboard' },
  // { name: 'Ver', id: 'verCampana', href: '/dashboard' },
  //Pagina configuracion / cargo
  // { name: 'Crear', id: 'crearCargo', href: '/dashboard' },
  // { name: 'Editar', id: 'editCargo', href: '/dashboard' },
  // { name: 'Ver', id: 'verCargo', href: '/dashboard' },
  
];

const pageButtons = {
  //Botones Requerimientos//
  requerimiento: ['insertarReq','modificarReq','verReq','asignarReq','anularReq','gestionarReq'],
  //Botones Gestionar Requerimientos//
  invoices: ['poblar', 'base', 'cerrarReq', 'kpi'],
  //Boton Base//
  base: ['insertBase', 'modificarBase', 'verBase'],
  //Botones Selección//
  customers: ['descartar', 'perfilCargoSel', 'gestionarSel'],
  //Botones Gestionar Selección//
  gestionSeleccion: ['contacto', 'citaciones', 'entrevista', 'referenciacion', 'expLaboral'],
  //Botones contratación//
  contratacion: ['examen','afiliacion','documento','seguridad','contrato','contratar','generar','verCont','finalizar'],
  //Botones Examen Medico//
  examen: ['insExamen', 'resultado'],
  //Botones Generar//
  generar: ['verGenerar', 'genGenerar'],
  //Botones Planta//
  planta: ['activo', 'inactivo'],
  //Botones Activo//
  activo: ['actActivo', 'verActivo', 'cesPatronal'],
  //Botones Inactivo//
  inactivo: ['verInactivo'],
  //Botones configuracion//
  configuracion: ['campana', 'cargo', 'perfilCargoCon', 'usuarios', 'perfiles'],
  //Botones Usuario//
  usuario: ['crearUsuario', 'editUsuario', 'verUsuario'],
  //Botones perfiles//
  perfiles: ['crearPerfil', 'editPerfil', 'verPerfil'],
  //Botones campaña//
  campana: ['crearCampana', 'editCampana', 'verCampana'],
  //Botones cargo//
  cargo: ['crearCargo', 'editCargo', 'verCargo'],
};


const getButtonsToShow = (page) => {
  return pageButtons[page] || [];
};

export default function NavLinks() {
  const pathname = usePathname();
  const currentPage = pathname.split('/')[2]; 
  const currentPageButtons = getButtonsToShow(currentPage);

  return (
    <>
      <div className='flex flex-row'>
        {links.map((link) => {
          return (
            currentPageButtons.includes(link.id) && (
              <Link
                key={link.name}
                href={link.href}
                passHref
                className={clsx(
                  'flex grow items-center min-w-200 justify-center gap-2 rounded-md border-blue-900 bg-blue-900 p-3 text-sm font-medium text-white hover:border-2 hover:bg-white hover:text-blue-900 md:flex-none md:justify-start md:p-2 md:px-3 mx-1',
                )}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            )
          );
        })}
      </div>
    </>
  );
}
