export class Admin {
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
    constructor(private _id: number,private _nom: string,private _prenom: string, 
        private _telephone: number,private _mail: string,
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