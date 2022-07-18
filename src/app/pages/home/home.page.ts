import { Component, OnInit } from '@angular/core';
import { FamiliasService } from 'src/app/services/familias-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  familias$;

  constructor(private familiaService: FamiliasService) {}
  
  ngOnInit(): void {
    this.familias$ = this.familiaService.getFamilias();
    
  }

}
