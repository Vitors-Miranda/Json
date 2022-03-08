<?php

//http://aula/aulagi1/server/webservice.php

  extract($_POST);
  $resposta = array();
  if($requisicao == "calcular" ){
    $media = ($n1 + $n2) / 2;
    $resposta["media"] = $media;
    if($media>=6){
        $resposta["situacao"] = "Aprovado";
    }else{
        $resposta["situacao"] = "Reprovado";
    }
  }
echo json_encode($resposta);

