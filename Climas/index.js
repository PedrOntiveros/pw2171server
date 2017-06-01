const rq = require ('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");

function getClima(){
	var ciudad = $("#txtCiudad").val();
	var url = "http://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&APPID=4c161114a189a1dab2b3a32e427a4d63";
	$.ajax({
	  url: url,
	  dataType: 'json',
	  success: function(data) {
	  	$("#txtCordenadas").html("<h3>Cordenadas</h3><br>Longitud: "+data.coord.lon+
	  							 "<br>Latitud: "+data.coord.lat);
	  	$("#txtClima").html("<h3>Clima</h3>Id: "+data.weather.id+
	  						"<br>Principal: "+data.weather.main+
	  						"<br>Descripción: "+data.weather.description);
	  	$("#txtBase").html("<h3>Base</h3>"+data.base);
	  	$("#txtPrincipal").html("<h3>Principal</h3>Temperatura: "+data.main.temp+
	  							 "<br>Presión: "+data.main.pressure+
	  							 "<br>Humedad: "+data.main.humidity+
	  							 "<br>Temperatura Mínima: "+data.main.temp_min+
	  							 "<br>Temperatura Máxima: "+data.main.temp_max);
	  	$("#txtVisibilidad").html("<h3>Visibilidad</h3><br>"+data.visibility);
	  	$("#txtViento").html("<h3>Vientos</h3>Velocidad: "+data.wind.speed+
	  						 "<br>Dirección: "+data.wind.deg);
	  	$("#txtNubes").html("<h3>Nubes</h3>"+data.clouds.all);
	  	$("#txtDt").html("<h3>Fecha</h3>"+data.dt);
	  	$("#txtSys").html("<h3>Sys</h3>Tipo: "+data.sys.type+
	  					  "<br>Id: "+data.sys.id+
	  					  "<br>Mensaje: "+data.sys.message+
	  					  "<br>País: "+data.sys.country+
	  					  "<br>Amanecer: "+data.sys.sunrise+
	  					  "<br>Anochecer: "+data.sys.sunset);
	  	$("#txtId").html("<h3>Identificador</h3>"+data.id);
	  	$("#txtName").html("<h3>Nombre</h3>"+data.name);
	  	$("#txtCodigo").html("<h3>Codigo</h3>"+data.cod);
	  		  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});
}

$("#btnBuscar").on("click",getClima);