import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverApiService } from 'src/api/driver/driver.service';
import { map, tap, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DriverAttendanceService {

  constructor(private driverApiService: DriverApiService) { }

  public getOperativeAttendance$(): Observable<any> {
    const methodName: string = `${DriverAttendanceService.name}::getOperativeAttendance`;
    console.log(`${methodName}`);

    return this.driverApiService.getOperativeAttendance$()
      .pipe(
        tap((resp) => console.log(`${methodName}:: resp: %o`, resp))
      );
  }
}
