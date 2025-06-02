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

let currentQuestionIndex = 0
let pontuacao = 0

function ComecarQuiz() {
    currentQuestionIndex = 0
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
    let currentQuestion = perguntas[currentQuestionIndex]
    let PerguntaNo = currentQuestionIndex + 1
    PerguntaElement.innerHTML = PerguntaNo + ". " + currentQuestion.pergunta

    // acessando o array de respostas
    currentQuestion.respostas.forEach((resposta) => {
        const button = document.createElement("button")
        button.innerHTML = resposta.text
        answerButtons.appendChild(button)
        button.dataset.id = resposta.id
        button.classList.add("btn")
        button.addEventListener("click", SelecionarResposta)
    });
}

function SelecionarResposta(e){
    const respostas = perguntas[currentQuestionIndex].respostas
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
    currentQuestionIndex++
    if (currentQuestionIndex < perguntas.length){
        AparecerPergunta()
    } else {
        AparecerPontuacao()
    }
}

function AparecerPontuacao(){
    resetState()
    PerguntaElement.innerHTML = `Você acertou ${pontuacao} de ${perguntas.length}`
    // ProximoButton.innerHTML = "Jogar De Novo"
    // ProximoButton.style.display = "block"
}

ProximoButton.addEventListener("click", () => {
    if (currentQuestionIndex < perguntas.length){
        handleNextButton()
        } else {
            ComecarQuiz()
        }
})

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

ComecarQuiz()

