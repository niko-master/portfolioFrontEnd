import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { LoginUser } from '../model/login-user';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // authURL = 'http://localhost:8080/auth/';
  authURL = 'https://portfoliobackend-gfx0.onrender.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public new(newUser: Usuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'new', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser);
  }


}
