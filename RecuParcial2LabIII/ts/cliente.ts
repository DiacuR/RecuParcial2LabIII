namespace Negocio {
    export enum Sexo{
        Male,
        Female
    };
    export class Cliente extends Persona {
        
        public edad:number;
        public sexo:Sexo;    

        constructor(id:number,nombre:string,apellido:string,edad:number,sexo:Sexo){
            super(id,nombre,apellido)
            this.edad = edad;
            this.sexo = sexo
            
        }
    
    }
}