export abstract class  Article {
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    public get marque(): string {
        return this._marque;
    }
    public set marque(value: string) {
        this._marque = value;
    }
    public get qte(): number {
        return this._qte;
    }
    public set qte(value: number) {
        this._qte = value;
    }
    constructor(public _id: string,public _nom: string,public _prix: number, public _image: string,
        public _desc: string,public _qte: number,public _marque: string,public _type: string){}
        public get nom(): string {
            return this._nom;
        }
        public set nom(value: string) {
            this._nom = value;
        }
    
        
        public get image(): string {
            return this._image;
        }
        public set image(value: string) {
            this._image = value;
        } 
        public get prix(): number {
            return this._prix;
        }
        public set prix(value: number) {
            this._prix = value;
        }
       
        public get desc(): string {
            return this._desc;
        }
        public set desc(value: string) {
            this._desc = value;
        }
      
    }