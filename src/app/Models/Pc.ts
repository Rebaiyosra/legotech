import { Article } from './Article';

export class Pc extends Article{
    public get tailleEcran(): number {
        return this._tailleEcran;
    }
    public set tailleEcran(value: number) {
        this._tailleEcran = value;
    }
    public get tailleCarteGraphique(): string {
        return this._tailleCarteGraphique;
    }
    public set tailleCarteGraphique(value: string) {
        this._tailleCarteGraphique = value;
    }
    public get tailleDisque(): number {
        return this._tailleDisque;
    }
    public set tailleDisque(value: number) {
        this._tailleDisque = value;
    }
    public get typeDisque(): string {
        return this._typeDisque;
    }
    public set typeDisque(value: string) {
        this._typeDisque = value;
    }
    public get processeur(): string {
        return this._processeur;
    }
    public set processeur(value: string) {
        this._processeur = value;
    }
    public get carteGraphiqe(): string {
        return this._carteGraphiqe;
    }
    public set carteGraphiqe(value: string) {
        this._carteGraphiqe = value;
    }
    public get tailleRam(): number {
        return this._tailleRam;
    }
    public set tailleRam(value: number) {
        this._tailleRam = value;
    }
    public get typeRam(): string {
        return this._typeRam;
    }
    public set typeRam(value: string) {
        this._typeRam = value;
    }
    public get etat(): string {
        return this._etat;
    }
    public set etat(value: string) {
        this._etat = value;
    }
  
    constructor(public _id: string,public _nom: string,public _prix: number, public _image: string,
        public _desc: string,public _qte: number,public _marque: string,public _type: string,private _etat: string,private _typeRam: string,
        private _tailleRam: number,private _carteGraphiqe: string, private _processeur: string,private _typeDisque: string,
        private _tailleDisque: number,private _tailleCarteGraphique: string,private _tailleEcran: number){
        super(_id,_nom,_prix,_image,_desc,_qte,_marque,_type);
    }
}