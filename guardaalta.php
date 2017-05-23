<?php
	include("utilerias.php");
	$conexion = conecta(); //servidor y BD
	$u = getSQLValueString($_POST["txtUsuario"],"text");
	$n = getSQLValueString($_POST["txtNombre"],"text");
	$c = getSQLValueString(md5($_POST["txtClave"]), "text");
	$d = getSQLValueString($_POST["txtDepto"], "int");
	$v = getSQLValueString($_POST["txtVigencia"], "int");
	//validar que no sea repetido el usuario
	$repetido=sprintf("select usuario from usuarios where usuario= %s",$u);
	$respuesta=mysql_query($repetido);
	if(mysql_num_rows($respuesta)>0){
		print("Usuario repetido :(");
		print("<a href='alta.php'>Regresar</a>");
		return;
	}

	$consulta=sprintf("insert into usuarios values(default,%s,%s,%s,%d,%d)",$u,$n,$c,$d,$v);
	mysql_query($consulta);
	if(mysql_affected_rows()>0){
		print("Usuario agregado :)");
		print("<a href='alta.php'>Regresar</a>");
	}
	else{
		print("Usuario no agregado :(");
		print("<a href='alta.php'>Regresar</a>");
	}
?>