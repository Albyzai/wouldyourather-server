import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DilemmaComponent } from './dilemma/dilemma.component';
import { CommentComponent } from './comment/comment.component';
import { DilemmaButtonComponent } from './dilemma-button/dilemma-button.component';
import { CountUpModule } from 'countup.js-angular2';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CountUpModule],
  exports: [HttpClientModule],
  declarations: [
    AppComponent,
    DilemmaComponent,
    CommentComponent,
    DilemmaButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
