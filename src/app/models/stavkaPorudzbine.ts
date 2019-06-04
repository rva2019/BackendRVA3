import { Porudzbina } from './porudzbina';
import { Artikl } from './artikl';

export class StavkaPorudzbine {
    id: number;
    redniBroj: number;
    kolicina: number;
    jedinicaMere: string;
    cena: number;
    porudzbina: Porudzbina;
    artikl: Artikl;
}