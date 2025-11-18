function TamaFondo(){

    var winW = window.innerWidth;
    var winH = window.innerHeight;

    var altopantalla = winH - 10;
    var top = 0;

    if(altopantalla<1100){
      altopantalla=940;
    }

    if(altopantalla>1100){
      altopantalla=1100;
      top = (winH - altopantalla) / 2;
    }


    $('#contenedor_principal').css({'height':altopantalla+'px'});
    $('#bosque').css({'height':altopantalla+'px'});
    $('#contenedor_principal').css({'margin-top':top+'px'});


 }

 function TamaFondoInterior(){

    var winW = window.innerWidth;
    var winH = window.innerHeight;

    var altopantalla = winH - 10;
    var top = 0;

    if(altopantalla<1100){
      altopantalla=940;
      altopantalla_cuaternario = 900;
    }

    if(altopantalla>1100){
      altopantalla=1100;
      top = (winH - altopantalla) / 2;
    }


    $('#contenedor_computadora').css({'height':altopantalla+'px'});
    $('#contenedor_secundario').css({'height':altopantalla+'px'});
    $('#contenedor_secundario').css({'margin-top':top+'px'});
    $('#contenedor_terciario').css({'height':altopantalla+'px'});
    $('#contenedor_terciario').css({'margin-top':top+'px'});


    if(altopantalla<1100){
      $('#barra_iz').css({'margin-top':'-82px'});
      $('#barra_de').css({'margin-top':'-82px'});
    }else{
      $('#barra_iz').css({'margin-top':'0px'});
      $('#barra_de').css({'margin-top':'0px'});
    }
    

 }

  function TamaFondoInterior2(){

    var winW = window.innerWidth;
    var winH = window.innerHeight;

    var altopantalla = winH - 10;
    var altopantalla_cuaternario = winH - 10;
    var top = 0;

    if(altopantalla<1100){
      altopantalla=940;
      altopantalla_cuaternario = 900;
    }

    if(altopantalla>1100){
      altopantalla=1100;
      altopantalla_cuaternario = 1100;
      top = (winH - altopantalla) / 2;
    }


    $('#contenedor_computadora').css({'height':altopantalla+'px'});
    $('#contenedor_cuaternario').css({'height':altopantalla_cuaternario+'px'});
    $('#contenedor_cuaternario').css({'margin-top':top+'px'});
 
    if(altopantalla<1100){
      $('#barra_iz').css({'margin-top':'-120px'});
      $('#barra_de').css({'margin-top':'-120px'});
      $('footer').css({'margin-top':'-45px'});
    }else{
      $('#barra_iz').css({'margin-top':'0px'});
      $('#barra_de').css({'margin-top':'0px'});
      $('footer').css({'margin-top':'-20px'});
    }
    

 }


  function TamaFondoInterior3(){

    var winW = window.innerWidth;
    var winH = window.innerHeight;

    var altopantalla = winH - 10;
    var altopantalla_cuaternario = winH - 10;
    var top = 0;

    if(altopantalla<1100){
      altopantalla=940;
      altopantalla_cuaternario = 900;
    }

    if(altopantalla>1100){
      altopantalla=1100;
      altopantalla_cuaternario = 1100;
      top = (winH - altopantalla) / 2;
    }


      $('#contenedor_computadora').css({'height':altopantalla+'px'});
      $('#contenedor_quinario').css({'height':altopantalla_cuaternario+'px'});
      $('#contenedor_quinario').css({'margin-top':top+'px'});
 
    if(altopantalla<1100){
          $('#barra_iz').css({'margin-top':'-120px'});
          $('#barra_de').css({'margin-top':'-120px'});
    }else{
          $('#barra_iz').css({'margin-top':'0px'});
          $('#barra_de').css({'margin-top':'0px'});
    }
    

 }



function abrir_lugar(id){
  $.post("lib/sin_recarga_cambios.inc.php", { actividad : 'abrir_lugar', valor : id}, function(data){
      $("#ve-lugar-data").html(data);
  });
  var winH = window.innerHeight;
  cuerpov = winH-90;
  cuerpointernov = cuerpov-160;
  $('.popup-base-con').css({'height':cuerpov+'px'});
  $('#ve-lugar-data').css({'height':cuerpointernov+'px'});
  $("#opaco-con").fadeIn(400);
  $('#opaco-con').css({'display':'flex'});
  $('body').css({'overflow-y':'hidden'});
  $('#ve-lugar-data').scrollTop(0);
}

function cerrar_lugar(){
  $("#opaco-con").fadeOut(300);
  $('body').css({'overflow-y':'scroll'});
}

function abrir_mapa(){
   $("#formulario_map").fadeIn(400);
}

function cerrar_mapa(){
   $("#formulario_map").fadeOut(300);
}

function actualizaciones(cod_contenido, inicial, tipo_inicial, puntos, provincia, tipo){

  $.post("lib/sin_recarga_cambios.inc.php", { actividad : cod_contenido, inicial : inicial, tipo_inicial : tipo_inicial, puntos : puntos, provincia : provincia, tipo : tipo}, function(data){
  $("#punto_retorno").html(data);
  });


}

