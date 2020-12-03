import { Article } from './Article';

export class DisqueDure extends Article{
    public get typeDisque(): number {
        return this._typeDisque;
    }
    public set typeDisque(value: number) {
        this._typeDisque = value;
    }
    public get capacité(): number {
        return this._capacité;
    }
    public set capacité(value: number) {
        this._capacité = value;
    }
  
    constructor(public _id: string,public _nom: string,public _prix: number, public _image: string,
        public _desc: string,public _qte: number,public _marque: string,public _type: string,private _capacité: number,private _typeDisque: number){
        super(_id,_nom,_prix,_image,_desc,_qte,_marque,_type);
    }
}