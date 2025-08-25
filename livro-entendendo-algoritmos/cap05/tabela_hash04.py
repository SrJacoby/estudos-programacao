#algoritmo de verificação de URL existente para carregamento de página web

cache = {}

def pega_pagina(url):
    if cache.get(url):
        return cache[url]
    else:
        dados = pega_dados_do_servidor(url)
        cache[url] = dados
        return dados
    
def pega_dados_do_servidor():
    url = None