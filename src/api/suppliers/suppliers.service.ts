import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

    const url = `https://suppliers.${environment.api_domain}/bases`;

    return this.httpClient.get<any[]>(url);
  }
}
