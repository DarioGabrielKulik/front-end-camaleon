export interface Usuario{
    nombre:string
    email:string
    password:string
}

export interface Mensaje{
    mensaje:string
    permisos:boolean
}

export interface Login{
    id:string
    nombre:string
    permisos:boolean
    roles:string
}