// $ = jquery
var iniciaApp = function(){
	//alert("Hola App");
	var entrar=function(){
		var usuario=$("#txtUsuario").val();
		var clave  =$("#txtClave").val();
		var parametros="opcion=valida"+
					   "&usuario="+usuario+
					   "&clave="+clave+
					   "&id="+Math.random();
		var validaEntrada = $.ajax({
			method:"POST",
			url:"php/datos.php",
			data: parametros,
			dataType:"json"
		});
		validaEntrada.done(function(data){
			//alert(data.respuesta);
			if(data.respuesta == true){
				$("#datosUsuario").hide();
				$("nav").show("slow");
				$("#secUsuario").show("slow");
			}else{
				alert("Usuario no válido");
			}
		});
		validaEntrada.fail(function(jqError, textStatus){
			alert("Solicitud fallida: "+textStatus);
		});
	}

	var datosUsuario=function(){
		var usuario = $("txtNomUsuario").val();
		var parametros = "opcion=datosusuario"+
						 "&usuario="+usuario+
						 "&id="+Math.random();
		var du=$.ajax({
			method:"POST",
			url:"php/datos.php",
			data: parametros,
			dataType:"json"
		});
		du.done(function(data){
			if(data.respuesta == true){
				$("#txtNomNombre").val(data.nombre);
				$("#txtNomClave").val(data.clave);
				$("#txtNomDepto").val(data.departamento);
				$("#txtNomVigencia").val(data.vigencia);
			}else{
				$("#txtNomNombre").focus();
			}
		});
		du.fail(function(data){
			
		});
	}

	var teclaNomUsuario = function(tecla){
		if(tecla.which==13){
			datosUsuario();
		}
	}

	var teclaUsuario = function(tecla){
		if(tecla.which==13){
			$("#txtClave").focus();
		}
	}

	var teclaClave = function(tecla){
		if(tecla.which==13){
			entrar();
		}
	}

	var altas = function(){
		var usuario=$("#txtNomUsuario").val();
		var nombre=$("#txtNomNombre").val();
		var clave=$("#txtNomClave").val();
		var departamento=$("#txtNomDepto").val();
		var vigencia=$("#txtNomVigencia").val();
		var parametros ="opcion=alta"+
						"&usuario="+usuario+
						"&nombre="+nombre+
						"&clave="+clave+
						"&departamento"+departamento+
						"&vigencia"+vigencia+
						"&id="+Math.random();
		var alta=$.ajax({
			method:"POST",
			url:"php/datos.php",
			data: parametros,
			dataType:"json"
		});
		alta.done(function(data){
			if(data.respuesta==true){
				alert("Usuario dado de alta");
			}else{
				alert("Usuario repetido o no se puede registrar");
			}
		});
	}
	//Sección de declaración de eventos
	$("#btnEntrar").on("click",entrar);
	$("#txtUsuario").on("keypress",teclaUsuario);
	$("#txtClave").on("keypress",teclaClave);
	$("#txtNomUsuario").on("keypress",teclaNomUsuario);
	$("#btnAltas").on("click",altas);
}

$(document).ready(iniciaApp);