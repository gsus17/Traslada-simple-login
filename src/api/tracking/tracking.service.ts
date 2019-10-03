import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    const url = 'https://tracking.zwitcher.com/trackingpositions/data/filter';

    return this.httpClient.post<any[]>(url, filter);
  }
}
