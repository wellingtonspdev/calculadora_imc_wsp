# Calculadora de IMC - WSP Health

Aplicativo multiplataforma desenvolvido em React Native utilizando o ecossistema Expo. Este projeto tem como objetivo realizar o cálculo do Índice de Massa Corporal (IMC) com uma interface focada em padrões rigorosos de UX para mobile e desktop. A aplicação apresenta um design responsivo com tema dark nativo, formatação automática de input numérico (ex: inserção automática de ponto decimal na altura) e feedback visual dinâmico, onde o painel de resultados altera sua cor automaticamente de acordo com o grau de classificação do IMC (Magreza, Normal, Sobrepeso, Obesidade ou Obesidade Grave).

Este é um projeto acadêmico desenvolvido para o 4º semestre do curso de Desenvolvimento de Software Multiplataforma da FATEC.

## Tecnologias Utilizadas
- React Native
- Expo
- JavaScript
- StyleSheet (Flexbox)

## Pré-requisitos para Execução Local
Para testar e rodar este projeto em sua máquina, é necessário ter o **Node.js** instalado. Para a visualização do aplicativo, você precisará do aplicativo **Expo Go** instalado em um dispositivo físico (Android/iOS) ou um emulador Android/iOS configurado em sua máquina (como o Android Studio).

## Como Instalar e Rodar o Projeto

Abra o terminal de sua preferência e execute os comandos abaixo de forma sequencial:

1. Clone este repositório para a sua máquina local:
```bash
git clone https://github.com/wellingtonspdev/calculadora_imc_wsp.git

```

2. Acesse a pasta do projeto recém-clonado:

```bash
cd calculadora_imc_wsp

```

3. Instale todas as dependências necessárias listadas no package.json:

```bash
npm install

```

4. Inicie o servidor de desenvolvimento do Expo:

```bash
npx expo start

```

## Como Visualizar o Aplicativo

Após iniciar o servidor, um **QR Code** será exibido no seu terminal.

* **No celular físico:** Abra o aplicativo Expo Go e escaneie o QR Code.
* **No emulador Android:** Pressione a tecla `a` no terminal para que o Expo abra o aplicativo automaticamente no emulador ativo.
* **No navegador (Desktop UX):** Pressione a tecla `w` no terminal para visualizar a responsividade da aplicação na web.

---

Desenvolvido por Wellington Siqueira Porto.