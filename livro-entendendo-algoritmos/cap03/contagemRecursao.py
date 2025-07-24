def regressiva(i):
    print(i)
    if i <= 1: #caso-base
        return
    else: #caso recursivo
        regressiva(i-1)

regressiva(5)
