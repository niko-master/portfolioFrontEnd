import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { explaboral } from '../model/explaboral.model';
@Injectable({
  providedIn: 'root'
})
export class ExplaboralService {

  expLaboralURL = 'https://portfoliobackend-gfx0.onrender.com/explaboral/'
  // expLaboralURL = 'http://localhost:8080/explaboral/'
  constructor(private httpClient: HttpClient) { }

  //obtiene la lista (array) de experiencia laborales 
  public getExpLaboral(): Observable<explaboral[]>{
    return this.httpClient.get<explaboral[]>(this.expLaboralURL + 'lista')
  }
  //crear una nueva experiencia laboral
  public save(expLaboral: explaboral): Observable<any>{
    return this.httpClient.post<any>(this.expLaboralURL + 'crear', expLaboral);
  }
  public traer(expLaboral_id: number): Observable<explaboral>{
    return this.httpClient.get<explaboral>(this.expLaboralURL + `traer/${expLaboral_id}`);
  } 

  //actualizar/editar una nueva experiencia laboral
  public edit(expLaboral_id:number, expLaboral: explaboral): Observable<any>{
  return this.httpClient.put<any>(this.expLaboralURL + `editar/${expLaboral_id}`, expLaboral);
  }

  //eliminar una experiencia laboral
  public delete(expLaboral_id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expLaboralURL + `borrar/${expLaboral_id}`);

  }
}
