import { Component, OnInit, ViewChild } from '@angular/core';
import * as Mousetrap from 'Mousetrap';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-tracking-map',
  templateUrl: './tracking-map.component.html',
  styleUrls: ['./tracking-map.component.sass']
})
export class TrackingMapComponent implements OnInit {
  @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;

  /**
   * Toggle assistant sidebar flag.
   */
  public openAssistantSidebar: boolean;

  /**
   * Toggle message sidebar flag.
   */
  public openMessageSidebar: boolean;
  constructor() {
  }

  ngOnInit() {
    const windows: any = <any>window;
    const map = new windows.google.maps.Map(document.getElementById('map'), this.getMapConfig());
    this.listenMoustrapEvents();
  }

  private getMapConfig() {
    return {
      zoom: 4,
      styles: this.getMapStyle(),
      center: this.getDefaultCoords(),
    };
  }

  /**
   * Devuelve la configuracion de los estilos del mapa.
   */
  private getMapStyle(): Object[] {
    const mapStyle: Object[] = [
      {
      },
      {
        featureType: 'transit.station.airport',
        stylers: [
          {
            visibility: 'on'
          }]
      },
      // Https://developers.google.com/maps/documentation/javascript/styling?hl=es-419
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.park',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      }
    ];

    return mapStyle;
  }

  private getDefaultCoords(): any {
    const ret: any = { lat: -34.595398, lng: -58.383452 };
    return ret;
  }

  /**
   * Init listener of mousetrap.
   */
  private listenMoustrapEvents() {

    Mousetrap.bind('a', () => {
      this.openAssistantSidebar = !this.openAssistantSidebar;
    }, 'keyup');

    Mousetrap.bind('m', () => {
      this.openMessageSidebar = !this.openMessageSidebar;
    }, 'keyup');
  }
}
