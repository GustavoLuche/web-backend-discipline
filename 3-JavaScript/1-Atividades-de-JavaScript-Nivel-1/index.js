// Atividades de Javascript - Nível 1

// 1. Escreva uma função que calcule e retorne o fatorial de um número.
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
}

/* 2. Escreva uma função em Javascript que retorne uma String contendo uma sequência de N mensagens 
  do texto informado pelo usuário. O valor de N e a mensagem são informados por parâmetro. */
function gerarSequenciaMensagens(mensagem, quantidade) {
  let sequencia = "";
  for (let i = 0; i < quantidade; i++) {
    sequencia += mensagem + "\n";
  }
  return sequencia;
}

/* 3. Escreva uma função que receba 2 valores e uma operação básica: adição, subtração, 
  multiplicação e divisão e retorne o resultado da operação. Observação: Faça a validação 
  para prevenir a divisão por 0 e também para garantir que a operação informada é válida. 
  Retorne nulo para os casos de erro. */
function calcularOperacao(valor1, valor2, operacao) {
  let resultado;

  // Validar operação
  if (operacao === "+") {
    resultado = valor1 + valor2;
  } else if (operacao === "-") {
    resultado = valor1 - valor2;
  } else if (operacao === "*") {
    resultado = valor1 * valor2;
  } else if (operacao === "/") {
    if (valor2 !== 0) {
      resultado = valor1 / valor2;
    } else {
      return null;
    }
  } else {
    return null;
  }

  return resultado;
}

/* 4. Escreva uma função que retorne um vetor contendo o resultado da tabuada de um número 
recebido por parâmetro. Cada resultado na respectiva posição do índice. */
function calcularTabuada(numero) {
  const tabuada = [];

  for (let i = 1; i <= 10; i++) {
    tabuada.push(numero * i);
  }

  return tabuada;
}

/* 5. Escreva uma função que retorne um número fornecido pelo usuário, porém invertido. Por exemplo, 
o usuário fornece o número 875 e a função retorna o número 578. O retorno deve ser um valor inteiro. */
function inverterNumero(numero) {
  const numeroString = String(numero);
  const numeroInvertidoString = numeroString.split("").reverse().join("");
  const numeroInvertido = parseInt(numeroInvertidoString, 10);
  return numeroInvertido;
}

/* 6. Escreva uma função que permita contar o número de vogais contidas em uma string fornecida por parâmetro. 
Por exemplo, o usuário informa a string “Brocolis”, e a função retorna o número 3 (há 3 vogais nessa palavra). */
function contarVogais(str) {
  const vogais = ["a", "e", "i", "o", "u"];
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
}
/* 7. Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se a sequência está 
bem formada ou não. O retorno deve ser um valor lógico. */
function verificarSequencia(sequencia) {
  const pilha = [];
  const pares = {
    "(": ")",
    "[": "]",
  };

  for (let i = 0; i < sequencia.length; i++) {
    const char = sequencia[i];

    if (char === "(" || char === "[") {
      pilha.push(char);
    } else if (char === ")" || char === "]") {
      const ultimoAberto = pilha.pop();
      if (!ultimoAberto || pares[ultimoAberto] !== char) {
        return false;
      }
    }
  }

  return pilha.length === 0;
}

/* 8. Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e idade) 
aleatórios gerados automaticamente. */
function gerarListaObjetosAleatorios(numero) {
  const listaObjetos = [];

  for (let i = 0; i < numero; i++) {
    const objeto = {
      id: i + 1,
      nome: gerarNomeAleatorio(),
      idade: gerarIdadeAleatoria()
    };
    listaObjetos.push(objeto);
  }
  return listaObjetos;
}

function gerarIdAleatorio() {
  return Math.floor(Math.random() * 1000);
}

function gerarNomeAleatorio() {
  const nomes = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Hannah', 'Isaac', 'Julia'];
  return nomes[Math.floor(Math.random() * nomes.length)];
}

function gerarIdadeAleatoria() {
  return Math.floor(Math.random() * 30) + 18;
}

/* 9. Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os dados 
por um dos atributos informados por parâmetros. */
function ordenarListaPorAtributo(lista, atributo) {
  lista.sort((a, b) => {
    if (a[atributo] < b[atributo]) {
      return -1;
    } else if (a[atributo] > b[atributo]) {
      return 1;
    } else {
      return 0;
    }
  });
}