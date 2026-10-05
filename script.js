/*
    Pegamos o formulário pelo ID criado no index.html.
*/
const formulario = document.getElementById("formularioCadastro");


/*
    Pegamos a área onde as fichas serão exibidas.
*/
const listaFichas = document.getElementById("listaFichas");


/*
    Esta função busca todas as fichas
    que estão salvas no localStorage.
*/
function carregarFichas() {

    /*
        Procuramos no navegador uma informação
        chamada "fichas".
    */
    const fichasSalvas = localStorage.getItem("fichas");


    /*
        Se existirem fichas salvas,
        transformamos o texto novamente em uma lista.
    */
    if (fichasSalvas) {
        return JSON.parse(fichasSalvas);
    }


    /*
        Se ainda não existir nenhuma ficha,
        retornamos uma lista vazia.
    */
    return [];
}


/*
    Esta função mostra as fichas na tela.
*/
function mostrarFichas() {

    /*
        Pegamos as fichas que estão salvas.
    */
    const fichas = carregarFichas();


    /*
        Limpamos o conteúdo atual da área.
    */
    listaFichas.innerHTML = "";


    /*
        Verificamos se não existe nenhuma ficha.
    */
    if (fichas.length === 0) {

        /*
            Mostramos uma mensagem informando
            que ainda não existem fichas.
        */
        listaFichas.innerHTML = `
            <p class="mensagem-vazia">
                Nenhuma ficha cadastrada ainda.
            </p>
        `;

        return;
    }


    /*
        Passamos por cada ficha cadastrada.
    */
    fichas.forEach(function(ficha) {

        /*
            Criamos um novo elemento HTML
            para representar a ficha.
        */
        const elementoFicha = document.createElement("div");


        /*
            Aplicamos uma classe CSS à ficha.
        */
        elementoFicha.classList.add("ficha");


        /*
            Colocamos os dados da ficha dentro
            do elemento criado.
        */
        elementoFicha.innerHTML = `
            <h3>Ficha cadastrada</h3>

            <p>
                <strong>Ajudando estudantes na hora de aprender:</strong>
                ${ficha.ajudando}
            </p>

            <p>
                <strong>Educação:</strong>
                ${ficha.educacao}
            </p>

            <p>
                <strong>4:</strong>
                ${ficha.numero}
            </p>

            <p>
                <strong>Data:</strong>
                ${ficha.data}
            </p>
        `;


        /*
            Colocamos a ficha dentro
            da área de fichas.
        */
        listaFichas.appendChild(elementoFicha);

    });
}


/*
    Quando o formulário for enviado,
    executamos esta função.
*/
formulario.addEventListener("submit", function(event) {

    /*
        Impedimos o navegador de recarregar a página.
    */
    event.preventDefault();


    /*
        Pegamos o texto do primeiro campo.
    */
    const ajudando = document.getElementById("ajudando").value.trim();


    /*
        Pegamos a opção escolhida em Educação.
    */
    const educacao = document.getElementById("educacao").value;


    /*
        Pegamos o número digitado.
    */
    const numeroTexto = document.getElementById("numero").value.trim();


    /*
        Verificamos se o primeiro campo está vazio.
    */
    if (ajudando === "") {
        alert("Preencha o campo 'Ajudando estudantes na hora de aprender'.");
        return;
    }


    /*
        Verificamos se Educação foi selecionada.
    */
    if (educacao === "") {
        alert("Selecione uma opção no campo 'Educação'.");
        return;
    }


    /*
        Verificamos se o campo 4 foi preenchido.
    */
    if (numeroTexto === "") {
        alert("Preencha o campo '4'.");
        return;
    }


    /*
        Transformamos o valor digitado em número.
    */
    const numero = Number(numeroTexto);


    /*
        Criamos automaticamente a data e a hora
        do cadastro.
    */
    const data = new Date().toLocaleString("pt-BR");


    /*
        Criamos a nova ficha.
    */
    const novaFicha = {
        ajudando: ajudando,
        educacao: educacao,
        numero: numero,
        data: data
    };


    /*
        Carregamos as fichas existentes.
    */
    const fichas = carregarFichas();


    /*
        Adicionamos a nova ficha.
    */
    fichas.push(novaFicha);


    /*
        Salvamos todas as fichas no localStorage.
    */
    localStorage.setItem("fichas", JSON.stringify(fichas));


    /*
        Mostramos a mensagem de sucesso.
    */
    alert("Ficha cadastrada com sucesso!");


    /*
        Limpamos o formulário.
    */
    formulario.reset();


    /*
        Atualizamos a lista de fichas na tela
        imediatamente após o cadastro.
    */
    mostrarFichas();

});


/*
    Quando a página abrir, verificamos se existem
    fichas salvas e mostramos elas.
*/
mostrarFichas();
