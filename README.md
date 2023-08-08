
# HOFs Playground

Essa é uma aplicação JavaScript que simula um sistema de gerenciamento de um zoológico. É possível recuperar e filtrar várias informações a respeito dos animais, colaboradores e visitantes.

O foco desse projeto foi explorar a manipulação de arrays e objetos através de funcionalidades do JavaScript ES6, como as Higher Order Functions (HOFs), operador spread, desestruturação e arrow functions.

## Funcionalidades

A partir dos ![dados disponíveis](data/zoo_data.js), é possivel:

- Recuperar um array com todos os animais da espécie do ID consultado
- Se todos os animais de determinada espécie são mais velhos do que a idade consultada
- Recuperar colaboradores pelo primeiro ou último nome, e suas informações
- Recuperar quais as espécies de responsabilidade do colaborador consultado
- Verificar se um colaborador é gerente e quais pessoas ele supervisiona
- Contabilizar a quantidade de espécies no zoológico
- Recuperar o animal mais velho que seja gerenciado pelo colaborador consultado
- Calcular a receita total obtida da venda de ingressos, que varia com a idade dos visitantes
- Recuperar horários de funcionamento e se o zoológico está aberto no momento consultado
- Recuperar animais de cada espécie com filtro de localização, sexo e nome em ordem alfabética


## Tecnologias utilizadas

JavaScript, Jest


## Instalação local

Experimente o sistema! Para isso, siga os passos abaixo:

1. Clone o repositório 
```bash
  git clone git@github.com:lzaghi/HOFs-playground.git
```

2. Entre no diretório 
```bash
  cd HOFs-playground
```

3. Instale as dependências 
```bash
  npm install
```
4. Para rodar os testes
```bash
  npm test
```

