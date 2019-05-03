import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedServiceService {

  constructor() { }

  authanticate(username,password){
    
    if(username==='kamlesh' && password==='kuva'){
      sessionStorage.setItem('usersession',username);
      return true;

    }
    return false;
    

  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('usersession')
    return !(user === null)
  }

  isLoggedOut(){
    sessionStorage.removeItem('usersession')
  }
 
}
