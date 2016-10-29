<?php
  $datos= array();
  $datos[]= (object) $array = array('nombre' => 'Gabriel', 'apellido' => 'Moreno');
  $datos[]= (object) $array = array('nombre' => 'Pedro', 'apellido' => 'Gonzalez');
  $datos[]= (object) $array = array('nombre' => 'Juan', 'apellido' => 'Manuel');
  echo json_encode($datos);
?>
