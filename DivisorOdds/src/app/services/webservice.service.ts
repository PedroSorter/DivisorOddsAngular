import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url:string = 'https://localhost:44368/api/divisorodds';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http: HttpClient) {} 

   public GetDivisors(number) {
      let urlinit = `${url}/divisors?number=${number}`;  
      return this.http.get(urlinit);
    }
}

