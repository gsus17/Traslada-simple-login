import { Component, OnInit, ViewChild } from '@angular/core';
import * as Mousetrap from 'Mousetrap';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { mapStyle } from './map-style-config';
import { Store } from '@ngxs/store';
import { TrackingGetBasesAction, TrackingGetPositionsAction } from './store/tracking-map.actions';
import { TrackingState } from './store/tracking-map.state';


@Component({
  selector: 'app-tracking-map',
  templateUrl: './tracking-map.component.html',
  styleUrls: ['./tracking-map.component.scss']
})
export class TrackingMapComponent implements OnInit {
  @ViewChild(MatSidenavContainer, null) sidenavContainer: MatSidenavContainer;

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

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.windows = <any>window;
    this.map = new this.windows.google.maps.Map(document.getElementById('map'), this.getMapConfig());
    this.loadBases();
    this.listenMoustrapEvents();

    // // Inicializa el proceso de actualizacion de datos en el mapa.
    this.getTrackingPositionsDataByFilter();
  }

  private getMapConfig() {
    return {
      zoom: 16,
      styles: mapStyle,
      center: this.getDefaultCoords(),
      control: {}
    };
  }

  /**
   * Realiza la peticion de bases.
   */
  private loadBases(): void {
    const methodName: string = `${TrackingMapComponent.name}::loadBases`;
    console.log(`${methodName}`);

    this.store.dispatch(new TrackingGetBasesAction())
      .toPromise()
      .then(() => {
        const bases: any[] = this.store.selectSnapshot(TrackingState.basesList);
        this.renderBasesOnMap(bases);
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
    Mousetrap
      .bind('a', () => { this.openAssistantSidebar = !this.openAssistantSidebar; }, 'keyup');

    Mousetrap
      .bind('m', () => { this.openMessageSidebar = !this.openMessageSidebar; }, 'keyup');
  }

  private getTrackingPositionsDataByFilter(): any {
    this.store.dispatch(new TrackingGetPositionsAction());
  }
}
