import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepComponent } from './components/step/step.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckButtonComponent } from './components/checkButton/checkButton.component';
import { FirstStepComponent } from './steps/firstStep/firstStep.component';
import { SecondStepComponent } from './steps/secondStep/secondStep.component';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    ButtonComponent,
    CheckButtonComponent,
    FirstStepComponent,
    SecondStepComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
