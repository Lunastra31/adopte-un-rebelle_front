import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pilot} from "../models/pilot";
import { PilotStatus } from '../models/enums/pilot-status';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  private url: string = "http://localhost:8080/";
  private endPoint: string = "pilot/";
  constructor(private httpClient : HttpClient) { }

  public getAllPilots() : Observable<Pilot[]> {
    return this.httpClient.get<Pilot[]>(this.url + this.endPoint);
  }

  public addPilot(pilot: Pilot): Observable<Pilot> {
    return this.httpClient.post<Pilot>(this.url + this.endPoint, pilot);
  }

  public deletePilot(id: number) : Observable<Pilot> {
    return this.httpClient.delete<Pilot>(this.url + this.endPoint + id);
  }

  public changePilotStatus(pilotStatus : PilotStatus, id : number) : Observable<Pilot> {
    return this.httpClient.delete<Pilot>(this.url + this.endPoint + id);
  }
}
