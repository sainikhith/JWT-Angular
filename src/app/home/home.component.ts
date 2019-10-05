import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user/shared/user.service';
import { SignInComponent } from '../user/sign-in/sign-in.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 userClims: any;

 menu: any[];
  constructor(private router:Router, private userService: UserService,private route: ActivatedRoute) {
    debugger;
 this.menu= route.snapshot.params.menusubmens;
  
   }
 
  ngOnInit() {
  //  this.userService.getUserClaims().subscribe((data:any)=>{
  //    this.userClims=data;
  //  })
  this.router.config.push(
    {
      path: 'core',
      component: SignInComponent
    }
  );
  this.router.resetConfig(this.router.config);

  console.log("menudata",this.menu);
  }
logOut(){
  localStorage.removeItem('userToken');
  this.router.navigate(['/login']);
  
}

}
