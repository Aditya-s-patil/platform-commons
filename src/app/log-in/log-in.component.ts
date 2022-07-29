import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,MinLengthValidator,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm!:FormGroup;
   constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      psw:['',Validators.required]
    })
  }
  login(){
    this._http.get<any>("https://my-json-server.typicode.com/Aditya-s-patil/json/db.json/sign_up").subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.psw===this.loginForm.value.psw
      })
      if(user){
        alert("Login Successfull");
        this.loginForm.reset();
        this.router.navigate(['homepage'])
      }else{
        alert("user not found")
      }
    }, err=>{
      alert("Wrong Email-Id Or Password")
    })
  }

}
