import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    this.messagingService.getChatsPreviews$()
      .subscribe((data) => console.log(data));
  }

}
