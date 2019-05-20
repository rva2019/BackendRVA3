import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dobavljac } from '../../models/dobavljac';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DobavljacService } from '../../services/dobavljac.service';
import { DobavljacDialogComponent } from '../dialogs/dobavljac-dialog/dobavljac-dialog.component';

@Component({
  selector: 'app-dobavljac',
  templateUrl: './dobavljac.component.html',
  styleUrls: ['./dobavljac.component.css']
})
export class DobavljacComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'adresa', 'kontakt', 'actions'];
  dataSource: Observable<Dobavljac[]>;
  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dobavljacService: DobavljacService) {
  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.dataSource = this.dobavljacService.getAllDobavljac();
  }

  public openDialog(flag: number, id: number, naziv: string, adresa: string, kontakt: string) {
    const dialogRef = this.dialog.open(DobavljacDialogComponent, 
                      { data: { id: id, naziv: naziv, adresa: adresa, kontakt: kontakt } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }

}
