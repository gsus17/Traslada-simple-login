import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth/login/login.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.sass']
})
export class MasterPageComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  /**
   * Logout.
   */
  public logout() {
    console.log(`${MasterPageComponent.name}::logout`);
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
