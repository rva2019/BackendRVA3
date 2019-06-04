import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Porudzbina } from '../../models/porudzbina';
import { Artikl } from '../../models/artikl';
import { StavkaPorudzbineDialogComponent } from '../dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component';
import { StavkaPorudzbineService } from '../../services/stavkaPorudzbine.service';
import { StavkaPorudzbine } from '../../models/stavkaPorudzbine';

@Component({
  selector: 'app-stavka-porudzbine',
  templateUrl: './stavka-porudzbine.component.html',
  styleUrls: ['./stavka-porudzbine.component.css']
})
export class StavkaPorudzbineComponent implements OnInit {

  displayedColumns = ['id', 'redniBroj', 'kolicina', 'jedinicaMere', 'cena', 'porudzbina', 'artikl', 'actions'];
  dataSource: MatTableDataSource<StavkaPorudzbine>;

  @Input() selektovanaPorudzbina: Porudzbina;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public stavkaPorudzbineService: StavkaPorudzbineService,
              public dialog: MatDialog) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.selektovanaPorudzbina.id) {
      this.loadData();
    }
  }

  public loadData() {
    this.stavkaPorudzbineService.getStavkeZaPorudzbinu(this.selektovanaPorudzbina.id)
  .subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      //pretraga po nazivu ugnježdenog objekta
      this.dataSource.filterPredicate = (data, filter: string) => {
        const accumulator = (currentTerm, key) => {
          return key === 'artikl' ? currentTerm + data.artikl.naziv : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

        //sortiranje po nazivu ugnježdenog objekta
        this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'artikl': return data.artikl.naziv.toLocaleLowerCase();
          default: return data[property];
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  public openDialog(flag: number, id: number, redniBroj: number, kolicina: number, jedinicaMere: number,
    cena: number, porudzbina: Porudzbina, artikl: Artikl) {
    const dialogRef = this.dialog.open(StavkaPorudzbineDialogComponent, {
      data: {
        i: id, id: id, redniBroj: redniBroj, kolicina: kolicina, jedinicaMere: jedinicaMere,
        cena: cena, porudzbina: porudzbina, artikl: artikl
      }
    });
    dialogRef.componentInstance.flag = flag;
    if (flag == 1)
      dialogRef.componentInstance.data.porudzbina = this.selektovanaPorudzbina;

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
