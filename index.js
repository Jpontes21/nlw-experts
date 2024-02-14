const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento backend.",
        "Uma linguagem de marcação para criar páginas web.",
        "Uma linguagem de programação utilizada para criar interações dinâmicas em páginas web.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 5;",
        "myVar := 5;",
        "int myVar = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função de 'console.log()' em JavaScript?",
      respostas: [
        "Exibe uma mensagem de erro no console do navegador.",
        "Define um breakpoint para depuração do código.",
        "Exibe uma mensagem no console do navegador.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "+=",
        "=>",
        "=",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado que representa um objeto.",
        "Um tipo de dado que representa um valor booleano.",
        "Um bloco de código que pode ser executado e reutilizado.",
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "função myFunction() {}",
        "def myFunction() {}",
        "function myFunction() {}",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Comentário aqui",
        "<!-- Comentário aqui -->",
        "/* Comentário aqui */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função de 'document.getElementById()' em JavaScript?",
      respostas: [
        "Obtém um elemento HTML pelo seu ID.",
        "Define o estilo CSS de um elemento HTML.",
        "Cria um novo elemento HTML no documento.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método para adicionar um evento a um elemento HTML em JavaScript?",
      respostas: [
        "addEvent()",
        "addEventListener()",
        "attachEvent()",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  //loop, acesso e aplicações doc(para usar as funções)
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    //buscar, modificar, laço.
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      //valores e set
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        //true ou falso, bool verificando
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    } 
    //removendo resposta A e usando nova
    quizItem.querySelector('dl dt').remove()
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }