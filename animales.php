<?php
  $datos= array();
  $datos[]= (object) $array = array('nombre' => 'Caballo');
  $datos[]= (object) $array = array('nombre' => 'Burro');
  $datos[]= (object) $array = array('nombre' => 'Mula');
  $datos[]= (object) $array = array('nombre' => 'Pato');
  echo json_encode($datos);
?>
