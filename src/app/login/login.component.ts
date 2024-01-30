import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageclass = ''
  message = ''
  Customerid!: number;

  editdata: any;
  responsedata: any;

  constructor(private service: AuthService,private route:Router) {
    localStorage.clear();
  }

  Login = new FormGroup({
    username: new FormControl("", [Validators.required,Validators.minLength(2)]),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }
  ProceedLogin() {
    if (this.Login.valid) {
      // var logincred = {username: 'kminchelle',password: '0lelplR'};
      console.log(this.Login.value);
      this.service.ProceedLogin(this.Login.value).subscribe(result => {
        if(result!=null){
          this.responsedata=result;
          localStorage.setItem('token',this.responsedata.token);
          localStorage.setItem('Role',"Admin");

          this.route.navigate(['']);


        }
        else
        {
          console.log("Invalid Login");
        }
      });
      console.log("After Subscribe");
    }
  }

}
