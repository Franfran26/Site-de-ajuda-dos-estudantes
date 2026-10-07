/* ==================================================
CONSTRUINDO DESTINOS DO ENSINO
SISTEMA INTERATIVO
================================================== */

/* ==================================================
BANCO DE MATÉRIAS
================================================== */

const materias = {

/* ==================================================
   MATEMÁTICA
================================================== */

matematica: {

    nome: "Matemática",

    icone: "📐",

    descricao:
        "Treine lógica, números, porcentagem e raciocínio.",

    conteudos: [

        {
            titulo: "Frações",

            explicacao:
                "Uma fração representa uma parte de um todo. O número de cima é o numerador e o número de baixo é o denominador.",

            exemplo:
                "Na fração 3/4, temos três partes de um total dividido em quatro partes iguais."
        },

        {
            titulo: "Porcentagem",

            explicacao:
                "Porcentagem representa uma quantidade em relação a 100.",

            exemplo:
                "25% significa 25 partes de cada 100."
        },

        {
            titulo: "Equações",

            explicacao:
                "Uma equação apresenta uma igualdade e pode possuir um valor desconhecido.",

            exemplo:
                "Em x + 5 = 10, descobrimos que x = 5."
        }

    ],

    perguntas: [

        {
            pergunta:
                "Quanto é 25% de 100?",

            alternativas: [
                "10",
                "25",
                "50",
                "75"
            ],

            resposta: 1,

            explicacao:
                "25% de 100 é 25."
        },

        {
            pergunta:
                "Quanto é 7 × 8?",

            alternativas: [
                "48",
                "54",
                "56",
                "64"
            ],

            resposta: 2,

            explicacao:
                "7 multiplicado por 8 é igual a 56."
        },

        {
            pergunta:
                "Qual é o resultado de 20 ÷ 4?",

            alternativas: [
                "4",
                "5",
                "6",
                "8"
            ],

            resposta: 1,

            explicacao:
                "20 dividido por 4 é igual a 5."
        },

        {
            pergunta:
                "Qual é a metade de 80?",

            alternativas: [
                "20",
                "30",
                "40",
                "50"
            ],

            resposta: 2,

            explicacao:
                "A metade de 80 é 40."
        },

        {
            pergunta:
                "Qual número é maior?",

            alternativas: [
                "0,5",
                "0,25",
                "0,75",
                "0,1"
            ],

            resposta: 2,

            explicacao:
                "0,75 é maior que 0,5, 0,25 e 0,1."
        }

    ]

},

/* ==================================================
   PORTUGUÊS
================================================== */

portugues: {

    nome: "Português",

    icone: "📚",

    descricao:
        "Pratique leitura, escrita, gramática e interpretação.",

    conteudos: [

        {
            titulo: "Substantivos",

            explicacao:
                "Substantivos são palavras que dão nome a pessoas, lugares, objetos, animais, sentimentos e ideias.",

            exemplo:
                "Casa, estudante, Brasil e alegria são substantivos."
        },

        {
            titulo: "Interpretação",

            explicacao:
                "Interpretar significa compreender as informações e ideias presentes em um texto.",

            exemplo:
                "Leia o texto com atenção e tente identificar sua ideia principal."
        },

        {
            titulo: "Pontuação",

            explicacao:
                "Os sinais de pontuação ajudam a organizar as frases.",

            exemplo:
                "O ponto de interrogação é utilizado em perguntas."
        }

    ],

    perguntas: [

        {
            pergunta:
                "Qual palavra é um substantivo?",

            alternativas: [
                "Correr",
                "Bonito",
                "Escola",
                "Rapidamente"
            ],

            resposta: 2,

            explicacao:
                "Escola é um substantivo porque nomeia um lugar."
        },

        {
            pergunta:
                "Qual sinal usamos normalmente no final de uma pergunta?",

            alternativas: [
                ".",
                "!",
                "?",
                ","
            ],

            resposta: 2,

            explicacao:
                "O ponto de interrogação (?) indica uma pergunta."
        },

        {
            pergunta:
                "Qual palavra é um verbo?",

            alternativas: [
                "Correr",
                "Casa",
                "Azul",
                "Alegria"
            ],

            resposta: 0,

            explicacao:
                "Correr indica uma ação e é um verbo."
        },

        {
            pergunta:
                "Qual alternativa está escrita corretamente?",

            alternativas: [
                "Excessão",
                "Exceção",
                "Esceção",
                "Eceção"
            ],

            resposta: 1,

            explicacao:
                "A forma correta é exceção."
        },

        {
            pergunta:
                "O que significa interpretar um texto?",

            alternativas: [
                "Copiar o texto",
                "Ignorar as informações",
                "Compreender suas ideias",
                "Apagar as palavras"
            ],

            resposta: 2,

            explicacao:
                "Interpretar é compreender as ideias e informações apresentadas."
        }

    ]

},

/* ==================================================
   CIÊNCIAS
================================================== */

ciencias: {

    nome: "Ciências",

    icone: "🔬",

    descricao:
        "Descubra como funciona a natureza e o mundo ao nosso redor.",

    conteudos: [

        {
            titulo: "Sistema Solar",

            explicacao:
                "O Sistema Solar é formado pelo Sol e pelos corpos celestes que orbitam ao seu redor.",

            exemplo:
                "A Terra é um dos planetas do Sistema Solar."
        },

        {
            titulo: "Cadeia alimentar",

            explicacao:
                "A cadeia alimentar representa relações de alimentação entre os seres vivos.",

            exemplo:
                "Uma planta pode servir de alimento para um gafanhoto."
        },

        {
            titulo: "Corpo humano",

            explicacao:
                "Nosso corpo possui sistemas que trabalham juntos.",

            exemplo:
                "O sistema respiratório participa das trocas gasosas."
        }

    ],

    perguntas: [

        {
            pergunta:
                "Qual planeta é conhecido como planeta vermelho?",

            alternativas: [
                "Vênus",
                "Marte",
                "Júpiter",
                "Saturno"
            ],

            resposta: 1,

            explicacao:
                "Marte possui uma aparência avermelhada."
        },

        {
            pergunta:
                "Qual estrela está no centro do Sistema Solar?",

            alternativas: [
                "Lua",
                "Sirius",
                "Sol",
                "Marte"
            ],

            resposta: 2,

            explicacao:
                "O Sol é a estrela no centro do Sistema Solar."
        },

        {
            pergunta:
                "Qual órgão é responsável por bombear o sangue?",

            alternativas: [
                "Pulmão",
                "Coração",
                "Estômago",
                "Rim"
            ],

            resposta: 1,

            explicacao:
                "O coração bombeia o sangue pelo corpo."
        },

        {
            pergunta:
                "Qual destes seres produz seu próprio alimento através da fotossíntese?",

            alternativas: [
                "Planta",
                "Cachorro",
                "Peixe",
                "Gato"
            ],

            resposta: 0,

            explicacao:
                "As plantas realizam fotossíntese e produzem seu próprio alimento."
        },

        {
            pergunta:
                "Qual gás é essencial para nossa respiração?",

            alternativas: [
                "Oxigênio",
                "Hélio",
                "Neônio",
                "Hidrogênio"
            ],

            resposta: 0,

            explicacao:
                "O oxigênio é essencial para a respiração humana."
        }

    ]

},

/* ==================================================
   HISTÓRIA
================================================== */

historia: {

    nome: "História",

    icone: "🏛️",

    descricao:
        "Conheça acontecimentos que ajudam a entender nossa sociedade.",

    conteudos: [

        {
            titulo: "Independência do Brasil",

            explicacao:
                "O Brasil declarou sua independência de Portugal em 1822.",

            exemplo:
                "A Independência é associada ao dia 7 de setembro de 1822."
        },

        {
            titulo: "Abolição",

            explicacao:
                "A Lei Áurea aboliu legalmente a escravidão no Brasil em 1888.",

            exemplo:
                "A abolição ocorreu após um longo processo de lutas e transformações sociais."
        },

        {
            titulo: "Brasil Colonial",

            explicacao:
                "O período colonial foi marcado pela presença portuguesa e pela exploração econômica.",

            exemplo:
                "A produção de açúcar teve grande importância econômica."
        }

    ],

    perguntas: [

        {
            pergunta:
                "Em que ano ocorreu a Independência do Brasil?",

            alternativas: [
                "1500",
                "1822",
                "1888",
                "1900"
            ],

            resposta: 1,

            explicacao:
                "A Independência do Brasil ocorreu em 1822."
        },

        {
            pergunta:
                "Em que ano foi assinada a Lei Áurea?",

            alternativas: [
                "1822",
                "1850",
                "1888",
                "1930"
            ],

            resposta: 2,

            explicacao:
                "A Lei Áurea foi assinada em 1888."
        },

        {
            pergunta:
                "Quem declarou a Independência do Brasil?",

            alternativas: [
                "Dom Pedro",
                "Tiradentes",
                "Getúlio Vargas",
                "Pedro Álvares Cabral"
            ],

            resposta: 0,

            explicacao:
                "Dom Pedro declarou a Independência do Brasil em 1822."
        },

        {
            pergunta:
                "Qual produto teve grande importância na economia colonial brasileira?",

            alternativas: [
                "Açúcar",
                "Petróleo",
                "Computadores",
                "Automóveis"
            ],

            resposta: 0,

            explicacao:
                "A produção de açúcar teve grande importância durante o período colonial."
        },

        {
            pergunta:
                "Qual data é associada à Independência do Brasil?",

            alternativas: [
                "1º de janeiro",
                "7 de setembro",
                "15 de novembro",
                "12 de outubro"
            ],

            resposta: 1,

            explicacao:
                "A Independência do Brasil é celebrada em 7 de setembro."
        }

    ]

},

/* ==================================================
   GEOGRAFIA
================================================== */

geografia: {

    nome: "Geografia",

    icone: "🌎",

    descricao:
        "Explore o planeta, o espaço geográfico, clima e população.",

    conteudos: [

        {
            titulo: "Relevo",

            explicacao:
                "O relevo representa as diferentes formas da superfície terrestre.",

            exemplo:
                "Montanhas, planaltos e planícies são formas de relevo."
        },

        {
            titulo: "Clima",

            explicacao:
                "Clima representa as condições atmosféricas observadas durante longos períodos.",

            exemplo:
                "O clima de uma região pode ser tropical, polar, desértico, entre outros."
        },

        {
            titulo: "População",

            explicacao:
                "A Geografia também estuda a distribuição das pessoas pelo território.",

            exemplo:
                "Algumas áreas possuem alta densidade populacional."
        }

    ],

    perguntas: [

        {
            pergunta:
                "Qual destes é uma forma de relevo?",

            alternativas: [
                "Montanha",
                "Chuva",
                "Temperatura",
                "Vento"
            ],

            resposta: 0,

            explicacao:
                "Montanha é uma forma de relevo."
        },

        {
            pergunta:
                "Qual é o maior país da América do Sul em território?",

            alternativas: [
                "Brasil",
                "Argentina",
                "Chile",
                "Peru"
            ],

            resposta: 0,

            explicacao:
                "O Brasil é o maior país da América do Sul em extensão territorial."
        },

        {
            pergunta:
                "Qual oceano banha a costa brasileira?",

            alternativas: [
                "Pacífico",
                "Índico",
                "Atlântico",
                "Ártico"
            ],

            resposta: 2,

            explicacao:
                "A costa brasileira é banhada pelo Oceano Atlântico."
        },

        {
            pergunta:
                "O que é clima?",

            alternativas: [
                "Uma forma de relevo",
                "Conjunto de condições atmosféricas de longo prazo",
                "Uma população",
                "Um continente"
            ],

            resposta: 1,

            explicacao:
                "Clima corresponde ao comportamento médio das condições atmosféricas durante longos períodos."
        },

        {
            pergunta:
                "Qual destes é um continente?",

            alternativas: [
                "Brasil",
                "Amazonas",
                "África",
                "Atlântico"
            ],

            resposta: 2,

            explicacao:
                "A África é um continente."
        }

    ]

},

/* ==================================================
   INGLÊS
================================================== */

ingles: {

    nome: "Inglês",

    icone: "🇺🇸",

    descricao:
        "Aprenda palavras e expressões básicas da língua inglesa.",

    conteudos: [

        {
            titulo: "Greetings",

            explicacao:
                "Greetings são cumprimentos utilizados em conversas.",

            exemplo:
                "Hello significa Olá e Good morning significa Bom dia."
        },

        {
            titulo: "Verb to be",

            explicacao:
                "O verbo to be pode significar ser ou estar.",

            exemplo:
                "I am a student significa Eu sou um estudante."
        },

        {
            titulo: "Vocabulário",

            explicacao:
                "Aprender palavras do cotidiano ajuda a desenvolver o vocabulário.",

            exemplo:
                "Book significa livro e school significa escola."
        }

    ],

    perguntas: [

        {
            pergunta:
                "O que significa 'book'?",

            alternativas: [
                "Escola",
                "Livro",
                "Professor",
                "Mesa"
            ],

            resposta: 1,

            explicacao:
                "Book significa livro."
        },

        {
            pergunta:
                "O que significa 'hello'?",

            alternativas: [
                "Tchau",
                "Obrigado",
                "Olá",
                "Desculpa"
            ],

            resposta: 2,

            explicacao:
                "Hello significa Olá."
        },

        {
            pergunta:
                "Qual palavra significa 'casa'?",

            alternativas: [
                "House",
                "School",
                "Book",
                "Water"
            ],

            resposta: 0,

            explicacao:
                "House significa casa."
        },

        {
            pergunta:
                "O que significa 'teacher'?",

            alternativas: [
                "Aluno",
                "Professor",
                "Médico",
                "Amigo"
            ],

            resposta: 1,

            explicacao:
                "Teacher significa professor ou professora."
        },

        {
            pergunta:
                "Complete: I ___ a student.",

            alternativas: [
                "am",
                "are",
                "is",
                "be"
            ],

            resposta: 0,

            explicacao:
                "Com I usamos am: I am a student."
        }

    ]

},

/* ==================================================
   BIOLOGIA
================================================== */

biologia: {

    nome: "Biologia",

    icone: "🧬",

    descricao:
        "Conheça os seres vivos, células e funcionamento da vida.",

    conteudos: [

        {
            titulo: "Células",

            explicacao:
                "A célula é a unidade básica de organização dos seres vivos.",

            exemplo:
                "Animais e plantas são formados por células."
        },

        {
            titulo: "Ecossistemas",

            explicacao:
                "Um ecossistema reúne seres vivos e elementos não vivos que interagem em determinado ambiente.",

            exemplo:
                "Uma floresta possui plantas, animais, água, solo e outros elementos."
        },

        {
            titulo: "Genética",

            explicacao:
                "A genética estuda a hereditariedade e a transmissão de características.",

            exemplo:
                "Características podem ser transmitidas entre gerações através dos genes."
        }

    ],

    perguntas: [

        {
            pergunta:
                "Qual é a unidade básica dos seres vivos?",

            alternativas: [
                "Órgão",
                "Célula",
                "Tecido",
                "Sistema"
            ],

            resposta: 1,

            explicacao:
                "A célula é considerada a unidade básica dos seres vivos."
        },

        {
            pergunta:
                "Qual estrutura contém o material genético nas células eucarióticas?",

            alternativas: [
                "Núcleo",
                "Parede",
                "Estômago",
                "Pulmão"
            ],

            resposta: 0,

            explicacao:
                "O núcleo contém o material genético nas células eucarióticas."
        },

        {
            pergunta:
                "Qual destes é um ser vivo?",

            alternativas: [
                "Pedra",
                "Água",
                "Árvore",
                "Areia"
            ],

            resposta: 2,

            explicacao:
                "A árvore é um ser vivo."
        },

        {
            pergunta:
                "O que estuda a genética?",

            alternativas: [
                "Os planetas",
                "A hereditariedade",
                "As montanhas",
                "O clima"
            ],

            resposta: 1,

            explicacao:
                "A genética estuda a hereditariedade e a transmissão de características."
        },

        {
            pergunta:
                "Qual destes faz parte de um ecossistema?",

            alternativas: [
                "Apenas animais",
                "Apenas plantas",
                "Seres vivos e elementos do ambiente",
                "Apenas água"
            ],

            resposta: 2,

            explicacao:
                "Ecossistemas envolvem seres vivos e elementos não vivos que interagem."
        }

    ]

},

/* ==================================================
   FÍSICA
================================================== */

fisica: {

    nome: "Física",

    icone: "⚡",

    descricao:
        "Explore movimento, energia, força e fenômenos físicos.",

    conteudos: [

        {
            titulo: "Movimento",

            explicacao:
                "Um corpo está em movimento quando sua posição muda em relação a um referencial.",

            exemplo:
                "Um carro andando pela rua está mudando de posição."
        },

        {
            titulo: "Energia",

            explicacao:
                "Energia está relacionada à capacidade de produzir transformações.",

            exemplo:
                "A energia elétrica pode ser transformada em luz em uma lâmpada."
        },

        {
            titulo: "Força",

            explicacao:
                "Força pode alterar o movimento ou deformar um objeto.",

            exemplo:
                "Empurrar uma caixa é aplicar uma força sobre ela."
        }

    ],

    perguntas: [

        {
            pergunta:
                "Qual unidade é usada para medir força no Sistema Internacional?",

            alternativas: [
                "Metro",
                "Newton",
                "Segundo",
                "Litro"
            ],

            resposta: 1,

            explicacao:
                "A unidade de força no Sistema Internacional é o newton."
        },

        {
            pergunta:
                "Qual destes representa uma forma de energia?",

            alternativas: [
                "Energia elétrica",
                "Metro",
                "Quilograma",
                "Segundo"
            ],

            resposta: 0,

            explicacao:
                "Energia elétrica é uma forma de energia."
        },

        {
            pergunta:
                "O que pode alterar o movimento de um objeto?",

            alternativas: [
                "Força",
                "Cor",
                "Nome",
                "Formato da palavra"
            ],

            resposta: 0,

            explicacao:
                "Uma força pode alterar o movimento de um objeto."
        },

        {
            pergunta:
                "Qual instrumento é usado para medir temperatura?",

            alternativas: [
                "Régua",
                "Balança",
                "Termômetro",
                "Cronômetro"
            ],

            resposta: 2,

            explicacao:
                "O termômetro é usado para medir temperatura."
        },

        {
            pergunta:
                "Qual destas situações apresenta movimento?",

            alternativas: [
                "Um livro parado na mesa",
                "Um carro andando",
                "Uma parede",
                "Uma cadeira parada"
            ],

            resposta: 1,

            explicacao:
                "Um carro andando está mudando de posição."
        }

    ]

}

};

