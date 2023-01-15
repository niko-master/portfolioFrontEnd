import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { explaboral } from 'src/app/model/explaboral.model';
import { persona } from 'src/app/model/persona.model';
import { ExplaboralService } from 'src/app/service/explaboral.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { EditExpComponent } from '../modal-exp/edit-exp.component';
import { ModalExpComponent } from '../modal-exp/modal-exp.component';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  persona: persona = new persona("", "", "", "", "", "");
  expLaboral: explaboral[] = [];
  isLogged = false;


  constructor(public personaService: PersonaService,
              public expLaboralService: ExplaboralService,
              private tokenService: TokenService,
              public dialog: MatDialog) { }


  ngOnInit(): void {
    this.cargarDatos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarDatos(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data
    })
    this.expLaboralService.getExpLaboral().subscribe(data => {
      this.expLaboral = data;
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.expLaboralService.delete(id).subscribe({
        next: (data) => {
          this.cargarDatos();
        }, error: () => {
          alert("Error al elimiar la experiencia");
        }
      })
    }
  }

  openModal() {
    const openDialog = this.dialog.open(ModalExpComponent).afterClosed().subscribe(val=>{
      if(val==='created'){
        this.cargarDatos();
      }
    })
  }
  openEditModal(explab: any) {
    const openDialog = this.dialog.open(EditExpComponent,{
      data: explab
    }).afterClosed().subscribe(val=>{
      if(val==='updated'){
        this.cargarDatos();
      }
    })
  }
  


}
