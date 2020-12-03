import { Article } from './Article';

export class CarteMere extends Article{
    public get slotRam(): number {
        return this._slotRam;
    }
    public set slotRam(value: number) {
        this._slotRam = value;
    }
    public get wattage(): number {
        return this._wattage;
    }
    public set wattage(value: number) {
        this._wattage = value;
    }
    public get format(): string {
        return this._format;
    }
    public set format(value: string) {
        this._format = value;
    }
    public get ddr(): string {
        return this._ddr;
    }
    public set ddr(value: string) {
        this._ddr = value;
    }
  
    constructor(public _id: string,public _nom: string,public _prix: number, public _image: string,
        public _desc: string,public _qte: number,public _marque: string,public _type: string,private _ddr: string,private _format: string,
        private _wattage: number,private _slotRam: number){
        super(_id,_nom,_prix,_image,_desc,_qte,_marque,_type);
    }
}