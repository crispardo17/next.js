'use client';
// Importa las dependencias necesarias
import React from 'react';
import { Calendar, momentLocalizer, } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';

// Configura el localizador de fechas para React Big Calendar
const localizer = momentLocalizer(moment);

export default class DemoApp extends React.Component {
  render() {
    // Ejemplo de eventos
    const events = [
      {
        title: 'Evento 1',
        start: new Date(2024, 1, 1),
        end: new Date(2024, 1, 3),
      },
      {
        title: 'Evento 2',
        start: new Date(2024, 1, 5),
        end: new Date(2024, 1, 7),
      },
    ];

    return (
      <div >
        {/* Renderiza el calendario */}
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: '10px' }}
        />
      </div>
    );
  }
}