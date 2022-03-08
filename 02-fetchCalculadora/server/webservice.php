<?php
    $valor1 = $_POST["valor1"];
    $valor2 = $_POST["valor2"];
    $operador = $_POST["operador"];
    $resposta = array();

    if($operador == "adicao"){
        $resposta["resultado"] = $valor1 + $valor2;
    }else if($operador == "subtracao"){
        $resposta["resultado"] = $valor1 - $valor2;
    }else if($operador == "multiplicacao"){
        $resposta["resultado"] = $valor1 * $valor2;
    }else if($operador == "divisao"){
        $resposta["resultado"] = $valor1 / $valor2;
    }else{
        $resposta["resultado"] = "Operador Inválido";
    }
    echo json_encode($resposta);
?>