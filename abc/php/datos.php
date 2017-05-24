<?php
	require("utilerias.php");
	function valida (){
		$respuesta=false;
		$conexion=conecta();
		$u = getSQLValueString($_GET["usuario"],"text");
		$c = GetSQLValueString(md5($_GET["clave"]),"text)");
		$consulta=sprintf("select usuario, clave from usuarios where usuario=%s and clave=%s limit 1",$u,$c);
		$resultado=mysql_query($consulta);
		if(mysql_num_rows($resultado)>0){
			$respuesta=true;
		}
		$salidaJSON = array('respuesta' => $respuesta);
		print(json_encode($salidaJSON));
	}
	//Menú Principal
	$opcion=$_GET["opcion"];
	switch ($opcion) {
		case 'valida':
			valida();
			break;
		default:
			# code...
			break;
	}