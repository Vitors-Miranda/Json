

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (e) => {
    //cancelando submit do formulario
    e.preventDefault();
    let dados = new FormData(formulario);
    requisitar("POST",dados, function(retorno){
        formulario["txtmedia"].value = retorno.media
        formulario["txtsituacao"].value = retorno.situacao
    })
})

    //ISSO FOI SUBSTITUIDO POR UMA FUNÇÃO
    // fetch(webservice, {
    //     method: "post",
    //     body: dados
    // }).then(resposta => resposta.json()).then(
    //     (retorno)=>{
    //         formulario["txtmedia"].value = retorno.media;
    //         formulario["txtsituacao"].value = retorno.situacao
    //         //alert(retorno.situacao);
    //     }
    // );
    