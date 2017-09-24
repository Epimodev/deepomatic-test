import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { FirstStepComponent } from './steps/firstStep/firstStep.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FirstStepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
