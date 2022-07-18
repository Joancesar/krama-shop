import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  navigate = [];  
  constructor() {}
  
  ngOnInit(): void {
    this.navigate =   
     [  
         { 
         title : 'App',
         url   : '/apps',
         icon  : 'apps' 
         },
       { 
         title : 'Book',  
         url   : '/book',  
         icon  : 'book'  
       },   
       {  
         title : 'Paint',  
         url   : '/paint',  
         icon  : 'brush'   
       },  
       {  
         title : 'Contacts',  
         url   : '/contacts',  
         icon  : 'contacts'  
       },   
       {
           title : 'Facebook',
           url   : '/facebook.com',
           icon  : 'logo-facebook'
       },
    ];
    
  }
}
