import {Component, Input} from "@angular/core";
import {CountryStatistic} from "../../models/CountryStatistic";

@Component({
  selector: 'app-country-statistic',
  templateUrl: 'country-statistic.component.html',
  styleUrls: ['country-statistic.component.css']
})
export class CountryStatisticComponent {

  @Input()
  countryStatistic!: CountryStatistic;
}
