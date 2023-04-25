import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StatisticRequest} from "../models/StatisticRequest";
import {Observable} from "rxjs";
import {CountryStatistic} from "../models/CountryStatistic";

@Injectable({
  providedIn: 'root'
})
export class CountryStatisticService {

  constructor(private httpClient: HttpClient) {

  }

  executeRequest(statisticRequest: StatisticRequest) : Observable<CountryStatistic[]> {

    console.log(statisticRequest)

    return this.httpClient.post<CountryStatistic[]>('http://localhost:8081/api/stat', statisticRequest)
  }
}