/* ==================================================
DICAS
================================================== */

const dicas = [

"Tente explicar o conteúdo com suas próprias palavras.",

"Estude um pouco todos os dias em vez de estudar tudo de uma vez.",

"Quando errar uma questão, procure entender o motivo do erro.",

"Faça pequenas pausas durante os estudos.",

"Use exemplos do cotidiano para entender assuntos difíceis.",

"Leia a pergunta com calma antes de escolher uma alternativa.",

"Se não entender de primeira, tente outra explicação.",

"Ensinar alguém é uma ótima maneira de descobrir se você realmente entendeu.",

"Anote palavras importantes do conteúdo.",

"Não tenha medo de errar. Errar também faz parte de aprender."

];

/* ==================================================
VARIÁVEIS DO ESTUDANTE
================================================== */

let pontuacao =
Number(
localStorage.getItem(
"pontuacaoCDE"
)
) || 0;

let sequencia =
Number(
localStorage.getItem(
"sequenciaCDE"
)
) || 0;

let perguntasRespondidas =
Number(
localStorage.getItem(
"perguntasRespondidasCDE"
)
) || 0;

/* ==================================================
ELEMENTOS
================================================== */

const areaConteudo =
document.getElementById(
"areaConteudo"
);

const pontuacaoPrincipal =
document.getElementById(
"pontuacaoPrincipal"
);

