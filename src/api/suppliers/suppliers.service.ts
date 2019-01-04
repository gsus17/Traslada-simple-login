import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuppliersApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Obtiene las bases de habilitadas del sistema.
   */
  public getBases(): Promise<any[]> {
    console.log(`${SuppliersApiService.name}::getOperativeAttendance`);

    const url = 'https://suppliers.apolloteam.com.ar/bases';

    return this.httpClient.get<any[]>(url).toPromise();
  }
}
