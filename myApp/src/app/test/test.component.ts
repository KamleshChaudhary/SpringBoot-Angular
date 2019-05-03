import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeServiceService } from '../services/data/welcome-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public message='';
  welcomeMessageFromService:string
  public nname='';
  welcomeMessageFromServicewithparam:string
  service: any;
  
  constructor(private route: ActivatedRoute,private welomeservice:WelcomeServiceService) { }
public name="";
  ngOnInit() {
  this.nname=this.route.snapshot.params['name'];
  }

  
  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    
    this.welomeservice.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    
    this.welomeservice.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }
}