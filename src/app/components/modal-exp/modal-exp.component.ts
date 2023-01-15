import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { explaboral } from 'src/app/model/explaboral.model';
import { ExplaboralService } from 'src/app/service/explaboral.service';

@Component({
  selector: 'app-modal-exp',
  templateUrl: './modal-exp.component.html',
  styleUrls: ['./modal-exp.component.css']
})
export class ModalExpComponent implements OnInit {
  tipoEmpleo: string = '';
  descripcion: string = '';
  fromDialog: string;
  expLaboral: explaboral = null;

  constructor(private expLaboralService: ExplaboralService,
    private activatedRouter: ActivatedRoute,    
    private router: Router,
    public dialog: MatDialogRef<ModalExpComponent>) { }


  ngOnInit(): void {}

  create(): void {
       const exp = new explaboral(this.descripcion, this.tipoEmpleo);
      this.expLaboralService.save(exp).subscribe({
        next: (data) => {
          alert("Experiencia creada exitósamente");
          this.dialog.close('created');
        }, error: () => {
          alert("Error al crear la experiencia");
          window.location.href = '#about-me';
        }
      })
  }

  closeDialog() {
    this.dialog.close({ event: 'close', data: this.fromDialog });
  }

}
