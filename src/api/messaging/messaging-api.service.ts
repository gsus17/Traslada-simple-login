import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatPreview } from '../entities/chat-preview.entity';

@Injectable({
  providedIn: 'root'
})
export class MessaginApigService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Obtiene una lista con la previsualización de los chats entre los operadores y conductores.
   * Con información adicional del conductor y del viaje en curso.
   */
  public getChatsPreviews$(room: string): Observable<ChatPreview[]> {
    console.log(`${MessaginApigService.name}::getChatsPreviews room %o`, room);

    const url = 'https://suppliers.zwitcher.com/chats/previews';

    const params = new HttpParams();
    params.set('room', room);

    return this.httpClient.get<ChatPreview[]>(url, { params: { 'room': room } });
  }
}
