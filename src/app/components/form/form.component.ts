import {Component, Output, EventEmitter} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import { StatisticRequest } from "src/app/models/StatisticRequest";

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  value = '';
  countries: string[] = [];
  @Output() requestEvent = new EventEmitter<StatisticRequest>()

  addCountry() {
    this.countries.push(this.value)
    this.value = ''
  }

  clearCountries() {
    this.countries = []
  }

  sendRequest() {
    const from = this.range.value.start!
    const to = this.range.value.end!

    const requestData: StatisticRequest = {
      from: from.getFullYear() + '-' + (from.getMonth() + 1) + '-' + from.getDate(),
      to: to.getFullYear() + '-' + (to.getMonth() + 1) + '-' + to.getDate(),
      countries: this.countries
    }

    this.countries = []

    this.requestEvent.emit(requestData)
  }

}
