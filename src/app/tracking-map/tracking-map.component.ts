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
    const map = new windows.google.maps.Map(document.getElementById('map'), { zoom: 4, center: { lat: -25.344, lng: 131.036 } });
    this.listenMoustrapEvents();
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
