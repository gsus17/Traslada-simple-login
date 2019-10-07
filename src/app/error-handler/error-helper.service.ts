import { Injectable, NgZone } from '@angular/core';
import { ErrorMessage } from '../../api/entities/error-message.entity';
import { ErrorCodes } from '../../api/entities/error-codes.enum';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorMessageModalComponent } from './error-message-modal/error-message-modal.component';
import { StatusMessage } from 'src/api/entities/status-message';

@Injectable()
export class ErrorHelperService {

  constructor(
    private translateService: TranslateService,
    private dialog: MatDialog,
    private ngZone: NgZone) { }

  public process(statusMessage: StatusMessage): ErrorMessage {
    let titleKey: string = null;
    let messageKey: string = null;
    const interpolationParams: Object = {};
    const objectType = 'object';
    let errorMessage: ErrorMessage = null;
    if (objectType === typeof statusMessage) {
      // tslint:disable-next-line:no-any
      switch (<any>statusMessage.errorCode) {
        case ErrorCodes.ErrUserCancel:
        case 'ERR.GP':
        case 'ERR.GP.INVALID_REQUEST':
        case 'ERR.GP.OVER_QUERY_LIMIT':
        case 'ERR.GP.REQUEST_DENIED':
        case 'ERR.GP.UNKNOWN_ERROR':
        case 'ERR.GP.ZERO_RESULTS':
          break;

        case ErrorCodes.ErrNoResponseFromApi:
          titleKey = 'GENERAL.ERROR_TITLE';
          messageKey = 'ERROR_NORESPONSEFROMAPI_MESSAGE';
          break;

        case ErrorCodes.ErrTimeout:
          titleKey = 'GENERAL.ERROR_TITLE';
          messageKey = 'ERROR_TIMEOUT_MESSAGE';
          break;

        case ErrorCodes.ErrAuthAccessTokenExpired:
          messageKey = 'ERROR_EXPIRED_SESSION';
          break;

        case ErrorCodes.ErrInternetDisconnected:
          titleKey = 'GENERAL.ERROR_TITLE';
          messageKey = 'ERROR_INTERNET_CONNECTION';
          break;
        case ErrorCodes.ErrServerOffline:
          messageKey = 'ERROR_SERVER_OFFLINE';
          break;
        case ErrorCodes.ErrRunTimeException:
          messageKey = 'ERROR_RUNTIME_MESSAGE';
          interpolationParams['uiErrorUniqueId'] = statusMessage.uiErrorUniqueId;
          break;
        case ErrorCodes.ErrBadRequest:
        case ErrorCodes.ErrAuthAccessTokenInvalid:
        case ErrorCodes.ErrAuthInvalidAppKey:
        case ErrorCodes.ErrAuthUnsupportedGrantType:
        case ErrorCodes.ErrAuthAuthorizationHeader:
        default:
          if (statusMessage.code === '404') {
            titleKey = null,
              messageKey = 'ERR_NOTFOUND_MESSAGE',
              interpolationParams['uiErrorUniqueId'] = statusMessage.uiErrorUniqueId;

          } else if (statusMessage.code === '502') {
            titleKey = null,
              messageKey = 'ERROR_INTERNAL_SERVER';
          } else {
            titleKey = 'GENERAL.ERROR_TITLE';
            messageKey = 'GENERAL.ERROR_MESSAGE',
              interpolationParams['uiErrorUniqueId'] = statusMessage.uiErrorUniqueId;
          }
      }

      errorMessage = {
        title: this.translateService.instant(titleKey),
        message: this.translateService.instant(messageKey, interpolationParams)
      };


      // tslint:disable:no-string-literal
      if (objectType === typeof statusMessage && objectType === typeof statusMessage.customData
        && undefined !== statusMessage.customData['referrer']) {
        errorMessage.message += ` (${statusMessage.customData['referrer']})`;
        errorMessage.uiErrorUniqueId = statusMessage.uiErrorUniqueId;
      }
    }

    return errorMessage;
  }

  /** Muestra un dialog de tipo alert con el mensaje especificado. */
  // tslint:disable-next-line:max-line-length
  public showError(errorMessage: ErrorMessage): void {
    this.ngZone.run(() => {
      this.dialog.open(ErrorMessageModalComponent, {
        width: '480px',
        data: errorMessage
      });
    });
  }

  /** Procesa posibles errores de ejecución y devuelve la Excepcion. */
  public processPosibleRuntimeException(statusMessage: StatusMessage): StatusMessage {
    const objectType = 'object';

    const statusMessageWithException: StatusMessage = objectType === typeof statusMessage ? {
      ...statusMessage
    } : null;

    if (objectType === typeof statusMessage && statusMessage['stack'] !== undefined) {
      statusMessageWithException.message = statusMessage['stack'].toString();
      // tslint:disable-next-line:no-any
      statusMessageWithException.errorCode = 'Runtime Javascript Error';
      statusMessageWithException.uiErrorUniqueId = this.generateUUID();
    }

    return statusMessageWithException;
  }

  /** Genera UUID. */
  public generateUUID(): string {

    let d: number = new Date().getTime();
    // tslint:disable-next-line:no-typeof-undefined
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      // Use high-precision timer if available
      d += performance.now();
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
      // tslint:disable-next-line:no-bitwise
      const r: number = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);

      // tslint:disable-next-line:no-bitwise
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}