const barraProgresso =
document.getElementById(
"barraProgresso"
);

const nivelTexto =
document.getElementById(
"nivelTexto"
);

const sequenciaTexto =
document.getElementById(
"sequenciaTexto"
);

/* ==================================================
ATUALIZAÇÃO DO PROGRESSO
================================================== */

function atualizarProgresso() {

pontuacaoPrincipal.textContent =
    pontuacao;

sequenciaTexto.textContent =
    "🔥 Sequência: " +
    sequencia;

let nivel = 1;

let nomeNivel =
    "Explorador";

if (pontuacao >= 50) {

    nivel = 2;

    nomeNivel = "Aprendiz";

}

if (pontuacao >= 100) {

    nivel = 3;

    nomeNivel = "Conhecedor";

}

if (pontuacao >= 200) {

    nivel = 4;

    nomeNivel = "Mestre";

}

if (pontuacao >= 300) {

    nivel = 5;

    nomeNivel = "Lenda";

}

nivelTexto.textContent =
    "Nível " +
    nivel +
    " — " +
    nomeNivel;

const progresso =
    Math.min(
        (pontuacao % 100),
        100
    );

barraProgresso.style.width =
    progresso + "%";

localStorage.setItem(
    "pontuacaoCDE",
    pontuacao
);

localStorage.setItem(
    "sequenciaCDE",
    sequencia
);

localStorage.setItem(
    "perguntasRespondidasCDE",
    perguntasRespondidas
);

}

