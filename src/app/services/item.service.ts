import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }
  
  /**
   * Metodo getItems para obtener los items de una familia
   * @param familyId id de la familia de items
   * @returns Observable de array de items
   */
  getItems(familyId: string): Observable<Item[]> {
    return this.http
      .get<Item[]>(`${this.apiURL}/item/list/${familyId}`);
  }
  /**
   * Metodo getItem para obtener in item
   * @param id el id del item
   * @returns Observable de un item
   */
  getItem(id: string): Observable<Item> {
    return this.http
      .get<Item>(`${this.apiURL}/item/${id}`);
  } 
  
  getFeaturedItems(): Observable<Item[]> {
    let ids = [1,2,3,4,5,6,7,8,9];
    //shuffle array
    var j, x, i;
    for (i = ids.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = ids[i];
        ids[i] = ids[j];
        ids[j] = x;
    }
    let featuredIds = ids.slice(0,3)
    let featuredItems$ = featuredIds.map(id => this.getItem(id.toString()));
    return forkJoin(featuredItems$);
  }
  
}
