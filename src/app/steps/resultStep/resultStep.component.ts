import { Component, EventEmitter, Output } from '@angular/core';
import { ImageArea } from '../../app.types';
import messages from '../../../messages';

@Component({
  selector: 'app-result-step',
  templateUrl: './resultStep.component.html',
  styleUrls: ['./resultStep.component.scss']
})
export class ResultStepComponent {
  title = messages.RESULT;
  imageSrc = 'http://s3-eu-west-1.amazonaws.com/deepomatic.net-static/ressources/demos/Fashion/Fashion1.jpg';
  imageAreas: ImageArea[] = [
    {
      key: '',
      xmin: 0.7969725728034973,
      xmax: 0.8507364988327026,
      ymin: 0.09707668423652649,
      ymax: 0.1500911712646484,
    }
  ];
}
