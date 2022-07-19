import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamiliaService } from 'src/app/services/familia-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  familias$;

  constructor(
    private familiaService: FamiliaService,
    public navCtrl: NavController
    ) {}
  
  ngOnInit(): void {
    this.familias$ = this.familiaService.getFamilias();
    
  }
  
}
