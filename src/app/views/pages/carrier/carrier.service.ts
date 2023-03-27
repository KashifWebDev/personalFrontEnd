import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  constructor(private http: HttpClient) { }

  $addProject = this.http.get(environment.backendURI+'/projects');
}
