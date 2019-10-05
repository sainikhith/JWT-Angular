import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms'
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { HttpHeaders,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interseptor';
import { MenuDisplayComponent } from './menu-display/menu-display.component';
import { TestComponent } from './test/test.component';
import { AddReportComponent } from './add-report/add-report.component';


@NgModule({
  declarations: [
    AppComponent,      
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MenuDisplayComponent,
    TestComponent,
    AddReportComponent
  ],
  entryComponents:[SignUpComponent,SignInComponent,AddReportComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
