import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  
  featuredItems$: Observable<Item[]>;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.featuredItems$ = this.itemService.getFeaturedItems();
  }

}
