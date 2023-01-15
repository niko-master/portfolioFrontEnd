import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { explaboral } from 'src/app/model/explaboral.model';
import { ExplaboralService } from 'src/app/service/explaboral.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {
  expLaboral: explaboral | undefined;
  fromDialog: string;
  expLabID: number;

  constructor(private expLaboralService: ExplaboralService,
    private activatedRouter: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public editData: explaboral,
    public dialogEdit: MatDialogRef<EditExpComponent>,

    private router: Router) { }

  ngOnInit(): void {
    if (this.editData) {
      this.expLabID = this.editData.explaboral_id;
      this.expLaboralService.traer(this.expLabID).subscribe({
        next: (data) => {
          this.expLaboral = data;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
  saveExpLaboral(formAdd: NgForm): void {
    // const expLaboral_id = this.activatedRouter.snapshot.params['expLaboral_id'];
    this.expLabID = this.editData.explaboral_id;
    this.expLaboralService.edit(this.expLabID, formAdd.value).subscribe({
      next: (data) => {
        alert("Experiencia actualizada");
        formAdd.reset();
        this.dialogEdit.close('updated');
      },
      error: (err) => {
        alert(err);
      }
    })
  }

  closeDialog() {
    this.dialogEdit.close({ event: 'close', data: this.fromDialog });
  }
}
