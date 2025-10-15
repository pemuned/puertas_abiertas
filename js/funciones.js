var yaevaluada = 0;
var cerrarla = 0;


$( ".elemento_historia" ).click(function() {
  var valord = $("#"+this.id+" .globo.iii").eq(0).css("display");
  if(valord == 'none'){
    $("#"+this.id+" .globo.iii").fadeIn(200);
    $("#"+this.id+" .circulo_grande").fadeOut(0);
  }else{
    $("#"+this.id+" .globo.iii").fadeOut(200);
    $("#"+this.id+" .circulo_grande").fadeIn(0);
  }
  
});

function evaluar_ventana_creditos(){
	//CALCULO VENTANA CREDITOS
	var alto = $(window).height();
	$('#creditos').css({'height':alto+'px'}); 
	var alto_creditos = $('#cuerpo_creditos').height();
	if(alto_creditos >= alto){	
    	alto = alto - 50;	
    	$('#cuerpo_creditos').css({'height':alto+'px'}); 
	}else{
		  margen = (alto - alto_creditos) / 2;
		  $('#cuerpo_creditos').css({'margin-top':margen+'px'}); 
		  $('#cuerpo_creditos').css({'overflow':'hidden'}); 
	}
}

function evaluar_ventana_compu(valor){
  var alto = $(window).height();
  var alto_ventana = $("#contenido_ventana_compu").height();
  
  if(valor==10 || valor==12 || valor==13 || valor==14){
      alto_ventana = 1566;
  }else if(valor==11){
    alto_ventana = 1590;
  }else if(valor==15){
    alto_ventana = 846;
  }

  if(alto > alto_ventana){
      var margen = (alto-alto_ventana)/2;
      $('#ventana_compu').css({'height':alto_ventana+'px'}); 
      $('#ventana_compu').css({'margin-top':margen+'px'});
      $('#ventana_compu').css({'overflow':'hidden'});
  }else{
      var nuevo = alto - 50;
      $('#ventana_compu').css({'height':nuevo+'px'}); 
      $('#ventana_compu').css({'margin-top':'25px'});
      $('#ventana_compu').css({'overflow':'scroll'});
  }
 
}

