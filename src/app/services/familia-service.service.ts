import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { Familia } from '../models/familia';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {
  
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }
  
  getFamilias(): Observable<Familia[]> {
    return this.http
      .get<Familia[]>(this.apiURL + '/family/list');
  }
  
  
}
