import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENV_CONFIG } from '@maze-tv/shared/data-access';
import { UiModule } from '@maze-tv/shared/ui';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule
  ],
  providers: [{ provide: ENV_CONFIG, useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule {}
