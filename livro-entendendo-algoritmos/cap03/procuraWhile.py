#Algortimo de procura de chave usando while

def procure_pela_chave(caixa_principal):
    pilha = main_box.crie_uma_pilha_para_busca()
    while pilha is not vazia:
        caixa = pilha.pegue_caixa()
        for item in caixa:
            if item.e_uma.caixa():
                pilha.append(item)
            elif item.e_uma_chave():
                print ("Achei a chave!")