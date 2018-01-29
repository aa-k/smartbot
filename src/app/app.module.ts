import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from 'app/app.component';

import { environment } from 'environments/environment';
import { MessageListComponent, MessageItemComponent, MessageFormComponent } from 'app/components';
import { DialogflowService } from 'app/services/dialogflow.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    HttpModule,
    FormsModule
  ],
  providers: [DialogflowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
