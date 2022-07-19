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
  
}
