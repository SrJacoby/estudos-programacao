#algoritmo para verificar voto

voted = {}

def verifica_leitor(nome):
    if voted.get(nome):
        print("Mande embora!")
    else:
        voted[nome] = True
        print("Deixe votar!")

verifica_leitor("Tom")
verifica_leitor("Mike")
verifica_leitor("Mike")