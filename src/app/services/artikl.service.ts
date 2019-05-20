import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artikl } from '../models/artikl';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ArtiklService {

  private readonly API_URL = 'http://localhost:8083/artikl/';

  dataChange: BehaviorSubject<Artikl[]> = new BehaviorSubject<Artikl[]>([]);
  constructor(private httpClient: HttpClient) { }

  public getAllArtikl(): Observable<Artikl[]> {
    this.httpClient.get<Artikl[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.dataChange.asObservable();
  }

  public addArtikl(artikl: Artikl): void {
    this.httpClient.post(this.API_URL, artikl).subscribe();
  }

  public updateArtikl(artikl: Artikl): void {
    this.httpClient.put(this.API_URL, artikl).subscribe();
  }

  public deleteArtikl(id: number): void {
    console.log(this.API_URL + id);
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
