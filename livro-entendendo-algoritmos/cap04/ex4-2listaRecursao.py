#algoritmo para contar valores de lista usando recursão

def contar(lista):
    if lista == []:
        return 0
    return 1 + contar(lista[1:])

print(contar([2,3]))