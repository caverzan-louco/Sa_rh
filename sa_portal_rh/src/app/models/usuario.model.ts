export class Usuario {
  constructor(
    public id: number,
    public email: string,
    public senha: string,
    public tipo: string
  ) {}

  toMap(): {[key:string]:any} {
    return {
      id: this.id,
      email: this.email,
      senha: this.senha,
      tipo: this.tipo
    };
  }

  static fromMap(map:any): Usuario {
    return new Usuario(
      map.id,
      map.email,
      map.senha,
      map.tipo
    );
  }
}

