import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
  base64Image(file: File): Observable<string> {
    return Observable.create((observer) => {
      const reader = new FileReader();
      reader.onloadend = function(e) {
        const content = this.result;
        observer.next(content);
        observer.complete();
      };

      reader.readAsDataURL(file);
    });
  }
}
