import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Porudzbina } from '../../models/porudzbina';
import { PorudzbinaService } from '../../services/porudzbina.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Dobavljac } from '../../models/dobavljac';
import { PorudzbinaDialogComponent } from '../dialogs/porudzbina-dialog/porudzbina-dialog.component';

@Component({
  selector: 'app-porudzbina',
  templateUrl: './porudzbina.component.html',
  styleUrls: ['./porudzbina.component.css']
})
export class PorudzbinaComponent implements OnInit {

  displayedColumns = ['id', 'datum', 'isporuceno', 'iznos', 'placeno', 'dobavljac', 'actions'];
  dataSource: MatTableDataSource<Porudzbina>;
  selektovanaPorudzbina: Porudzbina;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public porudzbinaService: PorudzbinaService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.porudzbinaService.getAllPorudzbina().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      //pretraga po nazivu ugnježdenog objekta
      this.dataSource.filterPredicate = (data, filter: string) => {
        const accumulator = (currentTerm, key) => {
          return key === 'dobavljac' ? currentTerm + data.dobavljac.naziv : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

       //sortiranje po nazivu ugnježdenog objekta
       this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'dobavljac': return data.dobavljac.naziv.toLocaleLowerCase();
          default: return data[property];
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  public openDialog(flag: number, id: number, datum: Date, isporuceno: Date, placeno: boolean, iznos: number, dobavljac: Dobavljac ) {
    const dialogRef = this.dialog.open(PorudzbinaDialogComponent, { data: { id: id, datum: datum, isporuceno: isporuceno, placeno: placeno, iznos: iznos,
                                       dobavljac: dobavljac  } });
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1){
          this.loadData();
      }

    });
  }

  selectRow(row){
    this.selektovanaPorudzbina = row;
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
