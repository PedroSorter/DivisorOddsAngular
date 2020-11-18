import { Component, OnInit } from '@angular/core';
import { Divisor } from '../Models/divisor';
import { DataServiceService } from '../services/data-service.service';


@Component({
  selector: 'app-divisors-grid',
  templateUrl: './divisors-grid.component.html',
  styleUrls: ['./divisors-grid.component.scss']
})
export class DivisorsGridComponent implements OnInit {

  number;
  numberList = Array<Divisor>();

  constructor(private dataService : DataServiceService) {}

  ngOnInit() {
    this.dataService.divisorsList.subscribe((data: any) => {
      if(data.success)
      {
      this.numberList = data.data.oddDivisorsList.map((number) => number);
      this.numberList.sort(function (a, b) {
        if (a.item2 > b.item2) {
          return 1;
        }
        if (a.item2 < b.item2) {
          return -1;
        }
        return 0;
      });
      this.number = data.data.number;
      }
    })
  }
}
