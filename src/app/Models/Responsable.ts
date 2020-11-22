export class Responsable {
    public get poste(): string {
        return this._poste;
    }
    public set poste(value: string) {
        this._poste = value;
    }
    constructor(private _id: number,private _nom: string,private _prenom: string, 
        private _dateNaissance: Date,private _telephone: number,private _mail: string,private _poste: string){}

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
    public get dateNaissance(): Date {
        return this._dateNaissance;
    }
    public set dateNaissance(value: Date) {
        this._dateNaissance = value;
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