import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {
  readonly Root_URL;
  constructor(private http: HttpClient) {
    this.Root_URL = "/api/";
  }

  get(uri: string) {
    return this.http.get(this.Root_URL + uri);
  }

  post(uri: string, payload: object) {
    return this.http.post(this.Root_URL + uri, payload)
  }

  delete(uri: string, payload: object) {
    console.log(uri);
    console.log(this.Root_URL + uri);
    return this.http.delete(this.Root_URL + uri)
  }

  put(uri: string, payload: object) {
    return this.http.put(this.Root_URL + uri, payload)
  }
}
