class Pessoa{

    //Atributos

    public string? Nome;
    public int Idade;

    //Métodos

    //Método sem retorno
    public void Apresentacao(){
        Console.WriteLine($"Olá, meu nome é {Nome}");
    }

    //Método com retorno

    public string VerificarIdade(){
        return Idade >= 18 ? "Maior de idade" : "Menor de idade";
    }

}