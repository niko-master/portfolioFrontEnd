export class explaboral {
    explaboral_id: number;
    //  trabajoactual: string ;
    //  fechainicio: string;
    //  fechafin: string;
     descripcion!: string;
     tipoEmpleo!: string;    


    constructor (tipoEmpleo: string, descripcion: string){
        // this.trabajoactual = trabajoactual;
        // this.fechainicio = fechainicio;
        // this.fechafin = fechafin;
        this.tipoEmpleo = tipoEmpleo;
        this.descripcion = descripcion;
        
    }
}