
import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Message } from 'app/models';
@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageItemComponent {
  @HostBinding('class.from-me')
  public get isMyMessage(): boolean {
    return this.message.me;
  }
  @Input('message')
  public message: Message;
}
