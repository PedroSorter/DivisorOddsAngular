import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  @Output() divisorsList: EventEmitter<any> = new EventEmitter();

  constructor() { }

  UpdateDivisors(list) {
    this.divisorsList.emit(list)
  }
}
