import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail =  false;
  loginUser: LoginUser;
  userName: string;
  password: string;
  roles: string[] = [];
  errMsg: string;
  fromDialog: string;
  
  constructor(private tokenService: TokenService, 
              private authService: AuthService,
              private router: Router,
              public dialog: MatDialogRef<LoginComponent>) { }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();

    }
  }
  onLogin(): void{
    this.loginUser = new LoginUser(this.userName, this.password);
        this.authService.login(this.loginUser).subscribe({
          next:(data)=>{
          this.isLogged = true;
          this.isLogginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.userName);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          window.location.reload();
          },error:(err)=>{  
          this.isLogged = false;
          this.isLogginFail = true;
          this.errMsg = err.error.mensaje;
          console.log(this.errMsg);
          }
        })
      }
  closeDialog() { 
    this.dialog.close({ event: 'close', data: this.fromDialog }); 
  }

}
