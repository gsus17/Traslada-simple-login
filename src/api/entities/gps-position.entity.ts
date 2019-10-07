import { LatLng } from './lat-lng.entity';

/**
 * Posicion de GPS.

 */
export interface GpsPosition extends LatLng {

  // Precision del dato.
  accuracy: number;

  // Altura del punto.
  heading: number;

  // Velocidad con respecto al punto anterior.
  speed: number;
}
