import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any;
  username:any;
  password:any;


  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(value:any){
    this.username=value.uemail;
    this.password=value.upass;
    console.log(this.username, this.password);
    
    if(this.username=="admin123@gmail.com" && this.password=="admin123")
    {
      alert("Login Successful");
      this.router.navigate(['./admin']);

    }
    else{
      alert("Please enter Correct Credentials");
      this.router.navigate(['/login']);
    }
  }
}
