import { Component, OnInit } from '@angular/core';
import { HardcodedServiceService } from '../services/hardcoded-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedservice:HardcodedServiceService) { }

  ngOnInit() {

    this.hardcodedservice.isLoggedOut();
  }

}
