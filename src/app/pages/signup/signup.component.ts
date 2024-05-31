import { PrimaryInputComponent } from './../../components/primary-input/primary-input.component';
import { Component } from '@angular/core';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../components/services/login.service';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";

interface SignupForm{
  name:FormControl,
  email:FormControl,
  password:FormControl,
  passwordConfirm:FormControl
} 

@Component({
    selector: 'app-signup',
    standalone: true,
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
    providers: [LoginService],
    imports: [FormsModule, ReactiveFormsModule, DefaultLoginLayoutComponent,PrimaryInputComponent]
})
export class SignupComponent {
  
  signupForm!:FormGroup<SignupForm>;


  constructor(
    private router: Router,
    private LoginService:LoginService,
    private toastr: ToastrService
    ){

    this.signupForm = new FormGroup ({
      name:new FormControl('',[Validators.required, Validators.minLength(3)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(6)]),   
      passwordConfirm:new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }
  submit(){
    this.LoginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next:() => this.toastr.success("Login feito com sucesso!"),
    error:()=> this.toastr.error("Erro inesperado! Tente mas tarde")})
  }
  navigate(){
    this.router.navigate(["login"])
  }
}
