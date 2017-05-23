<?php
	include("utilerias.php");
	$conexion = conecta(); //servidor y BD
	$u = getSQLValueString($_POST["txtUsuario"],"text");
	$n = getSQLValueString($_POST["txtNombre"],"text");
	$c = getSQLValueString(md5($_POST["txtClave"]), "text");
	$d = getSQLValueString($_POST["txtDepto"], "int");
	$v = getSQLValueString($_POST["txtVigencia"], "int");

	$consulta=sprintf("update usuarios set nombre=%s,
										   clave=%s,
										   departamento=%d,
										   vigencia=%%d where usuario =%s",$n,$c,$d,$v,$u);
	mysql_query($consulta);
	if(mysql_affected_rows()>0){
		print("Usuario actualizdao :)");
	}
	else{
		print("Usuario no actualizado :(");
	}
?>