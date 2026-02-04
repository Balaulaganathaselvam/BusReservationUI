import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Criteria } from '../model/criteria';

@Injectable({
  providedIn: 'root',
})
export class Reservation {
  busUrl: string = 'http://localhost:8080/busServices/buses';
  reservationUrl: string = 'http://localhost:8080/busServices/reservations';
  data: any;

  constructor(private _httpClient: HttpClient) {}

  public getBus(criteria: Criteria): Observable<any> {
    return this._httpClient.get(
      this.busUrl + '?from=' + criteria.from + '&to=' + criteria.to + '&dateOfDeparture=' + criteria.departureDate,
    );
  }

  public getBusById(id: number): Observable<any> {
    return this._httpClient.get(this.busUrl + '/' + id);
  }

  public makeReservation(reservation: any): Observable<any> {
    return this._httpClient.post(this.reservationUrl, reservation);
  }
}
