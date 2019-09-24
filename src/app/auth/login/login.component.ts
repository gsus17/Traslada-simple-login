import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Login } from '../ngxs/auth.actions';
import { LoginRequest } from 'src/api/entities/login-request.entity';
import { Observable } from 'rxjs';

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

  // Convenience getter for easy access to form fields.
  get form() { return this.authForm.controls; }

  @Select(state => state.shared.progressLinear) progressLinear$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() { }

  /**
   * Auth process.
   */
  public login() {
    console.log(`${LoginComponent.name}::login`);
    const credentials = this.authForm.value;

    const loginRequest: LoginRequest = {
      username: credentials.user,
      password: credentials.password,
      client_id: 'traslada.operators',
      grant_type: 'password',
      scopes: 'null'
    };

    this.store.dispatch(new Login(loginRequest));
  }
}
