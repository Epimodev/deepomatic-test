import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ImageArea } from './app.types';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
  constructor(private http: Http) {}

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

  formatData(apiResponse): ImageArea[] {
    let formattedAreas: ImageArea[] = [];
    const boxes = apiResponse.task.data.boxes;

    Object.keys(boxes).map((key) => {
      const formattedBoxes: ImageArea[] = boxes[key].map((box) => {
        return {
          key,
          xmin: box.xmin,
          xmax: box.xmax,
          ymin: box.ymin,
          ymax: box.ymax,
        };
      });
      formattedAreas = formattedAreas.concat(formattedBoxes);
    });

    return formattedAreas;
  }

  imageDetection(detectorType: string, data: string, urlType: string): Observable<any> {
    return this.launchDetectionTask(detectorType, data, urlType)
      .map(response => response.json().task_id)
      .switchMap(taskId => this.detectionResult(taskId))
      .expand((response) => {
        const body = response.json();
        if (body.task.status === 'pending') {
          return this.detectionResult(body.task.id);
        } else {
          return Observable.empty();
        }
      })
      .filter(response => response.json().task.status !== 'pending')
      .map(response => {
        const body = response.json();
        if (body.task.status === 'error') {
          throw new Error(body.task.error);
        }
        return body;
      });
  }

  private detectionResult(taskId: string): Observable<any> {
    const url = `${environment.apiUrl}/tasks/${taskId}`;
    const headers = this.createHeader();
    return this.http.get(url, {
      headers,
      responseType: ResponseContentType.Json
    });
  }

  private launchDetectionTask(detectorType: string, data: string, urlType: string): Observable<any> {
    if (urlType === 'file') {
      return this.launchDetectionTaskWithBase64(detectorType, data);
    } else {
      return this.launchDetectionTaskWithUrl(detectorType, data);
    }
  }

  private launchDetectionTaskWithUrl(detectorType: string, fileUrl: string): Observable<any> {
    const url = `${environment.apiUrl}/detect/${detectorType}`;
    const headers = this.createHeader();
    const params = {
      url: fileUrl
    };
    return this.http.get(url, {
      headers,
      params,
      responseType: ResponseContentType.Json
    });
  }

  private launchDetectionTaskWithBase64(detectorType: string, fileBase64: string): Observable<any> {
    const url = `${environment.apiUrl}/detect/${detectorType}`;
    const headers = this.createHeader();
    const body = {
      base64: fileBase64
    };
    return this.http.post(url, body, {
      headers,
      responseType: ResponseContentType.Json
    });
  }

  private createHeader() {
    const headers = new Headers();
    headers.set('x-app-id', environment.xAppId);
    headers.set('x-api-key', environment.xApiKey);
    return headers;
  }
}
