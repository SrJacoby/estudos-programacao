import pandas as pd

df = pd.read_csv("https://raw.githubusercontent.com/guilhermeonrails/data-jobs/refs/heads/main/salaries.csv")
df.head(10)
df.info()
df.describe()

df.shape
linhas, colunas = df.shape[0], df.shape[1]
print("A tabela tem ", linhas, "linhas e ", colunas, "colunas")

df.columns = ['ano', 'senioridade', 'contrato', 
'cargo', 'salario', 'moeda', 'usd', 'residencia', 
'remoto', 'empresa', 'tamanho_empresa']
df["senioridade"].value_counts()

df.describe(include='object')

senioridade_map = {
    'SE': 'Sênior',
    'MI': 'Pleno',
    'EN': 'Júnior',
    'EX': 'Executivo'
}
df['senioridade'] = df['senioridade'].replace(senioridade_map)
print(df["senioridade"].value_counts())

contrato_map = {
    'FT': 'Tempo Integral',
    'PT': 'Tempo Parcial',
    'CT': 'Contrato',
    'FL': 'Freelance'
}
df['contrato'] = df['contrato'].map(contrato_map)
print(df["contrato"].value_counts())

tamanho_empresa_map = {
    'S': 'Pequena',
    'M': 'Média',
    'L': 'Grande'
}
df['tamanho_empresa'] = df['tamanho_empresa'].replace(tamanho_empresa_map)
print(df["tamanho_empresa"].value_counts())

remoto_map = {
    0: 'Presencial',
    50: 'Híbrido',
    100: 'Remoto'
}
df['remoto'] = df['remoto'].map(remoto_map)
print(df["remoto"].value_counts())

df.describe(include='object')
df.describe()
df.head()