import {Component, OnInit} from '@angular/core';
import {CountryStatistic} from './models/CountryStatistic';
import {data} from './data/stats'
import {CountryStatisticService} from "./services/country-statistic.service";
import {StatisticRequest} from "./models/StatisticRequest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CovidStatClient';
  statistics: CountryStatistic[] = data

  constructor(private countryStatisticService: CountryStatisticService) {
  }

  ngOnInit(): void {
    const request: StatisticRequest = {
      from: "2021-03-1",
      to: "2021-04-1",
      countries: [
        "spain",
        "usa",
        "germany"
      ]
    }

    this.countryStatisticService.executeRequest(request).subscribe(stats => {
      this.statistics = stats
    })
  }

  executeRequest($event: StatisticRequest) {

    console.log($event)

    this.countryStatisticService.executeRequest($event).subscribe(stats => {
      this.statistics = stats
    })
  }
}
