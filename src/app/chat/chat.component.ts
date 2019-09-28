import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  conversation: Message[] = [];
  inputMessage: string = '';

  constructor(private _chatService: ChatService) { }

  sendMessage() {
    this._chatService.sendMessageToBot(this.inputMessage);
    this.inputMessage = '';
  }

  ngOnInit() {
    this._chatService.getConversation().subscribe((conv: Message[]) => {
      this.conversation = conv;
    });
    this._chatService.init();
  }

}
