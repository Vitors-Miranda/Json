const formulario = document.querySelector("form")


formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let dados = new FormData(formulario)
    requisitar("POST", dados, function (retorno) {
        //alert(retorno.resultado)
        formulario["txtresultado"].value = retorno.resultado;
    })
})