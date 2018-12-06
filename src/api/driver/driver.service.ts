import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Returns an attendance list.
   */
  public getOperativeAttendance$(): Observable<any[]> {
    console.log(`${DriverApiService.name}::getOperativeAttendance`);

    const url = 'https://suppliers.apolloteam.com.ar/drivers/operativeAttendance';

    return this.httpClient.get<any[]>(url, { params: { 'date': '2018-08-15' } });
  }
}
