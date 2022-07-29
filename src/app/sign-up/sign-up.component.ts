import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',Validators.required,Validators.minLength(2)],
      email: ['',Validators.required],
      mobile: ['',Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.min(5999999999),Validators.max(9999999999)],
      psw: ['',Validators.required,Validators.minLength(5)]
    });
  }
  signup(){
    this._http.post<any>("https://github.com/Aditya-s-patil/platform-commons/blob/master/db.json",this.signupForm.value).subscribe(res=>{
      alert("Registered Successfully");
      this.signupForm.reset();
      this.router.navigate(['log-in'])
    }, err=>{
      alert("error")
    })
    }
}
