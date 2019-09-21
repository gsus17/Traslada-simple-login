import { Injectable } from '@angular/core';
import { SuppliersApiService } from 'src/api/suppliers/suppliers.service';

@Injectable({
  providedIn: 'root'
})
export class TrackingMapService {

  constructor(private suppliersApiService: SuppliersApiService) { }

  /**
   * Obtiene las bases habilitadas del sistema.
   */
  public getBases() {
    return this.suppliersApiService.getBases();
  }
}
