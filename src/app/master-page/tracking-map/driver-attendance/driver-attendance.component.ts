import { Component, OnInit } from '@angular/core';
import { DriverAttendanceService } from './driver-attendance.service';

@Component({
  selector: 'app-driver-attendance',
  templateUrl: './driver-attendance.component.html',
  styleUrls: ['./driver-attendance.component.scss']
})
export class DriverAttendanceComponent implements OnInit {

  /**
   * Attendance list.
   */
  public attendanceList: any[] = [];

  constructor(private driverAttendanceService: DriverAttendanceService) { }

  ngOnInit() {

    // this.driverAttendanceService.getOperativeAttendance$()
    //   .subscribe((data) => {
    //     console.log(`${DriverAttendanceComponent.name} response: %o`, data);
    //     this.attendanceList = [...data];
    //   });
  }

}
