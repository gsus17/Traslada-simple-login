import { Component, OnInit } from '@angular/core';
import { Credentials } from './login.interfaces';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Validation Form control.
   */
  public authForm = new FormGroup(
    {
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  );

  /**
   * Progress linear to loading process.
   */
  public progressLinear: boolean = false;

  // Convenience getter for easy access to form fields.
  get form() { return this.authForm.controls; }

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {}

  /**
   * Auth process.
   */
  public login() {
    console.log(`${LoginComponent.name}::login`);
    this.progressLinear = true;
    const credentials = this.authForm.value;
    this.loginService.login(credentials)
      .then(() => {
        console.log(`${LoginComponent.name}::login (then)`);
        this.redirect();
      })
      .catch((error) => {
        console.log(`${LoginComponent.name}::login (catch) %o`, error);
      })
      .finally(() => {
        this.progressLinear = false;
      });
  }

  /**
   * Redirect to main view.
   */
  public redirect() {
    this.router.navigate(['master-page/tracking']);
  }
}
