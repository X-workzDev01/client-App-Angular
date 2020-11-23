import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientDetails } from '../classes/client-details';
import { Observable, Observer, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GadgetDetails } from '../classes/Gadgets-details';

@Injectable({
  providedIn: 'root'
})
export class GadgetService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  getGadgetsList(emailId : String , value:any): Observable<any> {
    return this.httpClient.post(environment.apiUrl+'viewGadgets/${emailId}',value,{observe:'response', responseType: 'json'});
  }

  // createClient(client: object): Observable<object> {
  //   return this.httpClient.post(environment.apiUrl+'save-Client', client);
  // }

  // deleteClient(id: number): Observable<any> {
  //   return this.httpClient.delete(environment.apiUrl+'delete-Client/${id}', { responseType: 'text' });
  // }

  // getClient(id: number): Observable<Object> {
  //   return this.httpClient.get(environment.apiUrl+'Client/${id}');
  // }

  // updateClient(id: Number, value: any): Observable<Object> {
  //   return this.httpClient.post(environment.apiUrl+'update-Client/${id}', value);
  // }
}
