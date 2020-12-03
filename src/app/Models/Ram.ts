import { Article } from './Article';

export class AccesoireInfo extends Article{
    public get ddr(): string {
        return this._ddr;
    }
    public set ddr(value: string) {
        this._ddr = value;
    }
    public get stockage(): number {
        return this._stockage;
    }
    public set stockage(value: number) {
        this._stockage = value;
    }
    public get frequence(): string {
        return this._frequence;
    }
    public set frequence(value: string) {
        this._frequence = value;
    }
   
    constructor(public _id: string,public _nom: string,public _prix: number, public _image: string,
        public _desc: string,public _qte: number,public _marque: string,public _type: string,private _frequence: string,private _stockage: number
        ,private _ddr: string){
        super(_id,_nom,_prix,_image,_desc,_qte,_marque,_type);
    }
}