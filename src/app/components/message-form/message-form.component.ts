
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Message } from 'app/models';
import { DialogflowService } from 'app/services/dialogflow.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageFormComponent {
  @Input('message')
  public message: Message;
  @Input('messages')
  public messages: Message[];

  constructor(private _df: DialogflowService) { }

  public sendMessage(): void {
    if (this.message.content) {
      this.message.timestamp = new Date();
      this.messages.push(this.message);
      this._df.getResponse(this.message.content).subscribe(res => {
        this.messages.push(new Message(res.result.fulfillment.speech, 'assets/bot.png', false, res.timestamp));
        this._df.onMessageAdded.next();
      });
      this.message = new Message('', 'assets/tux_32.png', true);
    }
  }
}
