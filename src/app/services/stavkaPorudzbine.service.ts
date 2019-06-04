import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { StavkaPorudzbine } from '../models/stavkaPorudzbine';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class StavkaPorudzbineService {
    
    stavkaPorudzbineService: StavkaPorudzbineService;
    private readonly API_URL = 'http://localhost:8083/stavkaPorudzbine/';
    private readonly API_URL_BYID = 'http://localhost:8083/stavkeZaPorudzbinaId/';

    dataChange: BehaviorSubject<StavkaPorudzbine[]> = 
    new BehaviorSubject<StavkaPorudzbine[]>([]);

    constructor(private httpClient: HttpClient) {}

    public getStavkeZaPorudzbinu(idPorudzbine): Observable<StavkaPorudzbine[]> {
        this.httpClient.get<StavkaPorudzbine[]>(this.API_URL_BYID + idPorudzbine)
        .subscribe(data => {
            this.dataChange.next(data);
        },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
        return this.dataChange.asObservable();
    }

    public addStavkaPorudzbine(stavkaPorudzbine: StavkaPorudzbine): void {
        this.httpClient.post(this.API_URL, stavkaPorudzbine).subscribe();
    }

    public updateStavkaPorudzbine(stavkaPorudzbine: StavkaPorudzbine): void {
        this.httpClient.put(this.API_URL, stavkaPorudzbine).subscribe();
    }

    public deleteStavkaPorudzbine(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }

}