atualizarProgresso();

/* ==================================================
CARROSSEL
================================================== */

const slides =
document.querySelectorAll(
".slide"
);

const indicadores =
document.getElementById(
"indicadores"
);

let slideAtual = 0;

/* Criar indicadores */

slides.forEach(
function(slide, indice) {

    const indicador =
        document.createElement(
            "button"
        );

    indicador.classList.add(
        "indicador"
    );

    indicador.type =
        "button";

    indicador.addEventListener(
        "click",
        function() {

            mostrarSlide(
                indice
            );

        }
    );

    indicadores.appendChild(
        indicador
    );

}

);

const botoesIndicadores =
document.querySelectorAll(
".indicador"
);

function mostrarSlide(indice) {

slides.forEach(
    function(slide) {

        slide.classList.remove(
            "ativo"
        );

    }
);

botoesIndicadores.forEach(
    function(botao) {

        botao.classList.remove(
            "ativo"
        );

    }
);

slideAtual = indice;

slides[slideAtual]
    .classList.add(
        "ativo"
    );

botoesIndicadores[slideAtual]
    .classList.add(
        "ativo"
    );

}

document
.getElementById(
"anteriorSlide"
)
.addEventListener(
"click",
function() {

        slideAtual--;

        if (slideAtual < 0) {

            slideAtual =
                slides.length - 1;

        }

        mostrarSlide(
            slideAtual
        );

    }
);

