import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { SignUpComponent } from '../user/sign-up/sign-up.component';
import { TestComponent } from '../test/test.component';
import { Route } from '@angular/compiler/src/core';
import { SignInComponent } from '../user/sign-in/sign-in.component';

@Component({
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.css']
})
export class MenuDisplayComponent implements OnInit {

   @Input() Menu: any;
   @Input() Submenu:any;
   @Input() routesData:Route[];

  constructor(private router :Router) { }

  ngOnInit() {
   //this.router.resetConfig(this.router.config);
  }
  logOut(){
    debugger;
    localStorage.removeItem('userToken');
   this.router.navigate(['']);
  
  }

  
}
