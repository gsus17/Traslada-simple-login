import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliersApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Obtiene las bases de habilitadas del sistema.
   */
  public getBases(): Observable<any[]> {
    console.log(`${SuppliersApiService.name}::getOperativeAttendance`);

    const url = 'https://suppliers.zwitcher.com/bases';

    return this.httpClient.get<any[]>(url);
  }
}
