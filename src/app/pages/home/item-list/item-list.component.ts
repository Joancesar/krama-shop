import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {

  familyId;
  
  itemList$: Observable<Item[]>;
  
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
    ) {}

  ngOnInit() {
    this.familyId = this.route.snapshot.paramMap.get('id');
    this.itemList$ = this.itemService.getItems(this.familyId);
    
  }

}
