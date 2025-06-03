const perguntas = [
    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ]
    },

    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ],
    },


    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ],
    },


    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ],
    },


    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ],
    },


    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ],
    },


    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ],
    },

    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ],
    },


    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

        ],
    },


    {
        pergunta: "Qual a primeria planta que ganhamos no jogo",
        respostas: [

            { id: 1, text: "Batatamina", correct: false },
            { id: 2, text: "Disparervilha", correct: false },
            { id: 3, text: "Girassol", correct: true },
            { id: 4, text: "Gelervilha", correct: false },

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

