import { Article } from './Article';

export class AccesoireInfo extends Article{
    public get format(): string {
        return this._format;
    }
    public set format(value: string) {
        this._format = value;
    }
   
    constructor(public _id: string,public _nom: string,public _prix: number, public _image: string,
        public _desc: string,public _qte: number,public _marque: string,public _type: string,private _format: string){
        super(_id,_nom,_prix,_image,_desc,_qte,_marque,_type);
    }
}