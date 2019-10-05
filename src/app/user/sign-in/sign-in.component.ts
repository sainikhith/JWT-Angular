import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule,Route } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { distinct } from 'rxjs/operators';
import { TestComponent } from 'src/app/test/test.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AddReportComponent } from 'src/app/add-report/add-report.component';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  show: boolean = false;
  hide:boolean= true;
 isLogInError:boolean=false;
  Menus:any[];
  Submenus:any[];
  routes: Route[];
  
  

  constructor(private router: Router, private userService:UserService){
    
  }  
  ngOnInit() {
  }

  // getRoutes(menu)
  // {
  //   this.routes.push(
  //    {
  //      path:'/hello',
  //      component:SignUpComponent
  //     }
  //   );     

  // }

  OnSubmit(userName,password){
    //alert("logIn");
    this.userService.userAuthentication(userName,password).subscribe((data:any)=>{ 
      debugger;
       this.Menus = data.menusubmens;
       this.Submenus= data.submenus;
            
          // this.router.config.unshift(
          //   {
          //     path: '/hello',    
          //      component: TestComponent
                
          //     // path: '/hello',    
          //     // component: TestComponent
          //   }
          // );
          // this.routes=this.router.config; 
         // var data = data
          var i =0; 
          
          for(var i=0;i< this.Submenus.length;i++)
          {            

             this.router.config.push(
               {
                  path: this.Submenus[i].menuMaster.menu, 
                  component: TestComponent,
                 // Menus.children.push[]
                 children: this.AddRoutes(this.Submenus[i].menuMaster.menu)
                  //component: this.Menus.Controller                    
                  // path: '/hello',  
                                    
                }
              );
              this.routes=this.router.config;  
     
              
          }


   
     
     
  //  }

      
      //this.router.resetConfig(this.routes);

      console.log(this.routes);

      localStorage.setItem('userToken',data.token);
     // this.router.navigate(['/home',menusub]);
      this.show = true;
      this.hide=false;
    },(err : HttpErrorResponse)=>{
      this.isLogInError=true;     
      console.log(err.message);
    });
  }

  // signup(){
  //   //alert("signup");
  //   this.router.navigate(['/signup'])
  // }
  AddRoutes(menu)
  {
    debugger;
    let rt=[];
    let submenus=[];
      submenus= this.Submenus.filter(m=>m.menuMaster.menu==menu);
    console.log(submenus);
     for(var j=0; j<submenus.length;j++ ){
      let r={
        // path:submenus[j].controller,
        // component:submenus[j].name
        path:submenus[j].controller,
        component:AddReportComponent
      };
      rt.push(r);
    }
      return rt;
  }

}
