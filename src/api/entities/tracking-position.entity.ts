import { GpsPosition } from './gps-position.entity';
import { DriverStatus } from './driver-status.enum';

/**
 * Datos de un punto de rastreo de un portador y/o actividad.
 */
export interface TrackingPosition {

  // Fecha y hora del rastreo
  date: Date;

  // Fecha y hora de la llegada al servidor.
  serverDate: Date;

  // Estado del rastreo
  status: DriverStatus;

  // Identificador del portador (Ej: Id del Conductor)
  holderId: string;

  // Identificador de la actividad rastreada (Ej: Id del servicio de traslado)
  activityId: string;

  // Identificador del interesado de la actividad a filtrar (Ej: Id del Cliente)
  ownerId: string;

  // Posicion de GPS
  position: GpsPosition;
}
