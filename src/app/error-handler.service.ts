import { Injectable, ErrorHandler } from '@angular/core';
import { ErrorHelperService } from './error-handler/error-helper.service';
import { ErrorMessage } from 'src/api/entities/error-message.entity';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor(private errorHelperService: ErrorHelperService) { }
  handleError(error: any) {
    const errorMessage: ErrorMessage = this.errorHelperService.process(error);
    this.errorHelperService.showError(errorMessage);
  }
}

// import { Injectable, ErrorHandler } from '@angular/core';
// import { ErrorHelperService } from './error-handler/error-helper.service';
// import { ErrorMessage } from 'src/api/entities/error-message.entity';

// @Injectable()
// export class ErrorHandlerService implements ErrorHandler {

//   constructor(private errorHelperService: ErrorHelperService) { }
//   handleError(error: any) {
//     let errorMessage: ErrorMessage | any;

//     if (!error.title) {
//       errorMessage = this.errorHelperService.process(error);
//     } else {
//       errorMessage = error;
//     }

//     this.errorHelperService.showError(errorMessage);
//   }
// }