function que_datos(valor){
  if(valor=='1'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Grammar Village</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Actividades interactivas</span></li><li><span>Elementos de gamificación</span></li><li><span>Propicia el aprendizaje lúdico</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes Enseñanza del Inglés I y II Ciclo</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra de Lengua Inglesa</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMGraVil" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMGraVil</a></p>');
  }else if(valor=='2'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Baraja Genómica</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Actividades interactivas</span></li><li><span>Elementos de gamificación</span></li><li><span>Incluye material adicional, descargable</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes Enseñanza de las Ciencias</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra Ciencias Biológicas</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMBarGen" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMBarGen</a></p>');
  }else if(valor=='3'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Partes del todo<br>(Proyecto Pedagógico Coral Vivace)</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Parte de un proyecto pedagógico y extensión universitaria y comunitaria, impulsado por la Escuela de Ciencias de la Educación</span></li><li><span>Promueve la práctica coral en el ambiente musical</span></li><li><span>Selección interactiva de lo que se quiere escuchar para apreciar las diferentes partes, unidas o separadas que conforman cada interpretación</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Público general interesado en la práctica coral</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela de Ciencias de la Educación</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMParTod" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMParTod</a></p>');
  }else if(valor=='4'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Fitohormonas</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Laboratorios guiados paso a paso</span></li><li><span>Explicación en video con transcripción y subtítulos</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes del laboratorio de botánica agrícola</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra de Ciencias Biológicas</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMFitLab" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMFitLab</a></p>');
  }else if(valor=='5'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Academia Municipal</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Gestor de contenidos adaptado para creación de cursos de capacitación y recursos abiertos</span></li><li><span>Herramientas para comunidad y foros pensadas en el público meta</span></li><li><span>Diseño de colección de cursos de autoaprendizaje, los cuales incluyen actividades interactivas</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Diferentes actores de los gobiernos locales</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Instituto de Formación y Capacitación Municipal y Desarrollo Local</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://academiamunicipal.uned.ac.cr" target="_blank">https://<wbr>academiamunicipal.<wbr>uned.<wbr>ac.<wbr>cr/</a></p>');
  }else if(valor=='6'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Nutrición animal y agrostología</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Amplio catálogo fotográfico</span></li><li><span>Enlista beneficios, características y animales que consumen diferentes tipos de pasto</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la asignatura Nutrición animal y agrostología</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra de Ciencias Agropecuarias de la ECEN</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMNutAgr" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMNutAgr</a></p>');
  }else if(valor=='7'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Seminarios de Actualización Profesional de la ECEN</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Gestor de contenidos que permite alojar múltiples sitios</span></li><li><span>Clonado de sitios que permite agilizar la creación y la administración</span></li><li><span>Diseño de plantilla personalizable</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes, graduados y egresados de la ECEN en busca de actividades de actualización profesional y para los organizadores de las actividades</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela de Ciencias Exactas y Naturales</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/ecen" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>ecen</a></p>');
  }else if(valor=='8'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Pedagogía universitaria</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Actualización continua con ajustes de acuerdo a las necesidades educativas</span></li><li><span>Múltiples versiones, para diferentes modalidades del curso</span></li><li><span>Multimedia interactivo web con ejercicios</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Funcionarios de la UNED</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Centro de Capacitación en Educación a Distancia</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMPedUni" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/qr/<wbr>PEMPedUni</a></p>');
  }else if(valor=='9'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Disco Duro</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Cápsulas en videos sobre teoría y práctica relacionada a los discos duros</span></li><li><span>Sistema de navegación interno por los diferentes temas de cada video</span></li><li><span>Autoevaluación integrada</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la asignatura Soporte Técnico</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra TIC e Ingeniería</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMSopTec" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMSopTec</a></p>');
  }else if(valor=='10'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>ÉXITO INTERNACIONAL</b><br><span class="descrip_reco">Material con mayor cantidad de sesiones desde el extranjero</span><br> <b>Material Descubriendo los sonidos del lenguaje</b></p><img class="afi_m" src="images/reconocimientos/Dislalias-Hellen_Gomez.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento a la Sra. Hellen Gómez Mendoza encargada de la cátedra Estimulación del Lenguaje.</p><br><img class="afi_m" src="images/reconocimientos/Dislalias-Jaqueline_Salas.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento a la Sra. Jacqueline Salas Fernández especialista de contenido del material.</p><br><a href="https://multimedia.uned.ac.cr/pem/dislalia/" target="_blank"><b>Ver material</b></a>');
  }else if(valor=='11'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>ÉXITO NACIONAL</b><br> <span class="descrip_reco">Material con mayor cantidad de sesiones a nivel nacional</span><br> <b>Material Academia Municipal</b></p><img class="afi_m" src="images/reconocimientos/AcademiaM-Javier_Urena.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento al Sr. Javier Ureña Picado Director del Instituto de Formación y Capacitación Municipal y Desarrollo Local.</p><br><img class="afi_m" src="images/reconocimientos/AcademiaM-Ana_Cecilia.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento a la Sra. Ana Cecilia Echeverri Echeverri especialista de contenido del material</p><br><a href="https://academiamunicipal.uned.ac.cr/" target="_blank"><b>Ver material</b></a>'); 
  }else if(valor=='12'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>MÁS NAVEGADO</b><br> <span class="descrip_reco">Material con mayor cantidad de páginas por sesión a nivel nacional</span><br> <b>Material Grammar Village</b></p><img class="afi_m" src="images/reconocimientos/Grammar-Elizabeth_Cascante.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento a la Sra. Elizabeth Cascante Ramírez encargada de la cátedra Lengua Inglesa.</p><br><img class="afi_m" src="images/reconocimientos/Grammar-Andrea_Lasso.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento a la Sra. Andrea Lasso de la Vega Moreno especialista de contenido del material.</p><br><a href="https://www.uned.cr/qr/PEMGraVil" target="_blank"><b>Ver material</b></a>'); 
  }else if(valor=='13'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>MÁS NAVEGADO (Mención honorífica)</b><br> <span class="descrip_reco">Material con mayor cantidad de páginas por sesión a nivel nacional</span><br> <b>Material Terminología Médica</b></p><img class="afi_m" src="images/reconocimientos/Terminologia-RoseMary_Mayorga.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento a la Sra. Rose Mary Mayorga García encargada de la cátedra Gramática y Literatura.</p><br><img class="afi_m" src="images/reconocimientos/Terminologia-Jose_Pablo_Ortega.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento al Sr. José Pablo Mora Ortega especialista de contenido del material.</p><br><a href="https://multimedia.uned.ac.cr/pem/terminologia_medica/" target="_blank"><b>Ver material</b></a>'); 
  }else if(valor=='14'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>MAYOR PERMANENCIA</b><br> <span class="descrip_reco">Material con mayor duración media de la sesión a nivel nacional</span><br> <b>Material Anatomía y Fisiología Animal: Especies Silvestres</b></p><img class="afi_m" src="images/reconocimientos/Anatomia-Alfonso_Rey.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento al Sr. Alfonso Rey Corrales encargado de la cátedra Producción Animal.</p><br><img class="afi_m" src="images/reconocimientos/Anatomia-Laura_Brenes.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento a la Sra. Laura Brenes Chaves especialista de contenido del material.</p><br><a href="https://multimedia.uned.ac.cr/pem/anatomia_especies_silvestres/" target="_blank"><b>Ver material</b></a>'); 
  }else if(valor=='15'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>ESCUELA ESTRELLA</b><br> <span class="descrip_reco">Escuela con mayor cantidad de multimedias activos</span><br><b>Escuela Ciencias Exactas y Naturales (ECEN)</b></p><img class="afi_m" src="images/reconocimientos/EscuelaEstrella-Gisella_Vargas.png"><br><br><p style="max-width: 400px;">Fotografía de entrega de reconocimiento a la Sra. Guisella Vargas Vargas directora de la ECEN</p>'); 
  }else if(valor=='101'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<div id="titulo_creditos"><b>Créditos</b></div><div id="imagenescr"><div id="logo_multimedia"><img src="images/galeria_multimedia_logo.svg"></div><div id="logo_uned"><img src="images/galeria_uned_logo.svg"></div></div><div id="contenedor_linea"></div><div align="left"><div id="titulo_moviles"><p><b>Galería virtual</b></p></div><div id="titulo_2"><p>Jornada de puertas abiertas y 20 aniversario</p></div><p><b>Código de publicación:</b> SW0120<br><b>Publicación:</b>1 diciembre 2020</p><p>Esta galería es una producción de la Universidad Estatal a Distancia, Dirección de Producción de Materiales Didácticos y el Programa de Producción Electrónica Multimedial.</p><p><b>Producción multimedia</b><br>Producción y diseño gráfico: Ana Carolina Zamora Sanabria, Juan Diego Delgado Vargas, Mario Badilla Quesada, Raquel Badilla Barrientos y Vivian González Zúñiga.<br>Desarrollo web: Romy Ulate Paniagua<br>Colaboración: Marco Antonio Sánchez Mora, Paúl Alvarado Quesada, Seidy Maroto Alfaro y Yuri Vázquez Pérez.<br>Agradecimientos: a todas las personas que colaboraron en la elaboración de esta Galería virtual.</p><p><b>Derecho de Autor</b><br>ADVERTENCIA: Los derechos patrimoniales de la presente obra pertenecen en su totalidad a la Universidad Estatal a Distancia, de Costa Rica, por lo que está prohibida su copia o reproducción, comunicación pública, puesta a disposición del público, transmisión, transformación (incluyendo adaptación y traducción), distribución, alquiler o venta de ejemplares, realizada por cualquier medio o procedimiento, conocido o por conocerse, sin el consentimiento previo por escrito del titular de los derechos. Eludir esta prohibición o las medidas tecnológicas de protección que contenga la obra, constituye una conducta sancionada por normas de propiedad intelectual.</p></div>');
  }
}


