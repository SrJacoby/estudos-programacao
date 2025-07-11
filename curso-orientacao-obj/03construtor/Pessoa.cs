class Pessoa{
    // 1º Construtor

    public Pessoa(){
        Console.WriteLine("Bah!");
    }

    //2º Construtor

    public Pessoa(string nome){
        Console.WriteLine($"Olá, {nome}");
    }

    public Pessoa(string nome, int idade){
        Console.WriteLine($"Olá {nome}, você tem {idade} anos");
    }
}