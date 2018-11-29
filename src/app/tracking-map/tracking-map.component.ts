import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-map',
  templateUrl: './tracking-map.component.html',
  styleUrls: ['./tracking-map.component.sass']
})
export class TrackingMapComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: { lat: -25.344, lng: 131.036 } });
  }

}
