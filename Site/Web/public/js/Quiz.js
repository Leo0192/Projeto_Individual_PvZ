const perguntas = [
    {
        pergunta: "Qual a primeria planta que ganhamos no jogo?",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ]
    },

    {
        pergunta: "Qual o primeiro zumbi que enfrentamos?",
        respostas: [

            { id: 1, text: "Zumbi de Gravata", correct: true },
            { id: 2, text: "Zumbi de Gravata cabeça de cone", correct: false },
            { id: 3, text: "Zumbi de Gravata cabeça de balde", correct: true },
            { id: 4, text: "Zumbi Saltador", correct: false },

        ],
    },


    {
        pergunta: "Qual o nome do humano que nos fornece dicas até o final do jogo?",
        respostas: [

            { id: 1, text: "Dave Doidão", correct: true },
            { id: 2, text: "Ana Nanão", correct: false },
            { id: 3, text: "Erika Etika", correct: false },
            { id: 4, text: "Bernardo Eduardo", correct: false },

        ],
    },


    {
        pergunta: "Qual dos seguintes famosos é representando dentro do jogo?",
        respostas: [

            { id: 1, text: "Michael Jordan", correct: false },
            { id: 2, text: "Michael Jackson", correct: true },
            { id: 3, text: "Morgan Freeman", correct: false },
            { id: 4, text: "Rihanna", correct: false },

        ],
    },


    {
        pergunta: "Em qual ano a primeira versão do jogo foi lançada?",
        respostas: [

            { id: 1, text: "2007", correct: false },
            { id: 2, text: "2010", correct: false },
            { id: 3, text: "2009", correct: true },
            { id: 4, text: "2012", correct: false },

        ],
    },


    {
        pergunta: "Qual o nome do líder dos zumbis?",
        respostas: [

            { id: 1, text: "Capitão Zumbão", correct: false },
            { id: 2, text: "General Zumboid", correct: false },
            { id: 3, text: "Dr Zumbão", correct: true },
            { id: 4, text: "Cientista Zumbin", correct: false },

        ],
    },


    {
        pergunta: "Qual a palavra que os zumbis mais falam?",
        respostas: [

            { id: 1, text: "Human (humano)", correct: false },
            { id: 2, text: "Brain (cerebro)", correct: true },
            { id: 3, text: "Attack (atacar)", correct: false },
            { id: 4, text: "Let’s Go (Vamos)", correct: false },

        ],
    },

    {
        pergunta: "Qual das seguintes Plantas não tem no jogo original?",
        respostas: [

            { id: 1, text: "Abobora", correct: false },
            { id: 2, text: "Cereja", correct: false },
            { id: 3, text: "Planta Carnivora", correct: false },
            { id: 4, text: "Espinafre", correct: true },

        ],
    },


    {
        pergunta: "O que os zumbis enviam para o usuário ao chegar no último nível de cada estágio?",
        respostas: [

            { id: 1, text: "Uma Carta", correct: true },
            { id: 2, text: "Uma nova planta maligna", correct: false },
            { id: 3, text: "Um objeto humano", correct: false },
            { id: 4, text: "Um doce", correct: false },

        ],
    },


    {
        pergunta: "Qual dos seguintes lugares nós não nos defendemos contra os zumbis?",
        respostas: [

            { id: 1, text: "Telhado", correct: false },
            { id: 2, text: "Quintal", correct: false },
            { id: 3, text: "Piscina", correct: false },
            { id: 4, text: "Garagem", correct: true },

        ],
    },

]


const PerguntaElement = document.getElementById("pergunta")
const answerButtons  = document.getElementById("answer_button")
const ProximoButton = document.getElementById("next_btn")

var perguntaAtualIndex = 0
var pontuacao = 0

function ComecarQuiz() {
    perguntaAtualIndex = 0
    pontuacao = 0
    ProximoButton.innerHTML = "Próxima"
    AparecerPergunta()
}

function resetState() {
    ProximoButton.style.display = "none"
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function AparecerPergunta() {
    resetState()
    let perguntaAtual = perguntas[perguntaAtualIndex]
    let PerguntaNo = perguntaAtualIndex + 1
    PerguntaElement.innerHTML = PerguntaNo + ". " + perguntaAtual.pergunta

    // acessando o array de respostas
    perguntaAtual.respostas.forEach((resposta) => {
        const button = document.createElement("button")
        button.innerHTML = resposta.text
        answerButtons.appendChild(button)
        button.dataset.id = resposta.id
        button.classList.add("btn")
        button.addEventListener("click", SelecionarResposta)
    });
}

function SelecionarResposta(e){
    const respostas = perguntas[perguntaAtualIndex].respostas
    const respostaCorreta = respostas.filter((resposta) => resposta.correct == true)[0]

    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.id == respostaCorreta.id
    if (isCorrect){
        selectBtn.classList.add("correct")
        pontuacao ++
    } else {
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true
    })
    ProximoButton.style.display = "block"
}

function handleNextButton(){
    perguntaAtualIndex++
    if (perguntaAtualIndex < perguntas.length){
        AparecerPergunta()
    } else {
        AparecerPontuacao()
    }
}

function AparecerPontuacao(){
    resetState()
    PerguntaElement.innerHTML = `Você acertou ${pontuacao} de ${perguntas.length}`
    guardarResultado();
}

ProximoButton.addEventListener("click", () => {
    if (perguntaAtualIndex < perguntas.length){
        handleNextButton()
        } else {
            ComecarQuiz()
        }
})

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function guardarResultado(){

    var fkUsuario = sessionStorage.ID_USUARIO;

    fetch("/quiz/inserirPontuacao", {
        method: "POST" ,
        headers: {
            "Content-Type": "application/json",
        }, 
        body:JSON.stringify({
            pontuacaoServer: pontuacao,
            fkUsuarioServer: fkUsuario
        }),
    })
      .then(response => {
        if (!response.ok) {
            return response.text().then(texto => {
                console.error("Erro na resposta do backend:", texto)
            });
        } else {
            console.log("Requisição bem-sucedida");
        }
      })
        .catch(erro => {
            console.error("Erro na requisição", erro);
        });
}

ComecarQuiz()

