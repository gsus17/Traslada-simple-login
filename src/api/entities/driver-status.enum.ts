/**
 * Estados de disponibilidad del conductor (como se ve en el mapa).
 * @export
 * @enum {string}
 */
// tslint:disable:no-any
export enum DriverStatus {

  // Desconectado. No se registran posiciones de GPS. Genera Checkout de asistencia.
  disconnected = <any>'Disconnected',

  // Conectado. Se registran posiciones de GPS. Genera Checkin de asistencia.
  connected = <any>'Connected',

  // Disponible en horario laboral para tomar servicios. Se registran posiciones de GPS
  available = <any>'Available',

  // Disponible dirigiéndose a base. Se registran posiciones de GPS.
  toBase = <any>'ToBase',

  // Disponible en base. Se registran posiciones de GPS.
  onBase = <any>'OnBase',

  // Con servicio de traslado en curso yendo al origen. Se registran posiciones de GPS.
  onTheWay = <any>'OnTheWay',

  // En puerta. Se registran posiciones de GPS.
  onDoor = <any>'OnDoor',

  // Circundando en puerta. Se registran posiciones de GPS.
  circling = <any>'Circling',

  // Anunciado en puerta al pasajero. Se registran posiciones de GPS.
  announced = <any>'Announced',

  // Posible NoShow (en proceso de contacto o esperando instrucciones de operaciones).
  noShowWarning = <any>'NoShowWarning',

  // Con pasajero a bordo. Se registran posiciones de GPS.
  withPax = <any>'WithPax',

  // Con pasajero (en espera). Se registran posiciones de GPS.
  withPaxWaiting = <any>'WithPaxWaiting',

  // Traslado realizado (liberado/disponible). Se registran posiciones de GPS.
  free = <any>'Free',

  // No disponible (problema técnico, etc.). Se registran posiciones de GPS.
  unavailable = <any>'Unavailable',

  // Estado desconocido.
  unknow = <any>'Unknow',

  // Estado desconocido.
  unknown = <any>'Unknown'
}
