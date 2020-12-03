import { Article } from './Article';

export class CarteGraphique extends Article{
    
    constructor(public _id: string,public _nom: string,public _prix: number, public _image: string,
        public _desc: string,public _qte: number,public _marque: string,public _type: string){
        super(_id,_nom,_prix,_image,_desc,_qte,_marque,_type);
    }
}