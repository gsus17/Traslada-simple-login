import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TrackingApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Obtiene las bases de habilitadas del sistema.
   */
  public getTrackingPositionsDataByFilter(filter): Observable<any[]> {
    console.log(`${TrackingApiService.name}::getTrackingPositionsDataByFilter`);

    const url = `https://tracking.${environment.api_domain}/trackingpositions/data/filter`;

    return this.httpClient.post<any[]>(url, filter);
  }
}