document
.getElementById(
"proximoSlide"
)
.addEventListener(
"click",
function() {

        slideAtual++;

        if (
            slideAtual >=
            slides.length
        ) {

            slideAtual = 0;

        }

        mostrarSlide(
            slideAtual
        );

    }
);

mostrarSlide(0);

/* Troca automática */

setInterval(
function() {

    slideAtual++;

    if (
        slideAtual >=
        slides.length
    ) {

        slideAtual = 0;

    }

    mostrarSlide(
        slideAtual
    );

},
5000

);

/* ==================================================
VARIÁVEIS DO QUIZ
================================================== */

let materiaAtual = null;

let perguntaAtual = 0;

let acertouNaPergunta = false;

/* ==================================================
BOTÕES DAS MATÉRIAS
================================================== */

const botoesMaterias =
document.querySelectorAll(
".materia"
);

botoesMaterias.forEach(
function(botao) {

    botao.addEventListener(
        "click",
        function() {

            const chave =
                botao.dataset.materia;

            abrirMateria(
                chave
            );

        }
    );

}

);

/* ==================================================
ABRIR MATÉRIA
================================================== */

function abrirMateria(chave) {

materiaAtual =
    materias[chave];

perguntaAtual = 0;

acertouNaPergunta = false;

mostrarMateria();

areaConteudo.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

}

