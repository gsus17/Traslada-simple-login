import { Injectable } from '@angular/core';
import { MessaginApigService } from 'src/api/messaging/messaging-api.service';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChatPreview } from 'src/api/entities/chat-preview.entity';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private messaginApigService: MessaginApigService) { }

  public getChatsPreviews$(): Observable<any> {
    console.log(`${MessaginApigService.name}::getChatsPreviews`);

    const room: string = 'dvrope';
    return this.messaginApigService.getChatsPreviews$(room)
      .pipe(
        map((items: ChatPreview[]) => this.getOnlyConnected(items))
      );
  }

  private getOnlyConnected(items: ChatPreview[]): any {
    const newObj = items.filter((item) => item.unreadCount > 0)[0].currentServiceStatus;

    return newObj;
  }
}

