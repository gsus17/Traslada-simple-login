import { Component, OnInit, ViewChild } from '@angular/core';
import * as Mousetrap from 'Mousetrap';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { TrackingMapService } from './tracking-map.service';

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

  /**
   * Map reference.
   */
  private map;

  /**
   * Windows reference.
   */
  private windows: any;

  constructor(private trackingMapService: TrackingMapService) {
  }

  ngOnInit() {
    this.windows = <any>window;
    this.map = new this.windows.google.maps.Map(document.getElementById('map'), this.getMapConfig());
    this.loadBases();
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


  /**
   * Realiza la peticion de bases.
   */
  private loadBases(): void {
    const methodName: string = `${TrackingMapComponent.name}::loadBases`;
    console.log(`${methodName}`);

    this.trackingMapService.getBases()
      .then((baseList: any[]) => {

        // Dibuja las bases en el mapa.
        this.renderBasesOnMap(baseList);
      })
      .catch(() => {
      });
  }

  /**
   * Renderiza o elimina las bases en el mapa.
   */
  private renderBasesOnMap(baseList: any[]): void {
    baseList
      .forEach((base: any) => {

        const map = this.map;
        const circleOptions = {
          strokeOpacity: 0,
          strokeColor: 'green',
          strokeWeight: 0.5,
          fillColor: '#AC58FA',
          fillOpacity: 0.3,
          center: base.latLng,
          // tslint:disable-next-line:radix
          radius: parseInt(base.contactRadius),
          clickable: false,
          map: map,
          draggable: false,
          visible: true
        };

        base.circle = new this.windows.google.maps.Circle(circleOptions);
      });
  }

  /**
   * Devuelve las coordenadas por default.
   */
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