/* ==================================================
MOSTRAR MATÉRIA
================================================== */

function mostrarMateria() {

const materia =
    materiaAtual;

const pergunta =
    materia.perguntas[
        perguntaAtual
    ];

let conteudosHTML =
    "";

materia.conteudos.forEach(
    function(conteudo, indice) {

        conteudosHTML += `

            <article
                class="conteudo-estudo"
            >

                <h4>
                    ${indice + 1}.
                    ${conteudo.titulo}
                </h4>

                <p>
                    ${conteudo.explicacao}
                </p>

                <div
                    class="exemplo-estudo"
                >

                    <strong>
                        💡 Exemplo
                    </strong>

                    <p>
                        ${conteudo.exemplo}
                    </p>

                </div>

            </article>

        `;

    }
);

let alternativasHTML =
    "";

pergunta.alternativas.forEach(
    function(alternativa, indice) {

        alternativasHTML += `

            <button
                type="button"
                class="alternativa"
                data-indice="${indice}"
            >

                ${String.fromCharCode(
                    65 + indice
                )})

                ${alternativa}

            </button>

        `;

    }
);

areaConteudo.innerHTML = `

    <div class="cabecalho-materia">

        <div class="icone-materia">

            ${materia.icone}

        </div>

        <div>

            <h3>
                ${materia.nome}
            </h3>

            <p>
                ${materia.descricao}
            </p>

        </div>

    </div>

    <div class="botoes-estudo">

        <button
            type="button"
            class="botao-estudo"
            id="botaoDica"
        >

            💡 Mostrar uma dica

        </button>

        <button
            type="button"
            class="botao-estudo"
            id="botaoFlashcard"
        >

            🎴 Abrir flashcard

        </button>

    </div>

    <div
        id="areaExtra"
    >
    </div>

    <h3
        class="titulo-conteudos"
    >

        📖 Aprenda primeiro

    </h3>

    <div
        class="lista-conteudos"
    >

        ${conteudosHTML}

    </div>

    <div class="desafio">

        <span
            class="tag-desafio"
        >

            DESAFIO ${perguntaAtual + 1}
            DE ${materia.perguntas.length}

        </span>

        <h3>

            🧠 Teste seu conhecimento

        </h3>

        <p class="pergunta">

            ${pergunta.pergunta}

        </p>

        <div
            class="alternativas"
            id="alternativas"
        >

            ${alternativasHTML}

        </div>

        <div
            id="feedback"
        >
        </div>

        <div
            class="navegacao-quiz"
        >

            <span
                class="numero-questao"
            >

                Questão
                ${perguntaAtual + 1}
                de
                ${materia.perguntas.length}

            </span>

            <button
                type="button"
                class="botao-proxima"
                id="botaoProxima"
                style="display:none;"
            >

                Próxima →
                
            </button>

        </div>

    </div>

`;

document
    .getElementById(
        "botaoDica"
    )
    .addEventListener(
        "click",
        mostrarDica
    );

document
    .getElementById(
        "botaoFlashcard"
    )
    .addEventListener(
        "click",
        mostrarFlashcard
    );

document
    .getElementById(
        "botaoProxima"
    )
    .addEventListener(
        "click",
        proximaPergunta
    );

const alternativas =
    document.querySelectorAll(
        ".alternativa"
    );

alternativas.forEach(
    function(botao) {

        botao.addEventListener(
            "click",
            responder
        );

    }
);

}

