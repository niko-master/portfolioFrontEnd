import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle: Boolean = false;
  isLogged = false;


  constructor(private tokenService: TokenService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }
  
  logOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  clickEvent() {
    this.toggle = !this.toggle;
  }

  openModal() {
    const openDialog = this.dialog.open(LoginComponent,
      {
        panelClass: 'login-background'
      })
  }
}

