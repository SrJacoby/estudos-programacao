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

#----------aula 03----------

# Gráfico simples

df_limpo['senioridade'].value_counts().plot(kind="bar", title="Distribuição de cargos")

# Gráfico com seaborn

import seaborn as sns

sns.barplot(data=df_limpo, x='senioridade', y='usd')

#Gráficos com matplotlib

import matplotlib.pyplot as plt

#Gráfico de barras de salário médio por senioridade

plt.figure(figsize=(8,5))
sns.barplot(data=df_limpo, x='senioridade', y='usd')
plt.title("Salário Médio por Senioridade")
plt.xlabel("Senioridade")
plt.ylabel("Salário Médio (USD)")
plt.show()

#Gráfico de barras de salário médio por senioridade ordenado

ordem = df_limpo.groupby('senioridade')['usd'].mean().sort_values(ascending=False).index
plt.figure(figsize=(8,5))
sns.barplot(data=df_limpo, x='senioridade', y='usd', order=ordem)
plt.title("Salário Médio por Senioridade")
plt.xlabel("Senioridade")
plt.ylabel("Salário Médio (USD)")
plt.show()

#Gráfico de histograma de distribuição do salário anual por senioridade

plt.figure(figsize=(8,4))
sns.histplot(df_limpo['usd'], bins = 50, kde=True)
plt.title("Distribuição dos salários anuais médios por senioridade")
plt.xlabel("Salário em USD")
plt.ylabel("Frequência")
plt.show()

#Gráfico de boxplot de salário em usd

plt.figure(figsize=(8,5))
sns.boxplot(x=df_limpo['usd'])
plt.title("Boxplot Salário")
plt.xlabel("Salário em USD")
plt.show()

#Gráfico de boxplot de salário por senioridade

ordem_senioridade = ['Júnior', 'Pleno', 'Sênior', 'Executivo']
plt.figure(figsize=(8,5))
sns.boxplot(x='senioridade', y='usd', data=df_limpo, order=ordem_senioridade)
plt.title("Boxplot Salário")
plt.xlabel("Salário em USD")
plt.show()

#Gráfico de boxplot de salário por senioridade com paleta personalizada

ordem_senioridade = ['Júnior', 'Pleno', 'Sênior', 'Executivo']
plt.figure(figsize=(8,5))
sns.boxplot(x='senioridade', y='usd', data=df_limpo, order=ordem_senioridade, palette='Set2', hue='senioridade')
plt.title("Boxplot Salário")
plt.xlabel("Salário em USD")
plt.show()

#Gráficos com plotly

import plotly.express as px

#Gráfico de barras de salário médio por senioridade

plt.figure(figsize=(8,5))
fig = px.bar(df_limpo.groupby('senioridade')['usd'].mean().sort_values(ascending=False).reset_index(),
             x='senioridade', y='usd',
             title='Salário Médio por Senioridade',
             labels={'senioridade': 'Senioridade', 'usd': 'Salário Médio (USD)'})
fig.show()

#Gráfico de barras de distribuição do tipo de trabalho

remoto_contagem = df_limpo['remoto'].value_counts().reset_index()
remoto_contagem.columns = ['tipo_trabalho', 'quantidade']
fig = px.pie(remoto_contagem, 
             values='quantidade', 
             names='tipo_trabalho', 
             title='Distribuição de Tipos de Trabalho',
             hole=0.5
             )
fig.update_traces(textinfo='percent+label')
fig.show()

#----------Exercício Aula 03 - Resolução----------

import pycountry

#converter o code

def get_iso3(country_code):
    try:
        return pycountry.countries.get(alpha_2=country_code).alpha_3
    except:
        return None

#pegando o cargo de data scientist e aplica a função de conversão nas linhas do dataframe

df_ds = df_limpo[df_limpo['cargo'] == 'Data Scientist'].copy()
df_ds['pais_iso3'] = df_ds['empresa'].apply(get_iso3)

#soma das médias dos salários

salario_medio_pais = df_ds.groupby('pais_iso3')['usd'].mean().reset_index()
salario_medio_pais.columns = ['pais_iso3', 'salario_medio']

#criação do gráfico

fig = px.choropleth(salario_medio_pais,
                    locations="pais_iso3",
                    locationmode='ISO-3',
                    color="salario_medio",
                    hover_name="pais_iso3",
                    title="Salário Médio de Cientista de Dados por País",
                    color_continuous_scale='RdYlGn')
fig.show()