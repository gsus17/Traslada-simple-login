import { Injectable } from '@angular/core';
import { DriverStatus } from 'src/api/entities/driver-status.enum';
import { DriverStatusId } from 'src/api/entities/driver-status-id.enum';

@Injectable({
  providedIn: 'root'
})
export class TrackingManagerService {

  constructor() { }

  /**
   * Mapea del tipo de dato DriverStatusId a DriverStatus.
   */
  public mapDriverStatusIdToDriverStatus(value: DriverStatusId): DriverStatus {
    let ret: DriverStatus;
    value = parseInt(<any>value, 10);
    switch (value) {
      case DriverStatusId.announced:
        ret = DriverStatus.announced;
        break;
      case DriverStatusId.available:
        ret = DriverStatus.available;
        break;
      case DriverStatusId.circling:
        ret = DriverStatus.circling;
        break;
      case DriverStatusId.connected:
        ret = DriverStatus.connected;
        break;
      case DriverStatusId.disconnected:
        ret = DriverStatus.disconnected;
        break;
      case DriverStatusId.free:
        ret = DriverStatus.free;
        break;
      case DriverStatusId.onBase:
        ret = DriverStatus.onBase;
        break;
      case DriverStatusId.onDoor:
        ret = DriverStatus.onDoor;
        break;
      case DriverStatusId.onTheWay:
        ret = DriverStatus.onTheWay;
        break;
      case DriverStatusId.toBase:
        ret = DriverStatus.toBase;
        break;
      case DriverStatusId.unavailable:
        ret = DriverStatus.unavailable;
        break;
      case DriverStatusId.noShowWarning:
        ret = DriverStatus.noShowWarning;
        break;
      case DriverStatusId.withPax:
        ret = DriverStatus.withPax;
        break;
      case DriverStatusId.withPaxWaiting:
        ret = DriverStatus.withPaxWaiting;
        break;
      case DriverStatusId.unknown:
        ret = DriverStatus.unknown;
        break;

      default:
        ret = DriverStatus.unknown;
        break;
    }
    return ret;
  }
}