function cambiar_valores(valor){
  if(valor=='limpiar'){
    document.getElementById('puntos').value = 0;
    document.getElementById('provincia').value = 0;
    document.getElementById('tipo').value = 0;
    document.getElementById('clientAddress').value = '';
  }
    actualizaciones(valor,document.getElementById('punto_inicial').value,document.getElementById('tipo_punto_inicial').value,document.getElementById('puntos').value,document.getElementById('provincia').value, document.getElementById('tipo').value);
}

/*
function cambia_boton(valor){
  $.post("lib/sin_recarga_cambios.inc.php", { actividad : 'cambia_boton', valor : valor}, function(data){
      $("#cccontenedor_boton_b_sonido").html(data);
  });
  if(valor == 1){  
    $('#audio')[0].pause();
    document.getElementById('monitor_audio').value = 'sonpause';
  }else{
    $('#audio')[0].play();
     document.getElementById('monitor_audio').value = 'sonplay';
  }
     
}
*/

function activa_boton(valor){
  $.post("lib/sin_recarga_cambios.inc.php", { actividad : 'cambia_boton', valor : valor}, function(data){
      $("#cccontenedor_boton_b_sonido").html(data);
  });
  if(valor == 1){  
    $('#audio')[0].pause();
    document.getElementById('monitor_audio').value = 'sonpause';
  }else{
    $('#audio')[0].play();
     document.getElementById('monitor_audio').value = 'sonplay';
  }
     
}


function cerrar_emergente(){
  $("#opaco").fadeOut(300);
  $('body').css({'overflow-y':'scroll'});
}

/*
function ventana_emergente_sonido(valor){

  var valores = window.location.search;
  var urlParams = new URLSearchParams(valores);
  var action_sonido = urlParams.get('action_sonido');

alert(action_sonido);    
  
  if((document.getElementById('monitor_audio').value == 'sonplay')){
   
    $('#boton_b_sonido2').css({'background-color':'red'});
    
    //$("#contenedor_boton_b_sonido").html('<div id="boton_b_sonido" onclick="cambia_boton'+"('1')"+';"><button type="button" class="btn btn-primary btn-circle"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/></svg></button></div>');
  }

  if((document.getElementById('monitor_audio').value == 'sonpause')){
     $('#boton_b_sonido1').css({'background-color':'red'});
    //$("#contenedor_boton_b_sonido").html('<div id="boton_b_sonido" onclick="cambia_boton'+"('2')"+';"><button type="button" class="btn btn-primary btn-circle"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16"><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/></svg></button></div>');
  }

   

  ventana_emergente(valor);
}
*/


function ventana_emergente(valor){

  var winW = window.innerWidth;
  var winH = window.innerHeight;

  valorhd = $('#'+valor).eq(0).css("height");
  valorh = valorhd.split("px");

  if(winW>=768){   
    valorhx = (valorh[0]*1)+90;

 
    if(valorhx < winH){
      alrribaba = (winH-valorhx)/2;
      cuerpov = valorhx;
      $('.popup-base').css({'margin-top':alrribaba+'px'});
    }else{
      cuerpov = winH-200;
      $('.popup-base').css({'margin-top':'100px'});
    }


  }else{
    cuerpov = winH;
    $('.popup-base').css({'margin-top':'0px'});
  }

  cuerpointernov = cuerpov-90;

  $('.popup-base').css({'min-height':cuerpov+'px'});
  $('.contenido_popup').css({'height':cuerpointernov+'px'});
  contenidodec = $('#'+valor).html();
  $('.contenido_popup').html(contenidodec);
  $('body').css({'overflow-y':'hidden'});
  $("#opaco").fadeIn(400);
  $('.contenido_popup').scrollTop(0);
  
}

//sol

var tiempo = 10000;

$(document).ready(function(){
    
    setInterval(function(){
        sol();
     },tiempo);

});

function sol(){

    var aleatoria = Math.floor((Math.random() * 10) + 1);

    if( aleatoria==0 || aleatoria==1 || aleatoria==2 || aleatoria==3 || aleatoria==4 ){
        $( "#sol" ).addClass( "solexpand" );
    }else{
        $( "#sol" ).removeClass( "solexpand" );
    }
  
  }


//Comienzo de mi codigo para asignar las animaciones de cada uno.


const delay = seconds =>{
  return new Promise(function(resolve){
    setTimeout(resolve,seconds*1000);
  });
}

const getSegundosRandomDeAnimacion = (ultimosSegundos, duracionAnimacion) =>{

  let continuar = true, numeroRandom = 0, segundosDeAnimacion = duracionAnimacion, segundosAsignados = 0;

  while(continuar){

    numeroRandom = Math.floor((Math.random() * 10) + 1);

    segundosAsignados = segundosDeAnimacion * numeroRandom;

    if(segundosAsignados != ultimosSegundos) continuar = false;
  }

  return segundosAsignados;

}

