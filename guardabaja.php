<?php
	include("utilerias.php");
	$conexion = conecta(); //servidor y BD
	$u = getSQLValueString($_GET["txtUsuario"],"text");
	$consulta=sprintf("delete from usuarios where usuario=%s",$u);
	mysql_query($consulta);
	if(mysql_affected_rows()>0){
		print("Usuario eliminado :)");
	}
	else{
		print("Usuario no encontrado :(");
	}
?>