import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }
  
  getItems(familyId: string): Observable<Item[]> {
    return this.http
      .get<Item[]>(`${this.apiURL}/item/list/${familyId}`);
  }
  
}
