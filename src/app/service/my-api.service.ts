import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http:HttpClient) {}

   getProduits() {
    return this.http.get(`${environment.apiBaseUrl}`);
  }
  getBoxDetails(id: number) {
    return this.http.get(`${environment.apiBaseUrl}/${id}`);
  }
  
}

