import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged = false;

  constructor(private tokenService: TokenService, 
              private router: Router,
              public dialog: MatDialog) { }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }
  
  logOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  openModal() {
    const openDialog = this.dialog.open(LoginComponent);
  }

}
