import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit{
  AdminLoginForm!:FormGroup
  UserLoginForm!:FormGroup

  constructor(private Route:Router,private fb:FormBuilder){}
  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({
      Admin:['',[Validators.required]],
      Password:['',[Validators.required]]
    })
    this.UserLoginForm = this.fb.group({
      UserName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  adminlogin(){
    console.log(this.AdminLoginForm.value,"admin");
    this.Route.navigate(['/admin-dashboard'])
  }
  userlogin(){
    console.log(this.UserLoginForm.value,"user");
    this.Route.navigate(['/user-dashboard'])
    
  }

}
