import { Dobavljac } from './dobavljac';

export class Porudzbina {
    id: number;
    datum: Date;
    isporuceno: Date;
    placeno: boolean;
    iznos: number;
    dobavljac: Dobavljac;
}