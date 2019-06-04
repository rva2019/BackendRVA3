import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Artikl } from '../../models/artikl';
import { HttpClient } from '@angular/common/http';
import { ArtiklService } from '../../services/artikl.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ArtiklDialogComponent } from '../dialogs/artikl-dialog/artikl-dialog.component';

@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];
  // dataSource: Observable<Artikl[]>;

  dataSource: MatTableDataSource<Artikl>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public artiklService: ArtiklService) {
  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.artiklService.getAllArtikl().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      //ignoriši mala/velika slova pri sortiranju ali za id nemoj da prebacuješ u mala slova
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch (property) {
          case 'id': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };
 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public openDialog(flag: number, id: number, naziv: string, proizvodjac: string) {
    const dialogRef = this.dialog.open(ArtiklDialogComponent, 
                      { data: { id: id, naziv: naziv, proizvodjac: proizvodjac } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }


}
