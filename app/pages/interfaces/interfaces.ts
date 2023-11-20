export interface IDocentes {
    id: number,
    nombre: string,
    email: string,
    password: string,
    asignatura1: string,
    asignatura2: string,
    sede: string
}
export interface IDocente {
    nombre: string,
    email: string,
    password: string,
    asignatura1: string,
    asignatura2: string,
    sede: string
}

export interface IAlumnos {
    id: number,
    nombre: string,
    email: string,
    password: string,
    carrera: string,
    sede: string
}

export interface IAlumno {
    nombre: string,
    email: string,
    password: string,
    carrera: string,
    sede: string
}

//Interface para la respuesta de la Api Feriados
export interface ApiFer{
    status: string;
    data: Data[];
}

export interface Data{
    date: number;
    title: string;
    type: string;
    inalienable: boolean;
    extra: string;
}

export interface Users{
    id: number;
    username: string;
    password: string; 
}

//Generar QR CODE BAR
export interface IQRs{
    id:number;
    contenido:String;
    correoProfesor:String;
    asignatura:String;
    fechaCreacion:String;
}


export interface IQR{
    contenido:String;
    correoProfesor:String;
    asignatura:String;
    fechaCreacion:String;
}