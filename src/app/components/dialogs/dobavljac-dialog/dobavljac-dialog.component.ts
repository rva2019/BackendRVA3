import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dobavljac } from '../../../models/dobavljac';
import { DobavljacService } from '../../../services/dobavljac.service';

@Component({
  selector: 'app-dobavljac-dialog',
  templateUrl: './dobavljac-dialog.component.html',
  styleUrls: ['./dobavljac-dialog.component.css']
})
export class DobavljacDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<DobavljacDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Dobavljac,
              public dobavljacService: DobavljacService) { }

  ngOnInit() {
  }

  public add(): void {
    this.data.id = -1;
    this.dobavljacService.addDobavljac(this.data);
    this.snackBar.open("Uspešno dodat dobavljač: " + this.data.id, "U redu", {
      duration: 2500,
    });
  }

  public update(): void {
    this.dobavljacService.updateDobavljac(this.data);
    this.snackBar.open("Uspešno modifikovan dobavljač: " + this.data.id, "U redu", {
      duration: 2000,
    });
  }

  public delete(): void {
    this.dobavljacService.deleteDobavljac(this.data.id);
    this.snackBar.open("Uspešno obrisan dobavljač: " + this.data.id, "U redu", {
      duration: 2000,
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000,
    });
  }

}
