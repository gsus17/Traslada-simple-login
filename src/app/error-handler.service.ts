import { Injectable, ErrorHandler } from '@angular/core';
import { ErrorHelperService } from './error-handler/error-helper.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusMessage } from 'src/api/entities/status-message';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor(private errorHelperService: ErrorHelperService) { }
  handleError(error: any) {

    const statusMessage: StatusMessage = error instanceof HttpErrorResponse ?
      error.error : this.errorHelperService.processPosibleRuntimeException(error);

    if (statusMessage && statusMessage.uiErrorMessage === undefined) {
      this.errorHelperService.process(statusMessage);
    }

    this.errorHelperService.showError(statusMessage.uiErrorMessage);
  }
}
