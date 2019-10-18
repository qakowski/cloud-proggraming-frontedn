import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url = 'https://example.com';

  constructor(private http: HttpClient) { }

  sendImage(image) {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post(this.url, formData);
  }
}
