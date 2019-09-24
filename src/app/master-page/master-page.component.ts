import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from '../auth/ngxs/auth.actions';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  /**
   * Logout.
   */
  public logout() {
    console.log(`${MasterPageComponent.name}::logout`);
    this.store.dispatch(new Logout());
  }
}
