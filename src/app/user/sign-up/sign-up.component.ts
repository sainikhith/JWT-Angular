import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms'
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User;
  //registerForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    // this.registerForm=this._formBuilder.group({
    //   EId:['',Validators.required],
    //   Ename:['',Validators.required],
    //   Epsw:['',Validators.required],
    //   Eemail:['',Validators.required],
    //   Emob:['',Validators.required],
    // })
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      ID: '',
      UserName: '',
      Password: '',
      Email: '',      
      Mobile: ''
    }
  }
  OnSubmit(form:NgForm){
    debugger;
    //alert("register");
    //console.log(this.registerForm.value);
    // this.userService.registerUser(form.value)
    //   .subscribe((data: any) => {
    //     if (data.Succeeded == true) {
    //       this.resetForm(form);
    //       //this.toastr.success('User registration successful');
    //     }
    //    // else
    //      // this.toastr.error(data.Errors[0]);
    //   });

  }

}