/* ==================================================
DICA
================================================== */

function mostrarDica() {

const areaExtra =
    document.getElementById(
        "areaExtra"
    );

const indice =
    Math.floor(
        Math.random() *
        dicas.length
    );

areaExtra.innerHTML = `

    <div
        class="extra-estudo"
    >

        💡

        <strong>
            Dica de estudo:
        </strong>

        <br>

        ${dicas[indice]}

    </div>

`;

}

/* ==================================================
FLASHCARD
================================================== */

function mostrarFlashcard() {

const areaExtra =
    document.getElementById(
        "areaExtra"
    );

const conteudo =
    materiaAtual.conteudos[
        perguntaAtual %
        materiaAtual.conteudos.length
    ];

areaExtra.innerHTML = `

    <div
        class="flashcard"
    >

        <div
            class="flashcard-inner"
        >

            <h4>
                🎴 Flashcard
            </h4>

            <p>

                <strong>
                    Você lembra o que é
                    ${conteudo.titulo}?
                </strong>

            </p>

            <br>

            <p>

                ${conteudo.explicacao}

            </p>

        </div>

    </div>

`;

}

/* ==================================================
RESPONDER QUESTÃO
================================================== */

function responder(evento) {

if (acertouNaPergunta) {

    return;

}

const botao =
    evento.currentTarget;

const escolha =
    Number(
        botao.dataset.indice
    );

const pergunta =
    materiaAtual.perguntas[
        perguntaAtual
    ];

const alternativas =
    document.querySelectorAll(
        ".alternativa"
    );

alternativas.forEach(
    function(item) {

        item.disabled = true;

    }
);

perguntasRespondidas++;

const feedback =
    document.getElementById(
        "feedback"
    );

const botaoProxima =
    document.getElementById(
        "botaoProxima"
    );

if (
    escolha ===
    pergunta.resposta
) {

    acertouNaPergunta =
        true;

    botao.classList.add(
        "certa"
    );

    sequencia++;

    let pontosGanhos = 10;

    if (sequencia >= 3) {

        pontosGanhos += 5;

    }

    if (sequencia >= 5) {

        pontosGanhos += 10;

    }

    pontuacao +=
        pontosGanhos;

    feedback.innerHTML = `

        <div
            class="feedback certo"
        >

            <strong>
                🎉 Muito bem!
            </strong>

            Você acertou!

            <br>

            +${pontosGanhos} pontos

            <br><br>

            ${pergunta.explicacao}

        </div>

    `;

} else {

    botao.classList.add(
        "errada"
    );

    alternativas[
        pergunta.resposta
    ].classList.add(
        "certa"
    );

    sequencia = 0;

    feedback.innerHTML = `

        <div
            class="feedback errado"
        >

            <strong>
                🤔 Quase!
            </strong>

            Não tem problema errar.
            O importante é entender.

            <br><br>

            <strong>
                Resposta correta:
                ${pergunta.alternativas[
                    pergunta.resposta
                ]}
            </strong>

            <br>

            ${pergunta.explicacao}

        </div>

    `;

}

atualizarProgresso();

botaoProxima.style.display =
    "block";

if (
    perguntaAtual ===
    materiaAtual.perguntas.length - 1
) {

    botaoProxima.textContent =
        "Ver resultado 🏆";

}

}

