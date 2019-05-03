import { Component, OnInit } from '@angular/core';
import { HardcodedServiceService } from '../services/hardcoded-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardcodedAuthenticationService 
    : HardcodedServiceService) { }

  ngOnInit() {
  }

}
