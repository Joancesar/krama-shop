import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  familias = [];

  constructor() {}
  
  ngOnInit(): void {
    this.familias =   
    [  
      { label: 'App', url: '/' },
      { label: 'Book', url: '/book' },   
      { label: 'Paint', url: '/paint' }
    ];
    
  }

}