/* ==================================================
PRÓXIMA PERGUNTA
================================================== */

function proximaPergunta() {

if (
    perguntaAtual <
    materiaAtual.perguntas.length - 1
) {

    perguntaAtual++;

    acertouNaPergunta =
        false;

    mostrarMateria();

    areaConteudo.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

} else {

    mostrarResultado();

}

}

/* ==================================================
RESULTADO FINAL
================================================== */

function mostrarResultado() {

const total =
    materiaAtual.perguntas.length;

const pontosPossiveis =
    total * 10;

let mensagem;

if (sequencia >= 5) {

    mensagem =
        "🔥 Você está pegando fogo!";

} else if (pontuacao >= 100) {

    mensagem =
        "🏆 Seu progresso está incrível!";

} else {

    mensagem =
        "🚀 Continue praticando!";

}

areaConteudo.innerHTML = `

    <div
        class="resultado-final"
    >

        <div class="trofeu">
            🏆
        </div>

        <h3>
            Desafio concluído!
        </h3>

        <p>
            ${mensagem}
        </p>

        <p>

            Você respondeu
            ${total}
            perguntas desta matéria.

        </p>

        <p>

            ⭐ Continue estudando
            para aumentar sua pontuação.

        </p>

        <button
            type="button"
            class="botao-reiniciar"
            id="botaoReiniciar"
        >

            🔄 Refazer desafio

        </button>

    </div>

`;

document
    .getElementById(
        "botaoReiniciar"
    )
    .addEventListener(
        "click",
        function() {

            perguntaAtual = 0;

            acertouNaPergunta =
                false;

            mostrarMateria();

        }
    );

areaConteudo.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

}

/* ==================================================
EFEITO 3D NOS CARDS
================================================== */

const cards =
document.querySelectorAll(
".card-3d"
);

cards.forEach(
function(card) {

    card.addEventListener(
        "mousemove",
        function(evento) {

            const rect =
                card.getBoundingClientRect();

            const x =
                evento.clientX -
                rect.left;

            const y =
                evento.clientY -
                rect.top;

            const centroX =
                rect.width / 2;

            const centroY =
                rect.height / 2;

            const rotacaoY =
                (x - centroX) /
                15;

            const rotacaoX =
                (centroY - y) /
                15;

            card.style.transform =
                `
                perspective(800px)
                rotateX(${rotacaoX}deg)
                rotateY(${rotacaoY}deg)
                translateY(-8px)
                `;

        }
    );

    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform =
                "";

        }
    );

}

);