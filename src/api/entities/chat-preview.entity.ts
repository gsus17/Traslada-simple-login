export interface ChatPreview {

  // Datos que definen una conversación electrónica.
  chat: any;

  // Último mensaje del chat.
  lastMessage: any;

  // Cantidad de mensajes no leídos del chat.
  unreadCount: number;

  // Identificador del servicio actual en que están los intervinientes (si corresponde).
  currentServiceId: string;

  // Estado del servicio actual en que están los intervinientes (si corresponde).
  currentServiceStatus: any;
}