const getSegundosRandomSinAnimacion = (minimoDeEspera, MaximoDeEspera, ultimosSegundos) =>{

  let segundosAEsperar = 0, continuar = true;

  while(continuar){

    segundosAEsperar = Math.floor((Math.random() * MaximoDeEspera) + minimoDeEspera);

    if(ultimosSegundos != segundosAEsperar) continuar = false;

  }

  return segundosAEsperar;

}

const personalizarClases = (lista, clase, proposito) =>{

  if(!(proposito.toLowerCase("agregar") || proposito.toLowerCase("remover")))
    console.error("La función personalizarClases solamente trabaja con el propósito agregar o remover"); 
  
  for(let i = 0; i<lista.length; i++){

    let clasePersonalizada = clase;

    if(proposito.toLowerCase() === "agregar"){
      $(lista[i]).addClass(clasePersonalizada);
    }else{
      $(lista[i]).removeClass(clasePersonalizada);
    }  
  }


}
 
 
const AnimacionPlantas = async (idsPlantas, duracionAnimacion, clase, minimoSegundosSinAnimacion, maximoSegundosSinAnimacion) =>{

  let segundosConAnimacion = 0, ultimosSegundosConAnimacion = 0, segundosSinAnimacion = 0, ultimosSegundosSinAnimacion = 0;

  while(true){
 
    segundosConAnimacion = getSegundosRandomDeAnimacion(ultimosSegundosConAnimacion, duracionAnimacion);

    ultimosSegundosConAnimacion = segundosConAnimacion;

    personalizarClases(idsPlantas, clase, "agregar");

    await delay(segundosConAnimacion);

    personalizarClases(idsPlantas, clase, "remover");

    segundosSinAnimacion =  getSegundosRandomSinAnimacion(minimoSegundosSinAnimacion, maximoSegundosSinAnimacion, ultimosSegundosSinAnimacion);

    ultimosSegundosSinAnimacion = segundosSinAnimacion;

    await delay(segundosSinAnimacion);
  }
}

$(document).ready(function(){
 
  AnimacionPlantas(["#planta1"], 6, "AnimacionPlantaDerecha", 10, 15);

  AnimacionPlantas(["#planta2", "#planta3"], 4, "AnimacionPlantasIzquierdas", 5, 10);

});

$("#contenedor_botones1 .botodi .blob").hover(function(){
  $("#globo1").fadeIn(400);
  }, function(){
  $("#globo1").fadeOut(300);
});

$("#contenedor_botones2 .botodi .blob").hover(function(){
  $("#globo2").fadeIn(400);
  }, function(){
  $("#globo2").fadeOut(300);
});

$("#contenedor_botones3 .botodi .blob").hover(function(){
  $("#globo3").fadeIn(400);
  }, function(){
  $("#globo3").fadeOut(300);
});

$("#contenedor_botones4 .botodi .blob").hover(function(){
  $("#globo4").fadeIn(400);
  }, function(){
  $("#globo4").fadeOut(300);
});

$("#contenedor_botones5 .botodi .blob").hover(function(){
  $("#globo5").fadeIn(400);
  }, function(){
  $("#globo5").fadeOut(300);
});

$("#contenedor_botones6 .botodi .blob").hover(function(){
  $("#globo6").fadeIn(400);
  }, function(){
  $("#globo6").fadeOut(300);
});

$("#contenedor_botones7 .botodi .blob").hover(function(){
  $("#globo7").fadeIn(400);
  }, function(){
  $("#globo7").fadeOut(300);
});

$("#contenedor_botones8 .botodi .blob").hover(function(){
  $("#globo8").fadeIn(400);
  }, function(){
  $("#globo8").fadeOut(300);
});

$("#contenedor_botones9 .botodi .blob").hover(function(){
  $("#globo9").fadeIn(400);
  }, function(){
  $("#globo9").fadeOut(300);
});

$("#contenedor_botones10 .botodi .blob").hover(function(){
  $("#globo10").fadeIn(400);
  }, function(){
  $("#globo10").fadeOut(300);
});

$("#contenedor_botones11 .botodi .blob").hover(function(){
  $("#globo11").fadeIn(400);
  }, function(){
  $("#globo11").fadeOut(300);
});

$("#contenedor_botones12 .botodi .blob").hover(function(){
  $("#globo12").fadeIn(400);
  }, function(){
  $("#globo12").fadeOut(300);
});

$("#contenedor_botones13 .botodi .blob").hover(function(){
  $("#globo13").fadeIn(400);
  }, function(){
  $("#globo13").fadeOut(300);
});

$("#contenedor_botones14 .botodi .blob").hover(function(){
  $("#globo14").fadeIn(400);
  }, function(){
  $("#globo14").fadeOut(300);
});

$("#contenedor_botones15 .botodi .blob").hover(function(){
  $("#globo15").fadeIn(400);
  }, function(){
  $("#globo15").fadeOut(300);
});

$("#contenedor_botones16 .botodi .blob").hover(function(){
  $("#globo16").fadeIn(400);
  }, function(){
  $("#globo16").fadeOut(300);
});

$("#contenedor_botones17 .botodi .blob").hover(function(){
  $("#globo17").fadeIn(400);
  }, function(){
  $("#globo17").fadeOut(300);
});