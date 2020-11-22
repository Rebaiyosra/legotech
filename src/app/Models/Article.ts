export class Article {
    constructor(private _id: number,private _libelle: string,private _prix: number, 
        private _desc: string,private _qte: number,private _image: string,private _dispo: boolean){}
    public get dispo(): boolean {
        return this._dispo;
    }
    public set dispo(value: boolean) {
        this._dispo = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get qte(): number {
        return this._qte;
    }
    public set qte(value: number) {
        this._qte = value;
    }
    public get desc(): string {
        return this._desc;
    }
    public set desc(value: string) {
        this._desc = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get libelle(): string {
        return this._libelle;
    }
    public set libelle(value: string) {
        this._libelle = value;
    }
   
   

  
   
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
}