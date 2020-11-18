import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-divisors-number',
  templateUrl: './divisors-number.component.html',
  styleUrls: ['./divisors-number.component.scss']
})
export class DivisorsNumberComponent implements OnInit {

  constructor(private http: WebserviceService, private dataService: DataServiceService) { }

  ngOnInit() {
  }

  GetDivisors(query) {
    this.http.GetDivisors(query.value).subscribe((data : any) => {
      this.UpdateGrid(data);
    });
  }

  UpdateGrid(data) {
    this.dataService.UpdateDivisors(data);
  }
}
