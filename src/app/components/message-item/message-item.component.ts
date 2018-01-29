
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Message } from 'app/models';
@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageItemComponent {
  @Input('message')
  public message: Message;
}
