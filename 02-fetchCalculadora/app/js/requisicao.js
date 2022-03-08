const webservice = "http://aula/02-fetchCalculadora/server/webservice.php";

function requisitar(metodo, dados, funcao){

    fetch(webservice, {
        method: metodo,
        body: dados
    }).then(resposta => resposta.json()).then(
        (retorno) => {
            funcao(retorno)
        }
    )
}