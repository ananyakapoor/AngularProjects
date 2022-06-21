import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'e9124305d0a8444694d2e9c6e0c817c4';
  constructor(private httpClient: HttpClient) { }
  public getNews(){
    return this.httpClient.get(`http://localhost:8080/amazon/category/getCategoryList`);
  }
  
}