import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'krama-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  
  /* Content id */
  @Input() menuId = 'first';
  
  /* Content id */
  @Input() contentId = 'content';
  
  /* Título del menú */
  @Input() title = 'Content';
  
  
  /* Habilitar opcion Home */
  @Input() enableHomeItem = false;
  
  /* Label del menuItem Home */
  @Input() homeLabel = 'Home';
  
  /* Url del menuItem Home */
  @Input() homeUrl = '/';
  
  
  /* Array de items del menu */
  @Input() menu = [];
  
  /* Nombre del campo label para mostrar en la opción */
  @Input() menuLabel = 'label';
  
  /* Prefijo de la URL para el routerLink */
  @Input() urlPrefix = '';
  
  /* Nombre del campo Url para el routerLink */
  @Input() menuUrl = 'url';
  

  constructor() { }

}
