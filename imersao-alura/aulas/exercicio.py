#----------aula 01----------

import pandas as pd

df = pd.read_csv("https://raw.githubusercontent.com/guilhermeonrails/data-jobs/refs/heads/main/salaries.csv")
df.head(10)
df.info()
df.describe()

df.shape
linhas, colunas = df.shape[0], df.shape[1]
print("A tabela tem ", linhas, "linhas e ", colunas, "colunas")

# Troca de nomes das colunas

df.columns = ['ano', 'senioridade', 'contrato', 
'cargo', 'salario', 'moeda', 'usd', 'residencia', 
'remoto', 'empresa', 'tamanho_empresa']
df["senioridade"].value_counts()

df.describe(include='object')

# Troca de nome de valores de algumas colunas

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

#----------aula 02----------

import numpy as np

print(df.isnull().sum())
print(df['ano'].unique())
print(df[df.isnull().any(axis=1)])

# Limpeza de nan

df_limpo = df.dropna()
print(df_limpo.isnull().sum())

# Conversão de valores
df_limpo = df_limpo.assign(ano = df_limpo['ano'].astype('int64'))

print(df_limpo.info())

# Criação de um DataFrame teste

df_salarios = pd.DataFrame({
    'nome': ["Jacoby", "Gimenez", "Obalski", "Garrido", "Miguel"],
    'salario': [2000, np.nan, 3000, 4000, np.nan]
})

# Calcula média

df_salarios['salario_media'] = df_salarios['salario'].fillna(df_salarios['salario'].mean())

# Calcula mediana

df_salarios['salario_mediana'] = df_salarios['salario'].fillna(df_salarios['salario'].median())

print(df_salarios)

# Criação de um DataFrame teste

df_temperatura = pd.DataFrame({
    'dia': ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    'temperatura': [30, 32, np.nan, np.nan, 32]
})

# Preenche antes

df_temperatura['preenchido_ffill'] = df_temperatura['temperatura'].ffill()

# Preenche depois

df_temperatura['preenchido_bfill'] = df_temperatura['temperatura'].bfill()

print(df_temperatura)

# Criação de um DataFrame teste

df_cidades = pd.DataFrame({
    'nome': ["Beatles", "Rolling Stones", "Black Sabbath", "Roy Orbison"],
    'cidade': ["Liverpool", "Londres", "Birmigham", np.nan]
})

# Padroniza um texto para dados nan

df_cidades['cidade_preenchida'] = df_cidades['cidade'].fillna("Não informado")

print(df_cidades)