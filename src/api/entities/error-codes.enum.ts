export enum ErrorCodes {

  /** Only grant_type=password and refresh_token requests are accepted by this server. */
  ErrAuthUnsupportedGrantType = <any>'ERR.AUTH.UNSUPPORTED_GRANT_TYPE',

  /** AccessToken inválido. */
  ErrAuthAccessTokenInvalid = <any>'ERR.AUTH.ACCESSTOKEN.INVALID',

  /** AccessToken vencido. */
  ErrAuthAccessTokenExpired = <any>'ERR.AUTH.ACCESSTOKEN.EXPIRED',

  /** AccessToken con cantidad de usos (hits) superada. */
  ErrAuthAccessTokenOverHitsLimit = <any>'ERR.AUTH.ACCESSTOKEN.OVERHITSLIMIT',

  /** The authenticated user have not an authorizado profile to request the API operation. */
  ErrAuthUnauthorizedProfile = <any>'ERR.AUTH.UNAUTHORIZEDPROFILE',

  /** Valor de llave AppKey inválida (no encontrada).  */
  ErrAuthInvalidAppKey = <any>'ERR.AUTH.INVALIDAPPKEY',

  /** Credenciales inválidas. */
  ErrAuthInvalidCredentials = <any>'ERR.AUTH.INVALIDCREDENTIALS',

  /** Cuenta de Empresa o Pasajero inactiva. */
  ErrAuthInanctiveAccount = <any>'ERR.AUTH.INANCTIVEACCOUNT',

  /** Pasajero sin privilegio de login. */
  ErrAuthNoLoginPrivilege = <any>'ERR.AUTH.NOLOGINPRIVILEGE',

  /** The Authorization header is missing or has an invalid format (format: Authorization:Bearer {yourToken}) */
  ErrAuthAuthorizationHeader = <any>'ERR.AUTH.AUTHORIZATIONHEADER',

  /** Location no encontrado al buscar por id obtenido de predicciones. */
  ErrLocationIdNotFound = <any>'ERR.LOCATION.ID_NOTFOUND',

  /** 404 El token ingresado es invalido. */
  ErrResourceNotFound = <any>'ERR.RESOURCE.NOTFOUND',

  /** The Authorization header is missing or has an invalid format. */
  ErrTimeout = <any>'ERR.TIMEOUT',

  /** SavedLocation con nombre duplicado. */
  ErrLocationDuplicateSavedLocation = <any>'ERR.PASSENGER.DUPLICATEDSAVEDLOCATION',

  /** Peticion cancelada por el usuario. */
  ErrUserCancel = <any>'ERR.USER.CANCEL',

  /** No conection internet */
  ErrInternetConection = <any>'ERR.INTERNET.DISCONNECTED',

  /** Username del pasajero ya existente */
  ErrPassengerUsernameExist = <any>'ERR.PASSENGER.USERNAMEEXIST',

  /** La nueva password es distinta a la confirmación. */
  ErrAuthNewPasswordNotmatchConfirmation = <any>'ERR.AUTH.NEWPASSWORD.NOTMATCH.CONFIRMATION',

  /** La nueva password no cumple con las políticas de seguridad. */
  ErrAuthNewPasswordTooweak = <any>'ERR.AUTH.NEWPASSWORD.TOOWEAK',

  /** Invalid or expired token on reset password. */
  ErrAuthResetPasswordInvalidOrExpiredToken = <any>'ERR.AUTH.RESETPASSWORD_INVALIDOREXPIREDTOKEN',

  /** No response from API. */
  ErrNoResponseFromApi = <any>'ERR.NORESPONSEFROMAPI',

  /** Para InternalServerError. */
  ErrInternalServerError = <any>'ERR',

  /** Para validación sin ErrorCode específico. */
  ErrBadRequest = <any>'ERR.VALIDATION',

  /**  Código de seguridad inválido. */
  ErrPaymentCardSecurityCode = <any>'ERR.PAYMENT.CARD.SECURITYCODE',

  /**  Error interno con el proveedor del servicio de pagos. */
  ErrPaymentCardDuplicated = <any>'ERR.PAYMENT.CARD.DUPLICATED',

  /** DECLINADA - No Autorizada. */
  ErrPaymentCardNotAuthorized = <any>'ERR.PAYMENT.CARD.NOTAUTHORIZED',

  /** Actualización de transacción de pago con un monto que excede el monto inicial. */
  ErrPaymentTransactionExceedsinitialamount = <any>'ERR.PAYMENT.TRANSACTION.EXCEEDSINITIALAMOUNT',

  /** La transacción de pago está está en un estado que no permite actualizaciones */
  ErrPaymentTransactionClosed = <any>'ERR.PAYMENT.TRANSACTION.CLOSED',

  /** La secuencia no contiene elementos */
  ErrPaymentTransactionNotFound = <any>'ERR.PAYMENT.TRANSACTION.NOTFOUND',

  /** Operación de transacción de pago con un monto inválido. */
  ErrPaymentTransactionInvalidAmount = <any>'ERR.PAYMENT.TRANSACTION.INVALIDAMOUNT',

  /** La tarjeta está vencida. */
  ErrPaymentCardExpired = <any>'ERR.PAYMENT.CARD.EXPIRED',

  /** La tarjeta fue rechazada por figurar en la lista de fraude. */
  ErrPaymentCardFraudScreening = <any>'ERR.PAYMENT.CARD.FRAUDSCREENING',

  /** El CardDetailId no pertenece al usuario autenticado. */
  ErrPaymentCarddetailsNotFound = <any>'ERR.PAYMENT.CARDDETAILS.NOTFOUND',

  ErrBookingPricingsearchrefidExpired = <any>'ERR.BOOKING.PRICINGSEARCHREFID.EXPIRED',

  ErrServiceNotFreeCancellation = <any>'ERR.SERVICE.NOTFREECANCELLATION',

  ErrServiceUncancelable = <any>'ERR.SERVICE.UNCANCELABLE',

  /** RECHAZADA - Solicitud del Comercio Invalida. */
  ErrPaymentGatewayBadrequest = <any>'ERR.PAYMENT.GATEWAY.BADREQUEST',

  ErrServiceNotFound = <any>'ERR.SERVICE.NOTFOUND',

  ErrServiceCancelled = <any>'ERR.SERVICE.CANCELLED',

  ErrPaymentCardLimitExceeded = <any>'ERR.PAYMENT.CARD.LIMITEXCEEDED',

  ErrPaymentCardInvalid = <any>'ERR.PAYMENT.CARD.INVALID',

  ErrPaymnentCardDeclined = <any>'ERR.PAYMENT.CARD.DECLINED',

  ErrPaymentCardReversed = <any>'ERR.PAYMENT.CARD.REVERSED',
  /** Código de error para cuando se quiere aceptar/rechazar un viaje pendiente de aceptación y la fecha límite está vencida. */
  ErrSupplierTripAcceptanceExpired = <any>'ERR.SUPPLIER.TRIP.ACCEPTANCE.EXPIRED',
  ErrSupplierTripClosureUpdateexpired = <any>'ERR.SUPPLIER.TRIP.CLOSURE.UPDATEEXPIRED',
  ErrSupplierTripClosureDuplicated = <any>'ERR.SUPPLIER.TRIP.CLOSURE.DUPLICATED',
  ErrServiceAnnulled = <any>'ERR.SERVICE.ANNULLED',
  ErrSupplierTripClosureServiceNotClosed = <any>'ERR.SUPPLIER.TRIP.CLOSURE.SERVICENOTCLOSED',
  ErrTrackingLogParser = <any>'ERR.TRACKING.LOG.PARSER',
  ErrDiferenciasPrestadorTiempoLimiteVencido = <any>'ERR.DIFERENCIASPRESTADOR.TIEMPOLIMITEVENCIDO',
  ErrDiferenciasPrestadorViajesSinValorizar = <any>'ERR.DIFERENCIASPRESTADOR.VIAJESINVALORIZAR',
  ErrDiferenciasPrestadorPreexistente = <any>'ERR.DIFERENCIASPRESTADOR.PREEXISTENTE',
  ErrDiferenciasPrestadorViajeNotFound = <any>'ERR.DIFERENCIASPRESTADOR.VIAJE.NOTFOUND',

  /** El servicio no está configurado para reserva de asientos. */
  ErrServiceSeatReservationNotFound = <any>'ERR.SERVICE.SEATRESERVATION.NOTFOUND',
  /**  El asiento está ocupado. */
  ErrServiceSeatReservationBusyseat = <any>'ERR.SERVICE.SEATRESERVATION.BUSYSEAT',
  /**  No hay asientos disponibles. */
  ErrServiceSeatReservationFull = <any>'ERR.SERVICE.SEATRESERVATION.FULL',
  /**  Ya existe una reserva de asiento para ese servicio y ese pasajero. */
  ErrServiceSeatReservationDuplicatePax = <any>'ERR.SERVICE.SEATRESERVATION.DUPLICATEDPAX',
  /**  Cuando se quiere registrar la asistencia de un pasajero a su asiento pero la reserva es de otro día o no está "en progreso". */
  ErrServiceSeatReservationAttendanceNotCurrent = <any>'ERR.SERVICE.SEATRESERVATION.ATTENDANCE.NOTCURRENT',

  /**  Cuando ya existe una asistencia de este pasajero sobre el asiento y reserva especificada (¿colado?). */
  ErrServiceSeatReservationAttendanceDuplicate = <any>'ERR.SERVICE.SEATRESERVATION.ATTENDANCE.DUPLICATED',

  /** Código de error para cuando se quiere iniciar un viaje y el conductor tiene otro distinto en progreso. */
  ErrSupplierTripNotCurrent = <any>'ERR.SUPPLIER.TRIP.NOTCURRENT',

  /** Documentación del Conductor/Vehículo vencida. */
  ErrSupplierDriverDocumentationExpired = <any>'ERR.SUPPLIER.DRIVER.DOCUMENTATIONEXPIRED',

  /** Error al intentar iniciar un viaje cerrado.
  ErrSupplierTripAlreadyClosed = <any>'ERR.SUPPLIER.TRIP.ALREADYCLOSED',

  /** Código de error para cuando se quiere obtener un ObjectDataRepository expirado.
  ErrRedirectObjectDataExpired = <any>'ERR.REDIRECT.OBJECTDATA.EXPIRED',

  /** Cuando ya existe una asistencia de este pasajero sobre el asiento y reserva especificada (¿colado?).
  ErrServiceSeatReservationAttendanceDuplicated = <any>'ERR.SERVICE.SEATRESERVATION.ATTENDANCE.DUPLICATED',

  /** ?. */
  ErrInternetDisconnected = <any>'ERR.INTERNET.DISCONNECTED',

  /** ? */
  ErrServerOffline = <any>'ERR.SERVER.OFFLINE',

  /** Runtime error  */
  ErrRunTimeException = <any>'ERR.RUNTIME.EXCEPTION'
}
