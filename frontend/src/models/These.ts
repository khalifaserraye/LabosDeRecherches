
export class These {
    url : string;
    title : string;
    validated : boolean;
    encadreur : string;
    year : string;
    emailPromoteur : string;
    description: string;
    objectif : string;
    results : string;
    

    constructor(url : string ,message: string , valide : boolean , chercheur : string , laboratoire : string , emailPromoteur : string ,description: string,
        objectif : string,
        results : string) {
        this.title = message;
        this.validated = valide;
        this.encadreur = chercheur;
        this.year = laboratoire;
        this.emailPromoteur = emailPromoteur ;
        this.url = url ;
        this.description = description;
        this.objectif = objectif;
        this.results = results;

    }
    
}