import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedServiceService } from '../services/hardcoded-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName = "";
  public password = "";
  errorMessage = "Invalid Credentials";
  public invalidLogin = false;
  
  constructor(private router: Router,private hardcodedService: HardcodedServiceService ){ }

  ngOnInit() {
  }

  loginDemo(){
   // if(this.userName === 'kamlesh' && this.password === 'kuva'){
     
   if(this.hardcodedService.authanticate(this.userName,this.password)){

       this.router.navigate(['test',this.userName])
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }
}
