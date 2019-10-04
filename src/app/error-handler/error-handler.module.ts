import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorService } from './error-interceptor.service';
import { ErrorHelperService } from './error-helper.service';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorMessageModalComponent } from './error-message-modal/error-message-modal.component';
import { ErrorHandlerService } from '../error-handler.service';
import { AngularMaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ErrorMessageModalComponent],
  entryComponents: [
    ErrorMessageModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    AngularMaterialModule
  ],
  providers: [
    ErrorHelperService,
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ]
})
export class ErrorHandlerModule { }
