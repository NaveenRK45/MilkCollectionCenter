import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  RegisterForm!:FormGroup
  constructor(private fb:FormBuilder,private route:Router){}
  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      dob:['',[Validators.required]],
      gender:[''],
      doj:['',[Validators.required]],
      accountno:['',[Validators.required]],
      Ifsccode:['',[Validators.required]],
      bankname:['',[Validators.required]],
      branchadd:['',[Validators.required]],
      village:['',[Validators.required]],
      mandal:['',[Validators.required]],
      city:['',[Validators.required]],
      pincode:['',[Validators.required]],

    })
  }
  Register(){
    console.log(this.RegisterForm.value,"register")
  }
}
