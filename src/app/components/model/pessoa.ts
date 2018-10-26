export class Pessoa{
    cpf: string;
    nome: string;
    email: string;
    enderecoDTO: Endereco = new Endereco();
}

class Endereco{
    cep: string;
    lodradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
}