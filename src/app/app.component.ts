import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Message } from 'app/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public message: Message;
  public messages: Message[];

  constructor() {
    this.message = new Message('', 'assets/tux_32.png', true);
    this.messages = [new Message('Welcome to chatbot universe', 'assets/tux_bot_256.png', false, new Date())];
  }
}
