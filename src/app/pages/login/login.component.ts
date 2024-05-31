import { LoginService } from '../../components/services/login.service';
import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [PrimaryInputComponent,DefaultLoginLayoutComponent,FormsModule,ReactiveFormsModule],
    providers:[LoginService]
})
export class LoginComponent {
  loginForm!:FormGroup;


  constructor(private router: Router, private LoginService:LoginService ){
    this.loginForm = new FormGroup ({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }
  submit(){
    this.LoginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next:() => console.log("sucessada"),
    error:()=> console.log("error")})
  }
  navigate(){
    this.router.navigate(["signup"])
  }
  }

