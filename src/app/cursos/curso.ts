//classe
//crio a classe e depois ela tem que ser importada la no curso.service

export class curso{
    
    //atributos

    public nomeCurso!:string;
    public valor!:number;
    public areaCurso!:string;

    constructor(nome:string, valor:number, area:string){
        this.areaCurso = area,
        this.nomeCurso = nome,
        this.valor = valor

    }

}