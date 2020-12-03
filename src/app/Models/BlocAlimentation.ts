import { Article } from './Article';

export class BlocAlimentation extends Article{
    public get wattage(): number {
        return this._wattage;
    }
    public set wattage(value: number) {
        this._wattage = value;
    }

    constructor(public _id: string,public _nom: string,public _prix: number, public _image: string,
        public _desc: string,public _qte: number,public _marque: string,public _type: string,private _wattage: number){
        super(_id,_nom,_prix,_image,_desc,_qte,_marque,_type);
    }
}