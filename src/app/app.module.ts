import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StepComponent } from './components/step/step.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckButtonComponent } from './components/checkButton/checkButton.component';
import { InputComponent } from './components/input/input.component';
import { FileInputComponent } from './components/fileInput/fileInput.component';
import { AnalizedImageComponent } from './components/analizedImage/analizedImage.component';
import { ImageAreaComponent } from './components/imageArea/imageArea.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FirstStepComponent } from './steps/firstStep/firstStep.component';
import { SecondStepComponent } from './steps/secondStep/secondStep.component';
import { ThirdStepComponent } from './steps/thirdStep/thirdStep.component';
import { ResultStepComponent } from './steps/resultStep/resultStep.component';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    ButtonComponent,
    CheckButtonComponent,
    InputComponent,
    FileInputComponent,
    AnalizedImageComponent,
    ImageAreaComponent,
    LoaderComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    ResultStepComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
