
import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Message } from 'app/models';
import { DialogflowService } from 'app/services/dialogflow.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent implements OnInit, OnDestroy {
  @Input('messages')
  public messages: Message[];
  private _sub: Subscription;

  constructor(private _df: DialogflowService, private _cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this._sub = this._df.onMessageAdded.subscribe(() => {
      this._cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