function abrir_ventana_compu(valor){
  valorn = $('#contenedor_ventana_compu').eq(0).css("display");
  if(valorn == 'none'){
    que_datos(valor);
    $("#contenedor_ventana_compu").fadeIn(1000);
    $("#ventana_compu").animate({scrollTop:"0px"},'slow');
    evaluar_ventana_compu(valor);
    $("#opaco_compu").fadeIn(1000);
  }else{
    $("#contenedor_ventana_compu").fadeOut(1000);
    $("#opaco_compu").fadeOut(1000);
    cerrarla=0;
  }
}


window.addEventListener('click', function(e){
  valorn = $('#contenedor_ventana_compu').eq(0).css("display");
  if (!document.getElementById('ventana_compu').contains(e.target) && valorn == 'block'){
    if(cerrarla>0){
      $("#contenedor_ventana_compu").fadeOut(1000);
      $("#opaco_compu").fadeOut(1000);
      cerrarla=0;
    }else{
      cerrarla=1;
    }
  }
});


function que_imagen(valor){
  if(valor=='1'){
    $('#imagen_movil').html('<p>Grammar Village</p><img src="images/afiches/af_grammar.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='2'){
    $('#imagen_movil').html('<p>Baraja Genómica</p><img src="images/afiches/af_baraja.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='3'){
    $('#imagen_movil').html('<p>Partes del todo (Proyecto Pedagógico Coral Vivace)</p><img src="images/afiches/af_coro.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='4'){
    $('#imagen_movil').html('<p>Fitohormonas</p><img src="images/afiches/af_fitohormonas.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='5'){
    $('#imagen_movil').html('<p>Academia Municipal</p><img src="images/afiches/af_academia.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='6'){
    $('#imagen_movil').html('<p>Nutrición animal y agrostología</p><img src="images/afiches/af_agrostologia.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='7'){
    $('#imagen_movil').html('<p>Seminarios de Actualización Profesional de la ECEN</p><img src="images/afiches/af_sap.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='8'){
    $('#imagen_movil').html('<p>Pedagogía universitaria</p><img src="images/afiches/af_pedagogia.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='9'){
    $('#imagen_movil').html('<p>Disco Duro</p><img src="images/afiches/af_disco duro.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='10'){
    $('#imagen_movil').html('<p>AFICHE CONMEMORATIVO DEL 20 ANIVERSARIO</p><img src="images/afiches/af_20.jpg"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }
}

function abrir_imagen_movil(valor){
  valorn = $('#imagen_movil').eq(0).css("display");
  if(valorn == 'none'){
    que_imagen(valor);
    var scrollIndex = $('html').scrollTop();
    $('#imagen_movil').css({'top':scrollIndex+'px'}); 
    $("#imagen_movil").fadeIn(1000);
    $("#opaco_movil").fadeIn(1000);
  }else{
    valort = $('#imagen_movil').eq(0).css("top");
    $("html, body").animate({scrollTop:valort+"px"},'slow');
    $("#imagen_movil").fadeOut(1000);
    $("#opaco_movil").fadeOut(1000);
  }
}

function abrir_ventana_video(valor){

  var alto = $(window).height();
  margen = (alto - 520) / 2;
  $('#ventana_video').css({'margin-top':margen+'px'}); 

  if(valor==0){
    $("#opaco_videos").fadeOut(0);
    $('#contenido_ventana_video').html('');
  }else if(valor==1){
    $('#contenido_ventana_video').html('<iframe src="https://player.vimeo.com/video/483755704" frameborder="0" allowfullscreen=""></iframe>');
    $("#opaco_videos").fadeIn(1000);
  }else if(valor==2){
    $('#contenido_ventana_video').html('<iframe src="https://player.vimeo.com/video/483774107" frameborder="0" allowfullscreen=""></iframe>');
     $("#opaco_videos").fadeIn(1000);
  }else if(valor==3){
    $('#contenido_ventana_video').html('<iframe src="https://player.vimeo.com/video/483774704" frameborder="0" allowfullscreen=""></iframe>');
     $("#opaco_videos").fadeIn(1000);
  }
}

function abrir_ventana_movil(valor){
  valorn = $('#contenedor_ventana_movil').eq(0).css("display");
  if(valorn == 'none'){
    que_datos(valor);
    var scrollIndex = $('html').scrollTop();
    $('#contenedor_ventana_movil').css({'top':scrollIndex+'px'}); 
    $("#contenedor_ventana_movil").fadeIn(1000);
    $("#opaco_movil").fadeIn(1000);
  }else{
    valort = $('#contenedor_ventana_movil').eq(0).css("top");
    $("html, body").animate({scrollTop:valort+"px"},'slow');
    $("#contenedor_ventana_movil").fadeOut(1000);
    $("#opaco_movil").fadeOut(1000);
  }
}

//CREDITOS
function abrir_creditos(){
	valorn = $('#creditos').eq(0).css("display");
	if(valorn == 'none'){
    $("#cuerpo_creditos").animate({scrollTop:"0px"},'slow');
		$("#creditos").fadeIn(1000);
		if(yaevaluada==0){
			evaluar_ventana_creditos();
			yaevaluada = 1;
		}
	}else{
			$("#creditos").fadeOut(1000);
	}
}

function avancer(){
    var scrollIndex = $('.horizontal-child').scrollTop();
    var alto = $(window).height();
    if(alto< 800){
      total = 23600;
    }else if(alto< 1000){
      total = 25000;
    }else{
      total = 26500;
    }
    //var total = ($("#guia").width() * 16);
    var ancho = $(window).width();
    var medioancho = (ancho*1) / 2;
    scrollIndex = scrollIndex + medioancho;
    //alert(scrollIndex);
    $('.horizontal-child').animate({scrollTop : scrollIndex},'slow');

    if(scrollIndex > 0){
    	$('#flecha_izquierda').html('<img src="images/flecha izq.png">');
    	$('#flecha_izquierda').css({'cursor':'pointer'}); 
    	
    }else{
    	$('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
    	$('#flecha_izquierda').css({'cursor':'none'}); 
    }

    if(total<= scrollIndex){
    	$('#flecha_derecha').html('<img src="images/flecha der_apa.png">');
    	$('#flecha_derecha').css({'cursor':'none'}); 
    }else{
    	$('#flecha_derecha').html('<img src="images/flecha der.png">');
    	$('#flecha_derecha').css({'cursor':'pointer'}); 
    }
}

function retrocesor(){
    var scrollIndex = $('.horizontal-child').scrollTop();
    var alto = $(window).height();
    if(alto< 800){
      total = 23600;
    }else if(alto< 1000){
      total = 25000;
    }else{
      total = 26500;
    }
    //var total = ($("#guia").width() * 16);
    var ancho = $(window).width();
    var medioancho = (ancho*1) / 2;
    scrollIndex = scrollIndex - medioancho;
    $('.horizontal-child').animate({scrollTop : scrollIndex},'slow');

     if(scrollIndex > 0){
    	$('#flecha_izquierda').html('<img src="images/flecha izq.png">');
    	$('#flecha_izquierda').css({'cursor':'pointer'}); 
    	
    }else{
    	$('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
    	$('#flecha_izquierda').css({'cursor':'none'}); 
    }

    if(total<= scrollIndex){
    	$('#flecha_derecha').html('<img src="images/flecha der_apa.png">');
    	$('#flecha_derecha').css({'cursor':'none'}); 
    }else{
    	$('#flecha_derecha').html('<img src="images/flecha der.png">');
    	$('#flecha_derecha').css({'cursor':'pointer'}); 
    }
}


$(function() {
  $('.horizontal-child').scroll(function() {
    if ($('.horizontal-child').scrollTop() > 0) {
      $('#flecha_izquierda').html('<img src="images/flecha izq.png">');
      $('#flecha_izquierda').css({'cursor':'pointer'}); 
    }else{
      $('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
      $('#flecha_izquierda').css({'cursor':'none'}); 
     }
     var alto = $(window).height();
    if(alto< 800){
      total = 23600;
    }else if(alto< 1000){
      total = 25000;
    }else{
      total = 26500;
    }
    if(total<= $('.horizontal-child').scrollTop()){
      $('#flecha_derecha').html('<img src="images/flecha der_apa.png">');
      $('#flecha_derecha').css({'cursor':'none'}); 
    }else{
      $('#flecha_derecha').html('<img src="images/flecha der.png">');
      $('#flecha_derecha').css({'cursor':'pointer'}); 
    }
  });
});



//POR TECLADO
$(document).keyup(function(e){
	//39 avance
	//37 retroceso
   var ancho = $(window).width();
   var medioancho = (ancho*1) / 2;
   var alto = $(window).height();
    if(alto< 800){
      total = 23600;
    }else if(alto< 1000){
      total = 25000;
    }else{
      total = 26500;
    }
	 //var total = ($("#guia").width() * 16);
       if (e.keyCode == 39) {
            var scrollIndex = $('.horizontal-child').scrollTop();
    		scrollIndex = scrollIndex + medioancho;
        $('.horizontal-child').animate({scrollTop : scrollIndex},'slow');
       }
       if (e.keyCode == 37) {
        var scrollIndex = $('.horizontal-child').scrollTop();
    		scrollIndex = scrollIndex - medioancho;
        $('.horizontal-child').animate({scrollTop : scrollIndex},'slow');
       }

     if(scrollIndex > 0){
    	$('#flecha_izquierda').html('<img src="images/flecha izq.png">');
    	$('#flecha_izquierda').css({'cursor':'pointer'}); 
    	
     }else{
    	$('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
    	$('#flecha_izquierda').css({'cursor':'none'}); 
     }

    if(total<= scrollIndex){
    	$('#flecha_derecha').html('<img src="images/flecha der_apa.png">');
    	$('#flecha_derecha').css({'cursor':'none'}); 
    }else{
    	$('#flecha_derecha').html('<img src="images/flecha der.png">');
    	$('#flecha_derecha').css({'cursor':'pointer'}); 
    }
});


//RUEDA DEL RATON
$('.horizontal-child').bind('mousewheel', function(e) {
      var scrollIndex = $('.horizontal-child').scrollTop();
      var alto = $(window).height();
    if(alto< 800){
      total = 23600;
    }else if(alto< 1000){
      total = 25000;
    }else{
      total = 26500;
    }
       //var total = ($("#guia").width() * 16);
       if(scrollIndex > 0){
    	$('#flecha_izquierda').html('<img src="images/flecha izq.png">');
    	$('#flecha_izquierda').css({'cursor':'pointer'}); 
    	
     }else{
    	$('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
    	$('#flecha_izquierda').css({'cursor':'none'}); 
     }

     if(total<= scrollIndex){
    	$('#flecha_derecha').html('<img src="images/flecha der_apa.png">');
    	$('#flecha_derecha').css({'cursor':'none'}); 
    }else{
    	$('#flecha_derecha').html('<img src="images/flecha der.png">');
    	$('#flecha_derecha').css({'cursor':'pointer'}); 
    }
});



function hpopup(){
	var alto = $(window).height();
	margen = (alto - 480) / 2;
	$('#ventana_informacion').css({'margin-top':margen+'px'}); 
}


function abrir_popup(valor){
   if(valor == 0){
   		$("#opaco").fadeOut(400);
   		$("#ventana_informacion").fadeOut(400);
   }else if(valor == 2){
   		$("#n_1").fadeOut(0);
      $("#n_2").removeClass("slideRight");
      $("#n_2").addClass("slideLeft");
   		$('#n_2').fadeIn(400);
   }else if(valor == 3){
   		$("#n_2").fadeOut(0);
      $("#n_3").removeClass("slideRight");
      $("#n_3").addClass("slideLeft");
   		$('#n_3').fadeIn(400);
   }else if(valor == 4){
   		$("#n_3").fadeOut(0);
      $("#n_3").removeClass("slideRight");
      $("#n_4").addClass("slideLeft");
   		$('#n_4').fadeIn(400);
   }
}

function menu_bolitas(valor){
  var res = valor.split("_");
  $("#n_"+res[0]).fadeOut(0);
  if((res[0]*1) > (res[1]*1)){
    $("#n_"+res[1]).removeClass("slideLeft");
    $("#n_"+res[1]).addClass("slideRight");
  }else{
    $("#n_"+res[1]).removeClass("slideRight");
    $("#n_"+res[1]).addClass("slideLeft");
  }
  $('#n_'+res[1]).fadeIn(400);
}

function refrecar_todo(){

   var total = 44000;

   var scrollIndex = $('.horizontal-child').scrollTop();
   scrollIndex = scrollIndex - (total);
   //alert(scrollIndex);
   $('.horizontal-child').animate({scrollTop : scrollIndex},'slow');
  $('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
  $('#flecha_izquierda').css({'cursor':'none'});
  $('#flecha_derecha').html('<img src="images/flecha der.png">');
  $('#flecha_derecha').css({'cursor':'pointer'}); 
  //location.reload();
}

function arriba(){
  $('html,body').animate({scrollTop : 0},'slow');
}

// Lee Cookie de Marco
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// DOCUMENTO LISTO
$(window).ready(function(){ 

	var anno = (new Date).getFullYear();
	$('#contenedor_creditos_fijos samp').html('©'+anno);	
	hpopup();	
  var alto = $(window).height();
  var ancho = $(window).width();
  if(alto > 560 && ancho > 1506 ){
    var lasCookies =  readCookie("Ventanatutorial");
    if(lasCookies != 'ON'){
      $("#opaco").fadeIn(1000);
      document.cookie = "Ventanatutorial=ON; expires=Thu, 18 Dec 2023 12:00:00 UTC"; 
    }
  }

});

//CAMBIA TAMANNO PANTALLA
$(window).on('resize', function(){
	if(yaevaluada==1){
	  location.reload();
	}
	hpopup();
});