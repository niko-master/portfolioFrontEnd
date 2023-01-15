export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string ;
    telefono: string;
    email: string;
    sobremi: string;

    constructor (nombre: string, apellido: string, img: string, telefono: string, email: string, sobremi: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.telefono = telefono;
        this.email = email;
        this.sobremi = sobremi;
    }
}