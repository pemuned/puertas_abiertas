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
  alto_ventana = alto_ventana + 120;
  
 

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
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Action Oriented Approach</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Multimedia en lengua inglesa, centrado en el enfoque orientado a la acción, usado por el Ministerio de Educación Pública desde el 2016.</span></li><li><span>&nbsp;Facilita la comprensión de los conceptos principales del nuevo currículo y su aplicación, tanto en la planificación como en la enseñanza.</span></li><li><span>&nbsp;Incluye proyectos didácticos descargables.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de Enseñanza del Inglés, I y II Ciclos</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela de Ciencias Sociales y Humanidades, Cátedra de Enseñanza del Inglés.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href=" https://multimedia.uned.ac.cr/pem/action_oriented_approach/pag/home.html" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>action_oriented_approach/<wbr>pag/<wbr>home.<wbr>html</a></p>');
  }else if(valor=='2'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Planeta Planta</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Explora la vida de las plantas, su evolución, fisiología y diversidad con un enfoque científico y accesible.</span></li><li><span>&nbsp;Incluye contenidos sobre estructura, fisiología vegetal, diversidad y conservación.</span></li><li><span>&nbsp;Emplea cuestionarios formativos para evaluar el conocimiento previo y posterior a los contenidos.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes universitarios, especialmente de la Escuela de Ciencias Exactas y Naturales de la UNED, y personas interesadas en botánica general.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela Ciencias Exactas y Naturales, Cátedra Ciencias Biológicas.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/planeta_planta/" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>planeta_planta/</a></p>');
  }else if(valor=='3'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Quality Fair</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Este multimedia en idioma inglés permite aprender y practicar sobre el uso correcto de los adjetivos.</span></li><li><span>&nbsp;Utiliza elementos de gamificación.</span></li><li><span>&nbsp;El material incluye tres actividades interactivas, con distintos niveles de dificultad.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la Carrera de Enseñanza del Inglés.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela de Ciencias Sociales y Humanidades, Cátedra de Enseñanza del Inglés.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/quality_fair/" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>quality_fair/</a></p>');
  }else if(valor=='4'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Academia Precálculo</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Multimedia interactivo para practicar y aplicar conceptos de álgebra y funciones.</span></li><li><span>&nbsp;Emplea la metáfora de un programa de entrenamiento con salones y medallas de evaluación.</span></li><li><span>&nbsp;Ofrece recursos interactivos para identificar las propiedades de las funciones.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la Escuela Ciencias Exactas y Naturales de la UNED que cursan Matemática Nivelatoria, Elementos de Matemática Nivelatoria y Matemática Introductoria.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela Ciencias Exactas y Naturales, Cátedra Matemática para Ingeniería y Cálculo.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/academia-precalculo/" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>academia-<wbr>precalculo/</a></p>');
  }else if(valor=='5'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b><i>Dark Tourism</i> en Costa Rica</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Desarrollado junto al Dr. Xavier Puertas Montoro a partir de una investigación sobre <i>Dark Tourism</i>.</span></li><li><span>&nbsp;Entorno ilustrado en dos dimensiones, que permite explorar espacios con información y conceptos sobre <i>Dark Tourism</i> en Costa Rica.</span></li><li><span>&nbsp;Incluye una clasificación de sitios turísticos y rutas programadas del <i>Dark Tourism</i> en Costa Rica.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la Cátedra de Emprendedurismo Turístico y público interesado en el tema en Costa Rica.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left"> Escuela Ciencias Sociales y Humanidades, Cátedra de Emprendedurismo Turístico.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/dark_tourism/" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>dark_tourism/</a></p>');
  }else if(valor=='6'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Simulador de precios y costos</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Herramienta que facilita el cálculo de bienes o servicios y la definición de precios.</span></li><li><span>&nbsp;Ayuda a los empresarios a mantener un registro sistemático de los precios y costos de sus productos o servicios.</span></li><li><span>&nbsp;Permite comparar y calcular ganancias utilizando dos métodos: precio de mercado por demanda o porcentaje deseado.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Emprendedores y pequeñas empresas</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Vicerrectoría Extensión y Vinculación Territorial, Programa Desarrollo Gerencial.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://sapc.uned.ac.cr/" target="_blank">https://<wbr>www.<wbr>sapc.<wbr>uned.<wbr>ac.<wbr>cr/</a></p>');
  }else if(valor=='7'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Gira virtual Parque Nacional los Quetzales y Cerro Buenavista</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Expone el muestreo para registrar datos de plantas.</span></li><li><span>&nbsp;Compara datos entre el Cerro Buenavista, sector Las Antenas y el Parque Nacional Los Quetzales.</span></li><li><span>&nbsp;Contiene un inventario de plantas y aves con fotos, datos y cantos grabados.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de los Programas de Gestión Turística Sostenible y Manejo de Recursos Naturales.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela Ciencias Exactas y Naturales, Cátedra Ciencias Biológicas, Programas de Gestión Turística Sostenible y Manejo de Recursos Naturales.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/gira-virtual-qbv/inicio" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>gira-<wbr>virtual-<wbr>qbv/<wbr>inicio</a></p>');
  }else if(valor=='8'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Transitemos hacia una nueva cultura de seguridad vial</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Multimedia dirigido a estudiantes de secundaria del del Colegio Nacional de Educación a Distancia.</span></li><li><span>&nbsp;Promueve valores y seguridad vial mediante la cultura vial costarricense.</span></li><li><span>&nbsp;Presenta contenidos con un diseño intuitivo y dinámico.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de educación secundaria del Programa de Estudios de Educación Cívica, Tercer Ciclo de Educación General Básica y Educación Diversificada del Colegio Nacional de Educación a Distancia.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Universidad Estatal a Distancia, Colegio Nacional de Educación a Distancia, Ministerio de Educación Pública.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/seguridad-vial/" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>seguridad-<wbr>vial/</a></p>');
  }else if(valor=='9'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Feria vocacional en línea 2023</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Nace como una alternativa para divulgar la información vocacional de la UNED, en el marco de la virtualización postcovid.</span></li><li><span>&nbsp;Ofrece un entorno inmersivo en tres dimensiones, para conocer la información de las carreras de la universidad.</span></li><li><span>&nbsp;Proyecto en actualización constante que brinda información actual a futuros estudiantes.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de secundaria y personas interesadas en realizar estudios superiores.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Oficina de Orientación y Desarrollo Estudiantil, OFODE</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://feriavocacional.uned.ac.cr/" target="_blank">https://<wbr>feriavocacional.<wbr>uned.<wbr>ac.<wbr>cr/</a></p>');
  }else if(valor=='10'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>Premio Anual de Innovación 2023</b><br><p style="max-width: 400px;">La producción Baraja Genómica fue galardonada con el “Premio Anual de Innovación 2023”, en la categoría de “Producción de material didáctico innovador”, de la Universidad de Brasilia, Brasil.</p><p style="max-width: 400px;">Este material multimedia fue una producción conjunta de la Cátedra Ciencias Biológicas, de la Escuela Ciencias Exactas y Naturales; y, del PEM. Fue producto de la colaboración interinstitucional de diversas universidades, y contó con especialistas de contenido de primer nivel, como la genetista Nazaré Klautau Guimarães, de la Universidad de Brasilia y el biólogo Jorge Lobo Segura, de la Universidad de Costa Rica.</p><br><a href="https://multimedia.uned.ac.cr/index.php?action=detalle&id=99" target="_blank"><b>Ver material</b></a>');
  }else if(valor=='11'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>Premio Persona Funcionaria Distinguida 2024</b><br><p style="max-width: 400px;">En el marco de la celebración del 48 aniversario de la UNED, se otorgó una mención honorífica en el premio “Persona Funcionaria Distinguida 2024”, categoría grupal, al equipo de producción PEM conformado por Seidy Maroto Alfaro, Yuri Vásquez Pérez y Juan Diego Delgado Vargas; así como a Carolina Godoy Cabrera de la Escuela Ciencias Exactas y Naturales, por haber trabado en “Baraja Genómica”,  material multimedia galardonado con el “Premio Anual de Innovación 2023”,  de la Universidad de Brasilia, Brasil.</p>'); 
  }else if(valor=='12'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>Premios SIREICU 2025</b><br><p style="max-width: 400px;">El PEM recibió la estatuilla de plata en la categoría “Campaña Institucional” de los “Premios SIREICU 2025”, organizados por el Consejo Superior Universitario Centroamericano y del Caribe. Dicho reconocimiento fue otorgado al proyecto “Feria Vocacional en línea”, desarrollado por el equipo de producción PEM conformado por Marco Sánchez Mora, Raquel Badilla Barrientos y Deiver Herrera Sánchez, con la participación de Ingrid Chaves Mata, como especialista de contenido de la Oficina de Orientación y Desarrollo Estudiantil (OFODE), de la Vicerrectoría de Vida Estudiantil.</p><p style="max-width: 400px;">Este logro destaca el trabajo colaborativo del PEM, OFODE, Onda UNED, Oficina Institucional de Mercadeo y Comunicación y diversas carreras y escuelas de la Universidad, reafirmando el compromiso con la innovación, la creatividad y la excelencia.</p>'); 
  }else if(valor=='13'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>Ministerio de Trabajo y Seguridad Social</b><br><p style="max-width: 400px;">Proyecto de orientación especializada, para personas funcionarias del  Ministerio de Trabajo y Seguridad Social, en el diseño, la planificación y el desarrollo de dos estrategias de aprendizaje virtual, con sus respectivas propuestas de materiales didácticos, enfocados en el tema del derecho laboral, dirigido a la comunidad piñera de Costa Rica.</p><p style="max-width: 400px;">Esta iniciativa se desarrolló en conjunto con el Programa de Aprendizaje en Línea, el Programa de Apoyo Curricular y Evaluación de los Aprendizajes, que contó con la asesoría y el acompañamiento de la Dirección de Internacionalización y Cooperación y la Fundación de la Universidad Estatal a Distancia para el Desarrollo y Promoción de la Educación a Distancia.</p>'); 
  }else if(valor=='14'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>Ministerio de Salud</b><br><p style="max-width: 400px;">La Plataforma Ulù brinda un espacio interactivo de actualización, donde los profesionales en salud y otros públicos puedan acceder a nuevo conocimiento.</p><p style="max-width: 400px;">Ulù ofrece módulos de autoaprendizaje, diseñados para guiar tanto al personal de salud como a la población en general, en la adquisición de conocimientos básicos sobre los principales factores de riesgo y protección asociados con enfermedades de alta relevancia nacional, en especial la Enfermedad Renal Crónica no Tradicional.</p><p style="max-width: 400px;">La iniciativa fue desarrollada en conjunto con el Ministerio de Salud, con la asesoría y acompañamiento de la Dirección de Internacionalización y Cooperación y la Fundación de la Universidad Estatal a Distancia para el Desarrollo y Promoción de la Educación a Distancia.</p><br><a href="https://ulu.uned.ac.cr" target="_blank"><b>Ver material</b></a>'); 
  }else if(valor=='15'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 20px;"><b>Universidad de Costa Rica</b><br><p style="max-width: 400px;">Proyecto Criterio diagnóstico de desórdenes temporomandibulares, en el marco del Convenio Específico de Colaboración entre la UCR y la UNED (R-CONV-031-2022).</p><p style="max-width: 400px;">Producto del trabajo de investigación, se elaboró un material didáctico interactivo multimedia orientado a apoyar la formación académica y la práctica clínica en el diagnóstico del dolor orofacial. Este recurso constituye una herramienta pedagógica que integra elementos audiovisuales, interactivos y conceptuales, favoreciendo un aprendizaje integral en la aplicación del Instrumento con los Criterios Diagnósticos para los Trastornos Temporomandibulares (DC/TMD, por sus siglas en inglés).</p><p style="max-width: 400px;">La iniciativa fue desarrollada junto con la Facultad de Odontología y la Clínica de Dolor Orofacial y Medicina Bucal de la UCR, con el acompañamiento de la Dirección de Internacionalización y Cooperación.</p><br><a href="https://multimedia.uned.ac.cr/pem/dolor_orofacial/" target="_blank"><b>Ver material</b></a>'); 
  }else if(valor=='101'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<div id="titulo_creditos"><b>Créditos</b></div><div id="imagenescr"><div id="logo_multimedia"><img src="images/galeria_multimedia_logo.png"></div><div id="logo_uned"><img src="images/galeria_uned_logo.png"></div></div><div id="contenedor_linea"></div><div align="left"><div id="titulo_moviles"><p><b>Galería virtual</b></p></div><div id="titulo_2"><p>Jornada de puertas abiertas y 25 aniversario</p></div><p><b>Código de publicación:</b> SW0125<br>Versión final.<br><b>Publicación:</b> noviembre 2025</p><p>Esta es una producción de la Universidad Estatal a Distancia, UNED.<br>Con la colaboración de:<br>Dirección de Producción de Materiales Didácticos, DPMD.<br>Programa de Producción Electrónica Multimedial, PEM.</p><p><b>Producción multimedia</b><br>Producción y diseño gráfico: Ana Carolina Zamora, Rommy Ulate Paniagua, Vivian González Zúñiga, Paúl Alvarado Quesada, Juan Diego Delgado Vargas.<br>Desarrollo web: Rommy Ulate Paniagua.<br>Colaboración: Rocío Aguilar Rodríguez, Mario Badilla Quesada, Sergio Castro Flores, Deiver Herrera Sánchez, Seidy Maroto Alfaro, José Pablo Ramos Ulate, Marco Sánchez Mora y Yuri Vásquez Pérez.</p><p>En esta producción se empleó una ilustración generada mediante inteligencia artificial (IA), inspirada en la escultura “El Pensador”, obra de Auguste Rodin. La imagen fue creada con la herramienta de IA generativa gratuita, Adobe Firefly, parte integral de Adobe GenStudio, y posteriormente editada y validada por el equipo de producción del PEM. Su uso es con fines educativos y de comunicación, en el marco de la publicación de esta galería virtual conmemorativa del 25 aniversario del programa.</p><p><b>Derecho de Autor</b><br>ADVERTENCIA: Los derechos patrimoniales de la presente obra pertenecen en su totalidad a la Universidad Estatal a Distancia, de Costa Rica, por lo que está prohibida su copia o reproducción, comunicación pública, puesta a disposición del público, transmisión, transformación (incluyendo adaptación y traducción), distribución, alquiler o venta de ejemplares, realizada por cualquier medio o procedimiento, conocido o por conocerse, sin el consentimiento previo por escrito del titular de los derechos. Eludir esta prohibición o las medidas tecnológicas de protección que contenga la obra, constituye una conducta sancionada por normas de propiedad intelectual.</p></div>');
  }else if(valor=='102'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<div id="titulo_creditos"><b>Acerca de la Galería Virtual</b></div><div id="imagenescr"><div id="logo_multimedia"><img src="images/galeria_multimedia_logo.png"></div><div id="logo_uned"><img src="images/galeria_uned_logo.png"></div></div><div id="contenedor_linea"></div><div align="left"><div id="titulo_moviles"><p><b>Galería virtual</b></p></div><div id="titulo_2"><p>Aniversario del Programa de Producción Electrónica Multimedial (PEM)</p></div><p>Bienvenidas y bienvenidos a la Galería Virtual del Programa de Producción Electrónica Multimedial (PEM) de la Universidad Estatal a Distancia de Costa Rica (UNED).</p><p>Este espacio conmemorativo celebra los 25 años de trayectoria del Programa, destacando su aporte continuo a la innovación educativa y al fortalecimiento del modelo de educación a distancia.</p><p>En esta exposición virtual encontrará una selección de materiales didácticos interactivos multimedia desarrollados entre los años 2021 y 2025, junto con una muestra de reconocimientos, proyectos y convenios realizados durante este período.</p></div>');
  }else if(valor=='103'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Fundamentos de Criminología</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Plataforma lúdica de aprendizaje, que extrae los aspectos más importantes del libro <i>Fundamentos de Criminología</i>,</span></li><li><span>&nbsp;Permite conocer los antecedentes históricos y las características epistemológicas de la criminología como ciencia.</span></li><li><span>&nbsp;Incluye ocho actividades interactivas, con elementos de gamificación.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la carrera de Carrera de Criminología.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela de Ciencias Sociales y Humanidades, Cátedra de Criminología. Programa de Ciencias Criminológicas.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/criminologia/" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>criminologia/</a></p>');
  }else if(valor=='104'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Ecoexploradores: cuidando nuestro planeta</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Emplea una interfaz intuitiva apta para niños y adultos, que puede usarse en las aulas de primaria.</span></li><li><span>&nbsp;Combina teoría y actividades lúdicas, incluido un minijuego de competición sobre reciclaje.</span></li><li><span>&nbsp;Está desarrollado con un motor de juegos abierto y modelos 3D <i>low poly</i> (bajo poligonaje), para su ambientación y personajes.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes universitarios de la Carrera de Educación General Básica, I y II Ciclos y estudiantes de educación primaria.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela Ciencias de la Educación, Cátedra Didáctica de las Ciencias Naturales.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/eco-exploradores/" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>eco-<wbr>exploradores/</a></p>');
  }else if(valor=='105'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Simulador de negociación de instrumentos financieros</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Se enfoca en los principales instrumentos financieros actuales, como bonos, acciones y fondos de inversión.</span></li><li><span>&nbsp;Ofrece módulos independientes que permiten un uso flexible en diversos contextos formativos.</span></li><li><span>&nbsp;Cada módulo combina teoría y actividades interactivas para favorecer un aprendizaje autónomo y guiado.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la Cátedra de Gestión Bancaria y a personas interesadas en los instrumentos financieros y los mercados internacionales.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela Ciencias de la Administración, Cátedra Gestión Bancaria.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/instrumentos_financieros/page/temas.php" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>instrumentos_<wbr>financieros/<wbr>page/<wbr>temas.php</a></p>');
  }else if(valor=='106'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Inteligencia policial</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Multimedia pionero a nivel nacional, sobre el abordaje del “Ciclo de la inteligencia” en procesos de investigación y otras funciones policiales.</span></li><li><span>&nbsp;Herramienta de consulta para instituciones y organizaciones del ámbito policial o de seguridad ciudadana, tanto a nivel nacional como internacional.</span></li><li><span>&nbsp;Presenta un diseño dinámico, atractivo y de impacto, basado en la metáfora del cómic o historieta policial.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la carrera de Ciencias Policiales de la UNED.</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela Ciencias Sociales y Humanidades, Cátedra Gestión en Ciencias Policiales.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/inteligencia-policial/" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>inteligencia-<wbr>policial/</a></p>');
  }else if(valor=='107'){
    $('#ventana_movil_contenido, #contenido_ventana_compu').html('<p style="font-size: 25px;"><b>Galería virtual de próceres</b></p><br><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>&nbsp;Opción inmersiva tridimensional, para apreciar y divulgar las 32 esculturas de bustos de los próceres de la patria con los que cuenta la UNED, al momento.</span></li><li><span>&nbsp;Incluye una reseña biográfica de cada personaje.</span></li><li><span>&nbsp;Cuenta con una versión inmersiva en tres dimensiones, un sitio web y un libro digital descargable.</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Comunidad universitaria UNED</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Vicerrectoría Ejecutiva, Comisión de Arte de la UNED.</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/pem/galeriadeproceres/ " target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>pem/<wbr>galeriadeproceres/</a></p>');
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
    $('#imagen_movil').html('<p>Action Oriented Approach</p><img src="images/afiches/AficheActionOrientedApproach.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='2'){
    $('#imagen_movil').html('<p>Planeta Planta</p><img src="images/afiches/afiche_PlanetaPlanta.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='3'){
    $('#imagen_movil').html('<p>Quality Fair</p><img src="images/afiches/AficheQualituFair.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='4'){
    $('#imagen_movil').html('<p>Academia Precálculo</p><img src="images/afiches/af_precalculo.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='5'){
    $('#imagen_movil').html('<p>Dark Tourism en Costa Rica</p><img src="images/afiches/AficheDarkTourism.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='6'){
    $('#imagen_movil').html('<p>Simulador de precios y costos</p><img src="images/afiches/Afiche_SAPC.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='7'){
    $('#imagen_movil').html('<p>Gira virtual Parque Nacional los Quetzales y Cerro Buenavista</p><img src="images/afiches/af_gira_virtual.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='8'){
    $('#imagen_movil').html('<p>Transitemos hacia una nueva cultura de seguridad vial</p><img src="images/afiches/AficheTransitemos.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='9'){
    $('#imagen_movil').html('<p>Feria vocacional en línea 2023</p><img src="images/afiches/af_feri_vocacional.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='10'){
    $('#imagen_movil').html('<p>AFICHE CONMEMORATIVO DEL 25 ANIVERSARIO</p><img src="images/afiches/g_afiche25.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='11'){
    $('#imagen_movil').html('<p>Fundamentos de Criminología</p><img src="images/afiches/af_criminologia.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='12'){
    $('#imagen_movil').html('<p>Ecoexploradores: cuidando nuestro planeta</p><img src="images/afiches/Afiche_ecoexploradores.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='13'){
    $('#imagen_movil').html('<p>Simulador de negociación de instrumentos financieros</p><img src="images/afiches/Afiche_InstFinacieros.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='14'){
    $('#imagen_movil').html('<p>Inteligencia policial</p><img src="images/afiches/AficheInteligenciaPolicial.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
  }else if(valor=='15'){
    $('#imagen_movil').html('<p>Galería virtual de próceres</p><img src="images/afiches/af_galeria_proceres.png"><div class="boton_ventanas" onclick="'+"javascript:abrir_imagen_movil('0');"+'">Cerrar</div>');
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
      total = 39260;
    }else if(alto< 1000){
      total = 39260;
    }else{
      total = 41157;
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

      $('#iniciocuerpo').css({'display':'block'});
      $('#cerrarcuerpo').css({'display':'block'});
    	
    }else{
    	$('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
    	$('#flecha_izquierda').css({'cursor':'none'}); 

      $('#iniciocuerpo').css({'display':'none'});
      $('#cerrarcuerpo').css({'display':'none'});
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
      total = 39260;
    }else if(alto< 1000){
      total = 39260;
    }else{
      total = 41157;
    }
    //var total = ($("#guia").width() * 16);
    var ancho = $(window).width();
    var medioancho = (ancho*1) / 2;
    scrollIndex = scrollIndex - medioancho;
    $('.horizontal-child').animate({scrollTop : scrollIndex},'slow');

     if(scrollIndex > 0){
    	$('#flecha_izquierda').html('<img src="images/flecha izq.png">');
    	$('#flecha_izquierda').css({'cursor':'pointer'}); 

      $('#iniciocuerpo').css({'display':'block'});
      $('#cerrarcuerpo').css({'display':'block'});
    	
    }else{
    	$('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
    	$('#flecha_izquierda').css({'cursor':'none'}); 

      $('#iniciocuerpo').css({'display':'none'});
      $('#cerrarcuerpo').css({'display':'none'});
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

      $('#iniciocuerpo').css({'display':'block'});
      $('#cerrarcuerpo').css({'display':'block'});
      

    }else{
      $('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
      $('#flecha_izquierda').css({'cursor':'none'}); 

      $('#iniciocuerpo').css({'display':'none'});
      $('#cerrarcuerpo').css({'display':'none'});
      

     }
     var alto = $(window).height();
    if(alto< 800){
      total = 39260;
    }else if(alto< 1000){
      total = 39260;
    }else{
      total = 41157;
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
      total = 39260;
    }else if(alto< 1000){
      total = 39260;
    }else{
      total = 41157;
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

      $('#iniciocuerpo').css({'display':'block'});
      $('#cerrarcuerpo').css({'display':'block'});
    	
     }else{
    	$('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
    	$('#flecha_izquierda').css({'cursor':'none'}); 

      $('#iniciocuerpo').css({'display':'none'});
      $('#cerrarcuerpo').css({'display':'none'});
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
      total = 39260;
    }else if(alto< 1000){
      total = 39260;
    }else{
      total = 41157;
    }
       //var total = ($("#guia").width() * 16);
       if(scrollIndex > 0){
    	$('#flecha_izquierda').html('<img src="images/flecha izq.png">');
    	$('#flecha_izquierda').css({'cursor':'pointer'}); 

      $('#iniciocuerpo').css({'display':'block'});
      $('#cerrarcuerpo').css({'display':'block'});
    	
     }else{
    	$('#flecha_izquierda').html('<img src="images/flecha izq_apa.png">');
    	$('#flecha_izquierda').css({'cursor':'none'}); 

      $('#iniciocuerpo').css({'display':'none'});
      $('#cerrarcuerpo').css({'display':'none'});
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
  $('#iniciocuerpo').css({'display':'none'});
  $('#cerrarcuerpo').css({'display':'none'});
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