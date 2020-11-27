export class Utilisateur {
   
    public get mdp(): string {
        return this._mdp;
    }
    public set mdp(value: string) {
        this._mdp = value;
    }
    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }
  
    public get sexe(): string {
        return this._sexe;
    }
    public set sexe(value: string) {
        this._sexe = value;
    }
    public get numCin(): number {
        return this._numCin;
    }
    public set numCin(value: number) {
        this._numCin = value;
    }
    public get codePostal(): number {
        return this._codePostal;
    }
    public set codePostal(value: number) {
        this._codePostal = value;
    }
   
    public get ville(): string {
        return this._ville;
    }
    public set ville(value: string) {
        this._ville = value;
    }
    public get gouver(): string {
        return this._gouver;
    }
    public set gouver(value: string) {
        this._gouver = value;
    }
    public get adresse(): string {
        return this._adresse;
    }
    public set adresse(value: string) {
        this._adresse = value;
    }
    constructor(private _id: number,private _nom: string,private _prenom: string, 
        private _telephone: number,private _mail: string,private _adresse: string,private _gouver: string,private _ville: string,
        private _codePostal: number,private _numCin: number,private _sexe: string,
        private _role: string,private _mdp: string){}

    public get mail(): string {
        return this._mail;
    }
    public set mail(value: string) {
        this._mail = value;
    }
   
    public get telephone(): number {
        return this._telephone;
    }
    public set telephone(value: number) {
        this._telephone = value;
    }
  
    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
}