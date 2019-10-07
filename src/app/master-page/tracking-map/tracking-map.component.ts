import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import * as Mousetrap from 'Mousetrap';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { mapStyle } from './map-style-config';
import { Store, Select } from '@ngxs/store';
import { TrackingGetBasesAction, TrackingGetPositionsAction } from './store/tracking-map.actions';
import { TrackingState } from './store/tracking-map.state';
import { Observable } from 'rxjs';
import { TrackingPosition } from 'src/api/entities/tracking-position.entity';
import { MarkerUI } from './entities/marker-ui';
import { DriverStatus } from 'src/api/entities/driver-status.enum';
import { TrackingManagerService } from './tracking-manager.service';


@Component({
  selector: 'app-tracking-map',
  templateUrl: './tracking-map.component.html',
  styleUrls: ['./tracking-map.component.scss']
})
export class TrackingMapComponent implements OnInit, OnDestroy {
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

  private markerUIList: MarkerUI = {};
  private trackingPositionsDataByFilterInterval: any = null;

  @Select(state => state.tracking.markerList) markerList$: Observable<MarkerUI>;

  constructor(
    private store: Store,
    private trackingManagerService: TrackingManagerService) {
  }

  ngOnInit() {
    this.windows = <any>window;
    this.map = new this.windows.google.maps.Map(document.getElementById('map'), this.getMapConfig());
    this.loadBases();
    this.listenMoustrapEvents();

    // // Inicializa el proceso de actualizacion de datos en el mapa.
    this.getTrackingPositionsDataByFilter();

    this.positionUpdateProcess();
  }

  ngOnDestroy(): void {
    clearInterval(this.trackingPositionsDataByFilterInterval);
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

  private positionUpdateProcess() {
    this.markerList$
      .subscribe((data: MarkerUI) => {
        const positions: TrackingPosition[] = this.store.selectSnapshot(TrackingState.positions);
        this.windows = <any>window;

        if (data) {
          Object.keys(data)
            .forEach((key) => {
              if (this.markerUIList[key] === undefined) {
                this.markerUIList[key] = data[key];
              }
              const hasMarker = this.markerUIList[key].marker !== null;
              const pos = positions.filter((x) => x.holderId === key)[0];
              const position = new this.windows.google.maps.LatLng(pos.position.lat, pos.position.lng);
              if (pos.position.lat && pos.position.lng) {
                if (hasMarker) {
                  // this.markerUIList[key].marker.setPosition(position);
                  this.animatedMove(
                    pos,
                    key,
                    0.5);
                } else {
                  const marker = new this.windows.google.maps.Marker({
                    position: new this.windows.google.maps.LatLng(pos.position.lat, pos.position.lng),
                    map: this.map,
                    icon: this.getIconMarker(pos)
                  });
                  this.markerUIList[key].marker = marker;
                }
              }
            });
        }
      });
  }

  private animatedMove(position: TrackingPosition, key: string, t: number): void {
    const current: any = new this.windows.google.maps.LatLng(
      this.markerUIList[key].marker.getPosition().lat(),
      this.markerUIList[key].marker.getPosition().lng());
    const moveTo: any = new this.windows.google.maps.LatLng(
      position.position.lat,
      position.position.lng);

    const deltalat: any = (moveTo.lat() - current.lat()) / 100;
    const deltalng: any = (moveTo.lng() - current.lng()) / 100;

    const delay: number = 100 * t;
    // tslint:disable-next-line:no-increment-decrement
    for (let i: number = 0; i < 100; i++) {
      setTimeout(
        () => {
          if (this.markerUIList[key] !== undefined && this.markerUIList[key].marker !== undefined) {
            let currentlat: number = this.markerUIList[key].marker.getPosition().lat();
            let currentlng: number = this.markerUIList[key].marker.getPosition().lng();
            currentlat += deltalat;
            currentlng += deltalng;
            const latlng: any = new this.windows.google.maps.LatLng(currentlat, currentlng);

            this.markerUIList[key].marker.setPosition(latlng);
          }
        },
        delay * i
      );
    }
  }

  private getIconMarker(trackingPosition: TrackingPosition, indicator: string = ''): string {
    const status: number = parseInt(<any>trackingPosition.status, 10);
    const holderStatus: DriverStatus = this.trackingManagerService.mapDriverStatusIdToDriverStatus(status);
    const icon: string = `assets/markers/${holderStatus}${indicator}.png`;

    return icon;
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
    this.trackingPositionsDataByFilterInterval = setInterval(
      () => {
        this.store.dispatch(new TrackingGetPositionsAction());
      },
      10 * 1000);
  }
}
