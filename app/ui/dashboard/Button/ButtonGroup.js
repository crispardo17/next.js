'use client';
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CustomButtonGra from './CustomButtonGra';
import CustomButtonGrande from './CustomButtonGrande';
import styles from './button.module.css';

// import CustomModal from '../Modal/CustomModal';
// import CustomModalAsignar from '../../../api/requerimiento/ModalAsignar/CustomModalAsignar';
// import CustomModalPoblar from '../../../api/gestionarRequerimientos/ModalPoblar/CustomModalPoblar';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);

const ButtonGroup = ({ page }) => {
  const buttonsToShow = getButtonsToShow(page);
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [modalAction, setModalAction] = useState('insertar');
  // const [modalType, setModalType] = useState(null);

  // const handleOpenModal = (type) => {
  //   setModalOpen(true);
  //   setModalType(type);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  //   setModalType(null);
  // };

  const handleFormSubmit = (formData) => {
    // Lógica para manejar los datos del formulario
    console.log('Datos del formulario:', formData);
  };

  const handleButtonClick = (buttonId) => {
    let targetUrl;

    switch (buttonId) {
      default:
        alert(`Botón clickeado: ${buttonId}`);
        return;

      case 'contratar':
      case 'gestionarReq':
      case 'anularReq':
      case 'cerrarReq':
        // handleSweetAlert(
        //   `¿Quieres ${buttonId
        //     .replace('Req', '')
        //     .toLowerCase()} el requerimiento?`,
        //   () => console.log(buttonId.replace('Req', '')),
        // );
        // return;

      ////////////////////////////////////////////////// Gestionar Requerimiento
      // case 'base':
      //   targetUrl = '/api/gestionarRequerimientos/base';
      //   break;

      ////////////////////////////////////////////////// Contratacion
      // case 'examen':
      //   targetUrl = '/api/contratacion/examen';
      //   break;

      // case 'generar':
      //   targetUrl = '/api/contratacion/generar';
      //   break;

      ////////////////////////////////////////////////// Configuracion
      // case 'usuarios':
      //   targetUrl = '/api/configuracion/usuarios';
      //   break;

      // case 'perfiles':
      //   targetUrl = '/api/configuracion/perfiles';
      //   break;

      // case 'cargo':
      //   targetUrl = '/api/configuracion/cargo';
      //   break;

      // case 'campana':
      //   targetUrl = '/api/configuracion/campana';
      //   break;

      ////////////////////////////////////////////////// Planta
      // case 'activo':
      //   targetUrl = '/api/planta/activo';
      //   break;

      // case 'inactivo':
      //   targetUrl = '/api/planta/inactivo';
      //   break;
    }

    handleRedirect(targetUrl);
  };

  // const handleSweetAlert = (title, onConfirm) => {
  //   MySwal.fire({
  //     title: title,
  //     icon: 'question',
  //     showCancelButton: true,
  //     confirmButtonText: 'Sí',
  //     cancelButtonText: 'Cancelar',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       onConfirm();
  //     }
  //   });
  // };

  const handleRedirect = (targetUrl) => {
    window.location = targetUrl;
  };

  return (
    <div className={styles.divBtn}>
      {/* botones Requerimientos */}

      {buttonsToShow.includes('insertarReq') && (
        <CustomButton onClick={() => handleOpenModal('insertarReq')}>
          Insertar
        </CustomButton>
      )}
      {buttonsToShow.includes('modificarReq') && (
        <CustomButton onClick={() => handleOpenModal('modificarReq')}>
          Modificar
        </CustomButton>
      )}
      {buttonsToShow.includes('verReq') && (
        <CustomButton onClick={() => handleOpenModal('verReq')}>
          Ver
        </CustomButton>
      )}
      {buttonsToShow.includes('asignarReq') && (
        <CustomButton onClick={() => handleOpenModal('asignarReq')}>
          Asignar
        </CustomButton>
      )}
      {buttonsToShow.includes('anularReq') && (
        <CustomButton onClick={() => handleButtonClick('anularReq')}>
          Anular
        </CustomButton>
      )}
      {buttonsToShow.includes('gestionarReq') && (
        <CustomButton onClick={() => handleButtonClick('gestionarReq')}>
          Gestionar
        </CustomButton>
      )}

      {/* botones Gestionar Requerimientos */}

      {buttonsToShow.includes('poblar') && (
        <CustomButton onClick={() => handleOpenModal('poblar')}>
          Poblar
        </CustomButton>
      )}
      {buttonsToShow.includes('base') && (
        <CustomButton onClick={() => handleButtonClick('base')}>
          Base
        </CustomButton>
      )}
      {buttonsToShow.includes('cerrarReq') && (
        <CustomButtonGrande onClick={() => handleButtonClick('cerrarReq')}>
          Cerrar Requerimiento
        </CustomButtonGrande>
      )}
      {buttonsToShow.includes('kpi') && (
        <CustomButton onClick={() => handleButtonClick('kpi')}>
          Kpi
        </CustomButton>
      )}

      {/* botones Gestionar Requerimientos ---------> Base */}

      {buttonsToShow.includes('insertBase') && (
        <CustomButton onClick={() => handleButtonClick('insertBase')}>
          Insertar
        </CustomButton>
      )}
      {buttonsToShow.includes('modificarBase') && (
        <CustomButton onClick={() => handleButtonClick('modificarBase')}>
          Modificar
        </CustomButton>
      )}
      {buttonsToShow.includes('verBase') && (
        <CustomButton onClick={() => handleButtonClick('verBase')}>
          Ver
        </CustomButton>
      )}

      {/* botones Seleccion */}

      {buttonsToShow.includes('perfilCargo') && (
        <CustomButtonGra onClick={() => handleButtonClick('perfilCargo')}>
          Perfil Cargo
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('descartar') && (
        <CustomButton onClick={() => handleButtonClick('descartar')}>
          Descartar
        </CustomButton>
      )}
      {buttonsToShow.includes('gestionarSel') && (
        <CustomButton onClick={() => handleButtonClick('gestionarSel')}>
          Gestionar
        </CustomButton>
      )}


      {/* botones Gestionar Seleccion */}

      {buttonsToShow.includes('contacto') && (
        <CustomButton onClick={() => handleButtonClick('contacto')}>
          Contacto
        </CustomButton>
      )}
      {buttonsToShow.includes('citaciones') && (
        <CustomButton onClick={() => handleButtonClick('citaciones')}>
          Citaciones
        </CustomButton>
      )}
      {buttonsToShow.includes('entrevista') && (
        <CustomButton onClick={() => handleButtonClick('entrevista')}>
          Entrevista
        </CustomButton>
      )}
      {buttonsToShow.includes('referenciacion') && (
        <CustomButtonGra onClick={() => handleButtonClick('referenciacion')}>
          Referenciación
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('expLaboral') && (
        <CustomButtonGrande onClick={() => handleButtonClick('expLaboral')}>
          Experiencia Laboral
        </CustomButtonGrande>
      )}

      {/* botones Contratacion */}

      {buttonsToShow.includes('examen') && (
        <CustomButtonGra onClick={() => handleButtonClick('examen')}>
          Examen Medico
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('afiliacion') && (
        <CustomButton onClick={() => handleButtonClick('afiliacion')}>
          Afiliaciones
        </CustomButton>
      )}
      {buttonsToShow.includes('documento') && (
        <CustomButton onClick={() => handleButtonClick('documento')}>
          Documento
        </CustomButton>
      )}
      {buttonsToShow.includes('seguridad') && (
        <CustomButtonGra onClick={() => handleButtonClick('seguridad')}>
          Seguridad Social
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('contrato') && (
        <CustomButton onClick={() => handleButtonClick('contrato')}>
          Contrato
        </CustomButton>
      )}
      {buttonsToShow.includes('generar') && (
        <CustomButton onClick={() => handleButtonClick('generar')}>
          Generar
        </CustomButton>
      )}
      {buttonsToShow.includes('verCont') && (
        <CustomButton onClick={() => handleButtonClick('verCont')}>
          Ver
        </CustomButton>
      )}
      {buttonsToShow.includes('finalizar') && (
        <CustomButtonGra onClick={() => handleButtonClick('finalizar')}>
          Finalizar Proceso
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('contratar') && (
        <CustomButton onClick={() => handleButtonClick('contratar')}>
          Contratar
        </CustomButton>
      )}

      {/* botones Examenes Medicos */}

      {buttonsToShow.includes('insExamen') && (
        <CustomButton onClick={() => handleButtonClick('insExamen')}>
          Insertar
        </CustomButton>
      )}
      {buttonsToShow.includes('resultado') && (
        <CustomButton onClick={() => handleButtonClick('resultado')}>
          Resultado
        </CustomButton>
      )}

      {/* botones Generar */}

      {buttonsToShow.includes('verGenerar') && (
        <CustomButton onClick={() => handleButtonClick('verGenerar')}>
          Ver
        </CustomButton>
      )}
      {buttonsToShow.includes('genGenerar') && (
        <CustomButton onClick={() => handleButtonClick('genGenerar')}>
          Generar
        </CustomButton>
      )}

      {/* botones Planta */}

      {buttonsToShow.includes('activo') && (
        <CustomButton onClick={() => handleButtonClick('activo')}>
          Activo
        </CustomButton>
      )}
      {buttonsToShow.includes('inactivo') && (
        <CustomButton onClick={() => handleButtonClick('inactivo')}>
          Inactivo
        </CustomButton>
      )}

      {/* botones Activos */}

      {buttonsToShow.includes('actActivo') && (
        <CustomButton onClick={() => handleButtonClick('actActivo')}>
          Actualizar
        </CustomButton>
      )}
      {buttonsToShow.includes('verActivo') && (
        <CustomButton onClick={() => handleButtonClick('verActivo')}>
          Ver
        </CustomButton>
      )}
      {buttonsToShow.includes('cesPatronal') && (
        <CustomButtonGra onClick={() => handleButtonClick('cesPatronal')}>
          Cesion Patronal
        </CustomButtonGra>
      )}

      {/* botones Inactivos */}

      {buttonsToShow.includes('verInactivo') && (
        <CustomButton onClick={() => handleButtonClick('verInactivo')}>
          Ver
        </CustomButton>
      )}

      {/* botones Configuracion */}

      {buttonsToShow.includes('campana') && (
        <CustomButton onClick={() => handleButtonClick('campana')}>
          Campaña
        </CustomButton>
      )}
      {buttonsToShow.includes('cargo') && (
        <CustomButton onClick={() => handleButtonClick('cargo')}>
          Cargo
        </CustomButton>
      )}
      {buttonsToShow.includes('perfilCargoCon') && (
        <CustomButtonGra onClick={() => handleButtonClick('perfilCargoCon')}>
          Perfil Cargo
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('usuarios') && (
        <CustomButton onClick={() => handleButtonClick('usuarios')}>
          Usuarios
        </CustomButton>
      )}
      {buttonsToShow.includes('perfiles') && (
        <CustomButton onClick={() => handleButtonClick('perfiles')}>
          Perfiles
        </CustomButton>
      )}

      {/* botones Usuarios */}

      {buttonsToShow.includes('crearUsuario') && (
        <CustomButtonGra onClick={() => handleButtonClick('crearUsuario')}>
          Crear Usuario
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('editUsuario') && (
        <CustomButtonGra onClick={() => handleButtonClick('editUsuario')}>
          Editar Usuario
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('verUsuario') && (
        <CustomButtonGra onClick={() => handleButtonClick('verUsuario')}>
          Ver Usuario
        </CustomButtonGra>
      )}

      {/* botones Perfiles */}

      {buttonsToShow.includes('crearPerfil') && (
        <CustomButtonGra onClick={() => handleButtonClick('crearPerfil')}>
          Crear Perfil
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('editPerfil') && (
        <CustomButtonGra onClick={() => handleButtonClick('editPerfil')}>
          Editar Perfil
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('verPerfil') && (
        <CustomButtonGra onClick={() => handleButtonClick('verPerfil')}>
          Ver Perfil
        </CustomButtonGra>
      )}

      {/* botones campaña */}

      {buttonsToShow.includes('crearCampana') && (
        <CustomButtonGra onClick={() => handleButtonClick('crearCampana')}>
          Crear Campaña
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('editCampana') && (
        <CustomButtonGra onClick={() => handleButtonClick('editCampana')}>
          Editar Campaña
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('verCampana') && (
        <CustomButtonGra onClick={() => handleButtonClick('verCampana')}>
          Ver Campaña
        </CustomButtonGra>
      )}

      {/* botones cargo */}

      {buttonsToShow.includes('crearCargo') && (
        <CustomButtonGra onClick={() => handleButtonClick('crearCargo')}>
          Crear Cargo
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('editCargo') && (
        <CustomButtonGra onClick={() => handleButtonClick('editCargo')}>
          Editar Cargo
        </CustomButtonGra>
      )}
      {buttonsToShow.includes('verCargo') && (
        <CustomButtonGra onClick={() => handleButtonClick('verCargo')}>
          Ver Cargo
        </CustomButtonGra>
      )}

      {/* Modalesss*/}

      {/* <CustomModal
        open={isModalOpen && modalType === 'insertarReq'}
        onClose={handleCloseModal}
        title="Formulario"
        onSubmit={handleFormSubmit}
      />
      <CustomModalAsignar
        open={isModalOpen && modalType === 'asignarReq'}
        onClose={handleCloseModal}
        title="Formulario"
        onSubmit={handleFormSubmit}
      />
      <CustomModalPoblar
        open={isModalOpen && modalType === 'poblar'}
        onClose={handleCloseModal}
        title="Poblar"
        onSubmit={handleFormSubmit}
      /> */}
    </div>
  );
};

const pageButtons = {
  //Botones Requerimientos//

  requerimiento: [
    'insertarReq',
    'modificarReq',
    'verReq',
    'asignarReq',
    'anularReq',
    'gestionarReq',
  ],

  //Botones Gestionar Requerimientos//

  gestionRequerimiento: ['poblar', 'base', 'cerrarReq', 'kpi'],

  //Boton Base//

  base: ['insertBase', 'modificarBase', 'verBase'],

  //Botones Selección//

  seleccion: ['descartar', 'perfilCargo', 'gestionarSel'],

  //Botones Gestionar Selección//

  gestionSeleccion: ['contacto', 'citaciones', 'entrevista', 'referenciacion', 'expLaboral'],

  //Botones contratación//

  contratacion: [
    'examen',
    'afiliacion',
    'documento',
    'seguridad',
    'contrato',
    'contratar',
    'generar',
    'verCont',
    'finalizar',
  ],

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

export default ButtonGroup;
