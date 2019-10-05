import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { TestComponent } from './test/test.component';

// const routes: Routes = [{path: 'Register',
// component: RegisterComponent},
// {path : '', redirectTo:'/LoginComponent', pathMatch : 'full'}  
// ];
export const appRoutes: Routes = [
  // { 
  //   path: 'home', component: HomeComponent, canActivate:[AuthGuard]
  // },
  { 
    path: 'addreport', component: TestComponent
  },
  // {
  //     path: 'signup', component: SignUpComponent,
  //     children: [
  //       { path: 'signupchild1', component: TestComponent },
  //       { path: 'signupchild2', component: TestComponent }
  //     ]
  // },
  // {
  //     path: 'login', component: SignInComponent,
  //     children: [{ path: 'Loginchild1', component: SignInComponent }]
  // },
  { 
    path: 'login', component: SignInComponent
  },
  { path : '', redirectTo:'/login', pathMatch : 'full'}
  
];
@NgModule({ 
  declarations:[
  ],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


 
