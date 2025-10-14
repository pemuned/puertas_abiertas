<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Galería virtual: Jornada de puertas abiertas y 20 aniversario</title>

<!-- Bootstrap -->
<link rel="stylesheet" href="css/bootstrap.css">
<!-- letra -->
<link href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&display=swap" rel="stylesheet">
<!-- Animaciones en CSS -->
<link rel="stylesheet" href="css/animations.css">
<!-- Carrusel -->
<link rel="stylesheet" href="css/flickity.css">
<!-- Estilos Propios -->
<link rel="stylesheet" href="css/estilos.css">
<!-- Carrusel en CSS -->
<link rel="stylesheet" href="css/carousel.css">
</head>

<body>

<div id="opaco_videos" align="center">
  <div id="ventana_video"><div id="contenido_ventana_video" align="center"></div><br><div class="boton_ventanas" onclick="javascript:abrir_ventana_video('0');">Cerrar</div></div>
</div>


<div id="opaco_compu" align="center"></div>
<div id="contenedor_ventana_compu" align="center"><div id="ventana_compu"><div id="contenido_ventana_compu" align="center"></div><br><div class="boton_ventanas" onclick="javascript:abrir_ventana_compu('0');">Cerrar</div></div></div>

<div id="opaco_movil" align="center"></div>
<div id="imagen_movil" align="center"></div>
<div id="contenedor_ventana_movil" align="center"><div id="ventana_movil">
  <div id="ventana_movil_contenido">
  </div>
  <br> 
  <div class="boton_ventanas" onclick="javascript:abrir_ventana_movil('0');">Cerrar</div>
</div></div>


<!-- 
<div id="opaco" align="center">
  
  <div class="slideDown" id="ventana_informacion" align="center">
    
        <div id="n_1">
          <div class="imagen_popup"><img src="images/popupinfo/galeria_ojo.svg"></div>
          <div class="texto_popup">Para navegar en la galería virtual puede hacerlo de 3 formas distintas:</div>
          <div class="tult_popup">
            <div class="circulo activo"></div>
            <div class="circulo" onclick="javascript:menu_bolitas('1_2');"></div>
            <div class="circulo" onclick="javascript:menu_bolitas('1_3');"></div>
            <div class="circulo" onclick="javascript:menu_bolitas('1_4');"></div>
          </div>
          <div class="boton_ventanas" onclick="javascript:abrir_popup('2');">Siguiente</div>
        </div>
        <div id="n_2">
          <div class="imagen_popup"><img src="images/popupinfo/galeria_flechas_juntas.svg"></div>
          <div class="texto_popup">Con los botones de navegación de la interfaz</div>
          <div class="tult_popup">
            <div class="circulo" onclick="javascript:menu_bolitas('2_1');"></div>
            <div class="circulo activo"></div>
            <div class="circulo" onclick="javascript:menu_bolitas('2_3');"></div>
            <div class="circulo" onclick="javascript:menu_bolitas('2_4');"></div>
          </div>
          <div class="boton_ventanas" onclick="javascript:abrir_popup('3');">Siguiente</div>
        </div>
        <div id="n_3">
          <div class="imagen_popup" id="trespopup"><img src="images/popupinfo/galeria_mouse.svg"></div>
          <div class="texto_popup">Con la rueda de desplazamiento del ratón</div>
          <div class="tult_popup">
            <div class="circulo" onclick="javascript:menu_bolitas('3_1');"></div>
            <div class="circulo" onclick="javascript:menu_bolitas('3_2');"></div>
            <div class="circulo activo"></div>
            <div class="circulo" onclick="javascript:menu_bolitas('3_4');"></div>
          </div>
          <div class="boton_ventanas" onclick="javascript:abrir_popup('4');">Siguiente</div>
        </div>
        <div id="n_4">
          <div class="imagen_popup" id="cuatropopup"><img src="images/popupinfo/galeria_flechas_teclado.svg"></div>
          <div class="texto_popup">Con las flechas del teclado</div>
          <div class="tult_popup">
            <div class="circulo" onclick="javascript:menu_bolitas('4_1');"></div>
            <div class="circulo" onclick="javascript:menu_bolitas('4_2');"></div>
            <div class="circulo" onclick="javascript:menu_bolitas('4_3');"></div>
            <div class="circulo activo"></div>
          </div>
          <div class="boton_ventanas" onclick="javascript:abrir_popup('0');">Entrar</div>
        </div>
  </div>

</div>
-->
 
<div id="contenedor_dis_grandes" style="color:#FFFFFF;">


<div id="techo"></div>

<div class="horizontal-parent" style="color:#FFFFFF;">
  
  <div class="horizontal-child">
     
    
  <div class="slide" id="guia">
           <div id="luz_1" align="center"><img class="spot" src="images/elementos/spot.png"></div>
          <img id="puerta" src="images/galeria/puerta.svg">
          <div id="imagenescr">
           <div id="logo_multimedia"><img src="images/galeria_multimedia_logo.png"></div><div id="logo_uned"><img src="images/galeria_uned_logo.png"></div>
         </div>
         <div id="texto_saludo">
           <div id="titulo_moviles"><p><b>Galería virtual</b></p></div> 
           <div id="titulo_2"><p>25 aniversario</p></div>
           <p>Bienvenidas y bienvenidos a la galería virtual del Programa de Producción Electrónica Multimedial (PEM) de la Universidad Estatal a Distancia de Costa Rica (UNED).<br>Les invitamos a recorrer este espacio con motivo del 25 aniversario del Programa, donde encontrará, una exposición de afiches representativos de materiales didácticos interactivos multimedia concluidos entre los años 2021 y 2025, así como reconocimientos, proyectos y convenios que se realizaron en ese periodo, entre otras secciones.<br>Estos recursos se destacan por su calidad y valor educativo, y constituyen ejemplos claros de los aportes del PEM al compromiso institucional de ofrecer herramientas de apoyo que fortalezcan las experiencias de aprendizaje de personas estudiantes y docentes, en el marco del modelo de educación a distancia de la UNED.</p>
         </div>
         <div id="titulo_tuto">
           <p>Para navegar en la galería virtual puede hacerlo de 3 formas distintas:</p>
          <div id="contenedortuto">
             <div class="piezatuto"><img src="images/galeria/circulo_flechas.svg"> <p>Con los botones de navegación de la interfaz</p></div>
             <div class="piezatuto"><img src="images/galeria/circulo_raton.svg"> <p>Con la rueda de desplazamiento del ratón</p></div>
             <div class="piezatuto"><img src="images/galeria/circulo _teclado.svg"> <p>Con las flechas <br>del teclado</p></div>
          </div>
        </div>

      <div id="luz_2" align="center"><img class="spot" src="images/elementos/spot.png"></div>
      <div id="afiche1">
        <div id="afiche1imagen" align="center">
             <img class="afiche" src="images/afiches/af_25.jpg">
             <p>Afiche conmemorativo del 25 aniversario</p>
        </div>
        <div id="afiche1texto"><p>Este año 2020, el PEM cumple 20 años de elaborar materiales didácticos multimedia, para el apoyo de los procesos de aprendizaje, de los estudiantes de la Universidad Estatal a Distancia, de Costa Rica.</p><p>Esta labor ha ido evolucionando gracias a los avances tecnológicos y a la investigación, que realizamos en nuestro programa. Al principio, los materiales se hacían con las herramientas Director y Flash, que se distribuían en discos compactos (CD). Hoy, nuestros materiales no solo están disponibles en línea, sino que los hemos elaborado con nuevos lenguajes de programación como HTML5, que permiten la creación de modelos 3D, realidad aumentada, aplicaciones para móviles, adaptación a múltiples dispositivos, entre otros.</p></div>
      </div> 
      <div id="textoconteo" align="center"><p id="p1">
<a>
<img src="https://www.easycounter.com/counter.php?galeria2020"
border="0" alt="Counter"></a>
      </p><p id="p2">visitantes</p></div>
      <div id="conteo" align="center"><img src="images/elementos/caballete.png"></div>   

        <div id="luz_3" align="center"><img class="spot" src="images/elementos/spot.png"></div>
       <div id="texto_acto"><p id="t_acto" class="titulo_primeralinea">Acto inaugural</p><p>Palabras de las autoridades universitarias</p></div>

       <div id="imagen_tv"><img src="images/galeria/tv.svg"></div>
       <div id="video_tv" align="center"><iframe src="https://vimeo.com/showcase/7841032/embed" frameborder="0" allowfullscreen="" ></iframe></div>

       <div id="luz_4" align="center"><img class="spot" src="images/elementos/spot.png"></div>
      <div id="texto_afiches-e"><p id="t_afiches-e" class="titulo_primeralinea">Exposición de afiches</p><p>Materiales multimedia<br>2019-2020</p></div>

      <div id="luz_larga_1" align="center"><img class="luz_larga" src="images/elementos/luz1.png"></div>
      <div id="afiche2">
        <div id="afiche2imagen" align="center">
             <img class="afiche" src="images/afiches/af_grammar.png">
             <p>Grammar Village</p>
        </div>
        <div id="afiche2texto" class="afiches_cl"><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Actividades interactivas</span></li><li><span>Elementos de gamificación</span></li><li><span>Propicia el aprendizaje lúdico</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes Enseñanza del Inglés I y II Ciclo</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra de Lengua Inglesa</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMGraVil" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMGraVil</a></p></div>
      </div> 
      <div id="banca_1" align="center"><img class="banca" src="images/elementos/banca.png"></div>
      <div id="afiche3">
        <div id="afiche3imagen" align="center">
             <img class="afiche" src="images/afiches/af_baraja.png">
             <p>Baraja Genómica</p>
        </div>
        <div id="afiche3texto" class="afiches_cl"><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Actividades interactivas</span></li><li><span>Elementos de gamificación</span></li><li><span>Incluye material adicional, descargable</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes Enseñanza de las Ciencias</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra Ciencias Biológicas</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMBarGen" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMBarGen</a></p></div>
      </div> 
      <div id="luz_5" align="center"><img class="spot" src="images/elementos/spot.png"></div>
       <div id="logo_20" align="center"><img class="e20_ani" src="images/galeria/logo_20.svg"></div>
       <div id="venus_1" align="center"><img class="venus" src="images/galeria/venus.png"></div>
       <div id="luz_larga_2" align="center"><img class="luz_larga" src="images/elementos/luz1.png"></div>
      <div id="afiche4">
        <div id="afiche4imagen" align="center">
             <img class="afiche" src="images/afiches/af_coro.png">
             <p>Partes del todo <br>(Proyecto Pedagógico Coral Vivace)</p>
        </div>
        <div id="afiche4texto" class="afiches_cl"><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Parte de un proyecto pedagógico y extensión universitaria y comunitaria, impulsado por la ECE</span></li><li><span>Promueve la práctica coral en el ambiente musical</span></li><li><span>Selección interactiva de las pistas de audio que conforman cada interpretación</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Público general interesado en la práctica coral</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela de Ciencias de la Educación</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMParTod" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMParTod</a></p></div>
      </div> 
      <div id="banca_2" align="center"><img class="banca" src="images/elementos/banca.png"></div>
      <div id="afiche5">
        <div id="afiche5imagen" align="center">
             <img class="afiche" src="images/afiches/af_fitohormonas.png">
             <p>Fitohormonas</p>
        </div>
        <div id="afiche5texto" class="afiches_cl"><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Laboratorios guiados paso a paso</span></li><li><span>Explicación en video con transcripción y subtítulos</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes del laboratorio de botánica agrícola</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra de Ciencias Biológicas</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMFitLab" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMFitLab</a></p></div>
      </div> 

      <div id="luz_6" align="center"><img class="spot" src="images/elementos/spot.png"></div>
      <div class="elemento_historia" id="ele_his_1"><div class="circulo_grande"></div><img src="images/elementos/gal_pc.png"><p class="globo iii abajo-izquierda">Hemos utilizado diferentes tecnologías, resoluciones de pantalla y sistemas operativos para el desarrollo de nuestros materiales.</p></div>

      <div id="luz_larga_3" align="center"><img class="luz_larga" src="images/elementos/luz1.png"></div>

      <div id="afiche6">
        <div id="afiche6imagen" align="center">
             <img class="afiche" src="images/afiches/af_academia.png">
             <p>Academia Municipal</p>
        </div>
        <div id="afiche6texto" class="afiches_cl"><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Gestor de contenidos adaptado para creación de cursos de capacitación y recursos abiertos</span></li><li><span>Herramientas para comunidad y foros pensadas en el público meta</span></li><li><span>Diseño de colección de cursos de autoaprendizaje, los cuales incluyen actividades interactivas</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Diferentes actores de los gobiernos locales</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Instituto de Formación y Capacitación Municipal y Desarrollo Local</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://academiamunicipal.uned.ac.cr" target="_blank">https://<wbr>academiamunicipal.<wbr>uned.<wbr>ac.<wbr>cr/</a></p></div>
      </div> 
      <div id="banca_3" align="center"><img class="banca" src="images/elementos/banca.png"></div>
      <div id="afiche7">
        <div id="afiche7imagen" align="center">
             <img class="afiche" src="images/afiches/af_agrostologia.png">
             <p>Nutrición animal y agrostología</p>
        </div>
        <div id="afiche7texto" class="afiches_cl"><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Amplio catálogo fotográfico</span></li><li><span>Enlista beneficios, características y animales que consumen diferentes tipos de pasto</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la asignatura Nutrición animal y agrostología</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra de Ciencias Agropecuarias de la ECEN</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMNutAgr" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMNutAgr</a></p></div>
      </div> 

      <div id="luz_7" align="center"><img class="spot" src="images/elementos/spot.png"></div>
      <div class="elemento_historia" id="ele_his_2"><div class="circulo_grande"></div><img src="images/elementos/gal_flash.png"><p class="globo iii abajo-izquierda">Durante 9 años nuestros materiales fueron desarrollados con las herramientas Director y Flash.</p></div>

      <div id="luz_larga_4" align="center"><img class="luz_larg1" src="images/elementos/luz2.png"></div>

      <div id="afiche8">
        <div id="afiche8imagen" align="center">
             <img class="afiche" src="images/afiches/af_sap.png">
             <p>Seminarios de Actualización Profesional de la ECEN</p>
        </div>
        <div id="afiche8texto" class="afiches_cl"><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Gestor de contenidos que permite alojar múltiples sitios</span></li><li><span>Clonado de sitios que permite agilizar la creación y la administración</span></li><li><span>Diseño de plantilla personalizable</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes, graduados y egresados de la ECEN en busca de actividades de actualización profesional y para los organizadores de las actividades</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Escuela de Ciencias Exactas y Naturales</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://multimedia.uned.ac.cr/ecen" target="_blank">https://<wbr>multimedia.<wbr>uned.<wbr>ac.<wbr>cr/<wbr>ecen</a></p></div>
      </div> 
      <div id="banca_4" align="center"><img class="banca" src="images/elementos/banca.png"></div>
      <div id="afiche9">
        <div id="afiche9imagen" align="center">
             <img class="afiche" src="images/afiches/af_pedagogia.png">
             <p>Pedagogía universitaria</p>
        </div>
        <div id="afiche9texto" class="afiches_cl"><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Actualización continua con ajustes de acuerdo a las necesidades educativas</span></li><li><span>Múltiples versiones, para diferentes modalidades del curso</span></li><li><span>Multimedia interactivo web con ejercicios</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Funcionarios de la UNED</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Centro de Capacitación en Educación a Distancia</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMPedUni" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/qr/<wbr>PEMPedUni</a></p></div>
      </div> 
      <div id="banca_5" align="center"><img class="banca" src="images/elementos/banca.png"></div>
      <div id="afiche10">
        <div id="afiche10imagen" align="center">
             <img class="afiche" src="images/afiches/af_disco duro.png">
             <p>Disco Duro</p>
        </div>
        <div id="afiche10texto" class="afiches_cl"><p class="text-left"><img src="images/galeria/gal_aspectod.svg"><b>ASPECTOS RELEVANTES</b></p><p style="margin-left: 44px;" class="text-left"><ul class="text-left"><li><span>Cápsulas en videos sobre teoría y práctica relacionada a los discos duros</span></li><li><span>Sistema de navegación interno por los diferentes temas de cada video</span></li><li><span>Autoevaluación integrada</span></li></ul></p><p class="text-left"><img src="images/galeria/gal_publico.svg"><b>PÚBLICO META</b></p><p style="margin-left: 44px;" class="text-left">Estudiantes de la asignatura Soporte Técnico</p><p class="text-left"><img src="images/galeria/gal_dependencia.svg"><b>DEPENDENCIA</b></p><p style="margin-left: 44px;" class="text-left">Cátedra TIC e Ingeniería</p><p class="text-left"><img src="images/galeria/gal_enlace.svg"><b>ENLACE AL MATERIAL</b></p><p style="margin-left: 44px;" class="text-left"><a href="https://www.uned.cr/qr/PEMSopTec" target="_blank">https://<wbr>www.<wbr>uned.<wbr>cr/<wbr>qr/<wbr>PEMSopTec</a></p></div>
      </div> 

       <div id="luz_8" align="center"><img class="spot" src="images/elementos/spot.png"></div>
       <div class="elemento_historia" id="ele_his_3"><div class="circulo_grande"></div><img src="images/elementos/gal_cd.png"><p class="globo iii abajo-izquierda">Durante 11 años nuestros materiales fueron distribuidos únicamente en disco compacto.</p></div>

      <div id="luz_9" align="center"><img class="spot" src="images/elementos/spot.png"></div>
      <div class="elemento_historia" id="ele_his_4"><div class="circulo_grande"></div><img src="images/elementos/gal_explorer.png"><p class="globo iii abajo-izquierda">A partir del 2011 nuestros materiales se pueden consultar desde internet.</p></div>

      <div id="texto_pres_ma"><p id="t_pres_ma" class="titulo_primeralinea">Presentación</p><p>De materiales multimedia</p></div>

      
      <div id="con_b_banner_1" align="center"><a onclick="javascript:abrir_ventana_video('1');">Ver video</a></div>
      <div class="banner" id="banner_1" align="center"><img src="images/elementos/colg_coro.png"><p>Partes del todo</p></div>

       <div id="con_b_banner_2" align="center"><a onclick="javascript:abrir_ventana_video('2');">Ver video</a></div>
      <div class="banner" id="banner_2" align="center"><img src="images/elementos/colg_grammar.png"><p>Grammar Village</p></div>

       <div id="con_b_banner_3" align="center"><a onclick="javascript:abrir_ventana_video('3');">Ver video</a></div>
      <div class="banner" id="banner_3" align="center"><img src="images/elementos/colg_baraja.png"><p>Baraja Genómica</p></div>

      <div id="texto_recono"><p id="t_recono" class="titulo_primeralinea">Reconocimientos 2020</p></div>

      <div id="luz_reco_1" ><img src="images/elementos/luz3.png"></div>

      <div class="reconocimiento" id="reco_1" align="center">
           <p class="mayor_t">Éxito internacional</p>
           <p>Sonidos del lenguaje</p>
           <div class="contiena_boton_afiche" align="center"><div class="boton_afiche" onclick="javascript:abrir_ventana_compu('10');">Ver más</div></div>
           <div class="mayot_a" ><img src="images/afiches/af_dislalias.png"></div>
      </div>
      <div id="busto_reco"><img src="images/elementos/internacional.png"></div>
      <div id="divisor_1"><img src="images/elementos/divisor.png"></div>


      <div id="luz_reco_2" ><img src="images/elementos/luz3.png"></div>
       <div class="reconocimiento" id="reco_2" align="center">
           <p class="mayor_t">Éxito nacional</p>
           <p>Academia Municipal</p>
           <div class="contiena_boton_afiche" align="center"><div class="boton_afiche" onclick="javascript:abrir_ventana_compu('11');">Ver más</div></div>
           <div class="mayot_a" ><img src="images/afiches/af_academiareconocimiento.png"></div>
      </div>
      <div id="busto_reco2"><img src="images/elementos/nacional.png"></div>
      <div id="divisor_2"><img src="images/elementos/divisor.png"></div>

      <div id="luz_reco_3" ><img src="images/elementos/luz3.png"></div>
      <div class="reconocimiento" id="reco_3" align="center">
           <p class="mayor_t">Más navegado</p>
           <p>Grammar Village</p>
           <div class="contiena_boton_afiche" align="center"><div class="boton_afiche" onclick="javascript:abrir_ventana_compu('12');">Ver más</div></div>
           <div class="mayot_a" ><img src="images/afiches/af_grammar.png"></div>
      </div>
      <div class="reconocimiento" id="reco_4" align="center">
           <p class="mayor_t" id="honorifico">Más navegado (Mención honorífica)</p>
           <p>Terminología Médica</p>
           <div class="contiena_boton_afiche" align="center"><div class="boton_afiche" onclick="javascript:abrir_ventana_compu('13');">Ver más</div></div>
           <div class="mayot_a" ><img src="images/afiches/af_terminologiamedica.png"></div>
      </div>
      <div id="busto_reco3"><img src="images/elementos/navegado.png"></div>
      <div id="divisor_3"><img src="images/elementos/divisor.png"></div>
      <div id="divisor_4"><img src="images/elementos/divisor.png"></div>

      <div id="luz_reco_4" ><img src="images/elementos/luz3.png"></div>
       <div class="reconocimiento" id="reco_5" align="center">
           <p class="mayor_t">Mayor permanencia</p>
           <p id="nom_largo">Anatomía y Fisiología Animal</p>
           <div class="contiena_boton_afiche" align="center"><div class="boton_afiche" onclick="javascript:abrir_ventana_compu('14');">Ver más</div></div>
           <div class="mayot_a" ><img src="images/afiches/af_anatomia.png"></div>
      </div>
      <div id="busto_reco4"><img src="images/elementos/permanencia.png"></div>
      <div id="divisor_5"><img src="images/elementos/divisor.png"></div>

      <div id="luz_reco_5" ><img src="images/elementos/luz3.png"></div>
      <div class="reconocimiento" id="reco_6" align="center">
           <p class="mayor_t">Escuela estrella</p>
           <p>ECEN</p>
           <div class="contiena_boton_afiche" align="center"><div class="boton_afiche" onclick="javascript:abrir_ventana_compu('15');">Ver más</div></div>
           <div class="mayot_a" ><img src="images/afiches/af_ecen.png"></div>
      </div>
      <div id="busto_reco5"><img src="images/elementos/escuela.png"></div>
      <div id="divisor_6"><img src="images/elementos/divisor.png"></div>


      <div id="banca_6" align="center"><img class="banca" src="images/elementos/banca.png"></div>

      <div id="texto_aniv"><p id="t_aniv" class="titulo_primeralinea">Saludos</p><p>De aniversario</p></div>

      <div id="imagen_tv2"><img src="images/galeria/tv.svg"></div>
       <div id="video_tv2" align="center"><iframe src="https://vimeo.com/showcase/7841020/embed" frameborder="0" allowfullscreen="" ></iframe></div>

       <div id="finales"><div id="imagenescr">
           <div id="logo_multimedia"><img src="images/galeria_multimedia_logo.png"></div><div id="logo_uned"><img src="images/galeria_uned_logo.png"></div>
      </div></div>

      <div id="creditos_finales">

        <div align="left">
        <div id="titulo_creditos"><b>Créditos</b></div><br>

        
                <div id="titulo_moviles"><p><b>Galería virtual</b></p></div>
                <div id="titulo_2"><p>Jornada de puertas abiertas y 20 aniversario</p></div>
                <p><b>Código de publicación:</b> SW0120<br><b>Publicación:</b>1 diciembre 2020</p>
                <p>Esta galería es una producción de la Universidad Estatal a Distancia, Dirección de Producción de Materiales Didácticos y el Programa de Producción Electrónica Multimedial.</p>
                <p><b>Producción multimedia</b><br>Producción y diseño gráfico: Ana Carolina Zamora Sanabria, Juan Diego Delgado Vargas, Mario Badilla Quesada, Raquel Badilla Barrientos y Vivian González Zúñiga.</p>        
        </div>
      </div>

       <div id="c2_finales">
        <div align="left">
             <p>Desarrollo web: Romy Ulate Paniagua<br>Colaboración: Marco Antonio Sánchez Mora, Paúl Alvarado Quesada, Seidy Maroto Alfaro y Yuri Vázquez Pérez.<br>Agradecimientos: a todas las personas que colaboraron en la elaboración de esta Galería virtual.</p>    
             <p><b>Derecho de Autor</b><br>ADVERTENCIA: Los derechos patrimoniales de la presente obra pertenecen en su totalidad a la Universidad Estatal a Distancia, de Costa Rica, por lo que está prohibida su copia o reproducción, comunicación pública, puesta a disposición del público, transmisión, transformación (incluyendo adaptación y traducción), distribución, alquiler o venta de ejemplares, realizada por cualquier medio o procedimiento, conocido o por conocerse, sin el consentimiento previo por escrito del titular de los derechos. Eludir esta prohibición o las medidas tecnológicas de protección que contenga la obra, constituye una conducta sancionada por normas de propiedad intelectual.</p>
        </div>
       </div>
       <div id="salida_b" align="center"><div class="circulo_grande"></div><div class="boton_afiche" onclick="javascript:refrecar_todo();">SALIDA</div></div>
       <img id="puerta_salida" src="images/galeria/salida.svg">

      <div id="ultimo"></div>
    </div>
    
  </div>
  <div id="pared"></div>
  <div id="rodapie"></div>
  <div id="piso"></div>
</div>


</div>




<div id="contenedor_dis_pequennos" align="center">

     <div id="contenedor_techo_movil"><div id="techo_movil"><div class="contenedor_luz_movil" align="center"><div class="luz_movil"><img src="images/elementos_moviles/luces.png"></div></div></div></div>

      <div id="imagenescr">
         <div id="logo_multimedia"><img src="images/galeria_multimedia_logo.png"></div><div id="logo_uned"><img src="images/galeria_uned_logo.png"></div>
      </div>
      <div id="contenedor_linea"></div>
      <div id="titulo_moviles"><p><b>Galería virtual</b></p></div>
      <div id="titulo_2"><p>Jornada de puertas abiertas y 20 aniversario</p></div>
       <div class="textos_moviles">
         <p>Bienvenidas y bienvenidos a la galería virtual del Programa de Producción Electrónica Multimedial (PEM), de la Universidad Estatal a Distancia, de Costa Rica. Acompáñenos en nuestra actividad de aniversario y jornada de puertas abiertas, en la cual pueden conocer los multimedia educativos concluidos en el año 2019 y los reconocimientos a los materiales destacados en ese año.</p>
      </div>
      <div class="espaciador"></div>
      <div class="titulo2_moviles"><p><b>AFICHE CONMEMORATIVO<br> DEL 20 ANIVERSARIO</b></p></div>
      <img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('10');" class="afiche_moviles" src="images/afiches/af_20.jpg">
       <div class="textos_moviles">
         <p>Este año 2020, el PEM cumple 20 años de elaborar materiales didácticos multimedia, para el apoyo de los procesos de aprendizaje, de los estudiantes de la Universidad Estatal a Distancia, de Costa Rica.</p><p>Esta labor ha ido evolucionando gracias a los avances tecnológicos y a la investigación, que realizamos en nuestro programa. Al principio, los materiales se hacían con las herramientas Director y Flash, que se distribuían en discos compactos (CD). Hoy, nuestros materiales no solo están disponibles en línea, sino que los hemos elaborado con nuevos lenguajes de programación como HTML5, que permiten la creación de modelos 3D, realidad aumentada, aplicaciones para móviles, adaptación a múltiples dispositivos, entre otros.</p>
      </div>
      <div class="espaciador"></div>
      <div class="espaciador"></div>
      <div id="conteo_movil_contenedor">
        <a id="numcon">
<img src="https://www.easycounter.com/counter.php?galeria2020"
border="0" alt="Counter"></a>
      <div id="conteo_movil" align="center"><div id="textoconteo_movil" align="center"><p id="p1"></p><p id="p2">visitantes</p></div><img src="images/elementos/caballete.png"></div></div>
      <div class="espaciador"></div>
      <div class="espaciador"></div>
      <div class="titulo2_moviles"><p id="t_acto_moviles" class="titulo_primeralinea">Acto inaugural</p><p>Palabras de las autoridades universitarias</p></div>
      <div id="imagen_tv_movil"><div id="video_tv_movil" align="center"><iframe src="https://vimeo.com/showcase/7841032/embed" frameborder="0" allowfullscreen="" ></iframe></div><img src="images/galeria/tv.svg"></div>     
      <div class="espaciador"></div> 
      <div class="espaciador"></div> 
      <div id="titulo_ex_afgi"><p id="ta" class="titulo_primeralinea">Exposición de afiches</p><p>Materiales multimedia<br>2019-2020</p></div> 
      <!--carrusel-->
        <div class="gallery js-flickity"
          data-flickity-options='{ "freeScroll": true, "wrapAround": true, "autoPlay": true}'>
          <div class="gallery-cell"><img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('1');" class="afi" src="images/afiches/af_grammar.png"><p>Grammar Village</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('1');">Ver más</div></div>

          <div class="gallery-cell"><img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('2');" class="afi" src="images/afiches/af_baraja.png"><p>Baraja Genómica</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('2');">Ver más</div></div>

         <div class="gallery-cell"><img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('3');" class="afi" src="images/afiches/af_coro.png"><p>Partes del todo</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('3');">Ver más</div></div>

          <div class="gallery-cell"><img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('4');" class="afi" src="images/afiches/af_fitohormonas.png"><p>Fitohormonas</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('4');">Ver más</div></div>

          <div class="gallery-cell"><img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('5');" class="afi" src="images/afiches/af_academia.png"><p>Academia Municipal</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('5');">Ver más</div></div>

          <div class="gallery-cell"><img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('6');" class="afi" src="images/afiches/af_agrostologia.png"><p>Agrostología</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('6');">Ver más</div></div>

          <div class="gallery-cell"><img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('7');" class="afi" src="images/afiches/af_sap.png"><p>Seminarios ECEN</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('7');">Ver más</div></div>

          <div class="gallery-cell"><img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('8');" class="afi" src="images/afiches/af_pedagogia.png"><p>Pedagogía universitaria</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('8');">Ver más</div></div>

          <div class="gallery-cell"><img style="cursor: pointer;" onclick="javascript:abrir_imagen_movil('9');" class="afi" src="images/afiches/af_disco duro.png"><p>Disco Duro</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('9');">Ver más</div></div>
        </div>

      <!--carrusel-->  
      <div class="espaciador"></div> 
      <div class="espaciador"></div> 
      <div class="venus_movil"><img src="images/galeria/venus.png"></div>
      <div class="venus_movil"><img src="images/galeria/logo_20.svg"></div>
      <div class="espaciador"></div>
      <div class="espaciador"></div>
      <!--carrusel-->
        <div class="gallery js-flickity"
          data-flickity-options='{ "freeScroll": true, "wrapAround": true, "autoPlay": true}'>

          <div class="gallery-cell"><img src="images/elementos/gal_pc.png"><p class="textocarru">Hemos utilizado diferentes tecnologías, resoluciones de pantalla y sistemas operativos para el desarrollo de nuestros materiales.</p></div>

          <div class="gallery-cell"><img src="images/elementos/gal_flash.png"><p class="textocarru">Durante 9 años nuestros materiales fueron desarrollados con las herramientas Director y Flash.</p></div>

          <div class="gallery-cell"><img src="images/elementos/gal_cd.png"><p class="textocarru">Durante 11 años nuestros materiales fueron distribuidos únicamente en disco compacto.</p></div>

          <div class="gallery-cell"><img src="images/elementos/gal_explorer.png"><p class="textocarru">A partir del 2011 nuestros materiales se pueden consultar desde internet.</p></div>

        </div>
      <!--carrusel-->  
      <div class="espaciador"></div> 
      <div class="espaciador"></div> 
      <div class="titulo2_moviles"><p id="t_acto_moviles" class="titulo_primeralinea">Presentación</p><p>De materiales multimedia</p></div>
      <div id="imagen_tv_movil"><div id="video_tv_movil" align="center"><iframe src="https://vimeo.com/showcase/7844954/embed" frameborder="0" allowfullscreen="" ></iframe></div><img src="images/galeria/tv.svg"></div> 
      <div class="espaciador"></div>
      <div class="espaciador"></div>
       <div class="titulo2_moviles"><p id="t_acto_moviles">Reconocimientos<br><br>2020</p></div><br>
       <!--carrusel-->
        <div class="gallery js-flickity"
          data-flickity-options='{ "freeScroll": true, "wrapAround": true, "autoPlay": true}'>

          <div class="gallery-cell"><div class="ico_carru"><img src="images/elementos_moviles/movil_ico_internacional.svg"></div><div class="titulo2_moviles"><p id="t_acto_moviles">Éxito internacional</p><p>Material con mayor cantidad de sesiones desde el extranjero</p></div><img class="afi" src="images/afiches/af_dislalias.png"><p>Sonidos del lenguaje</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('10');">Ver más</div></div>


          <div class="gallery-cell"><div class="ico_carru"><img src="images/elementos_moviles/movil_ico_nacional.svg"></div><div class="titulo2_moviles"><p id="t_acto_moviles">Éxito nacional</p><p>Material con mayor cantidad de sesiones a nivel nacional</p></div><img class="afi" src="images/afiches/af_academiareconocimiento.png"><p>Academia Municipal</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('11');">Ver más</div></div>

          <div class="gallery-cell"><div class="ico_carru"><img src="images/elementos_moviles/movil_ico_navegado.svg"></div><div class="titulo2_moviles"><p id="t_acto_moviles">Más navegado</p><p>Material con mayor cantidad de páginas por sesión a nivel nacional</p></div><img class="afi" src="images/afiches/af_grammar.png"><p>Grammar Village</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('12');">Ver más</div></div>

          <div class="gallery-cell"><div class="ico_carru"><img src="images/elementos_moviles/movil_ico_navegado.svg"></div><div class="titulo2_moviles"><p id="t_acto_moviles">Más navegado<br><samp style="font-size: 20px; font-family: 'Manjari', sans-serif; line-height: 22px;">(Mención honorífica)</samp></p><p>Material con mayor cantidad de páginas por sesión a nivel nacional</p></div><img class="afi" src="images/afiches/af_terminologiamedica.png"><p>Terminología Médica</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('13');">Ver más</div></div>

          <div class="gallery-cell"><div class="ico_carru"><img src="images/elementos_moviles/movil_ico_permanencia.svg"></div><div class="titulo2_moviles"><p id="t_acto_moviles">Mayor permanencia</p><p>Material con mayor duración media de la sesión a nivel nacional</p></div><img class="afi" src="images/afiches/af_anatomia.png"><p>Anatomía y Fisiología Animal</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('14');">Ver más</div></div>

          <div class="gallery-cell"><div class="ico_carru"><img src="images/elementos_moviles/movil_ico_escuela.svg"></div><br><div class="titulo2_moviles"><p id="t_acto_moviles">Escuela estrella</p><p>Escuela con mayor cantidad de multimedias activos</p></div><img class="afi" src="images/afiches/af_ecen.png"><p>ECEN</p><div class="boton_afiche" onclick="javascript:abrir_ventana_movil('15');">Ver más</div></div>


        </div>
      <!--carrusel--> 
      <div class="espaciador"></div>
      <div class="espaciador"></div>
      <div class="titulo2_moviles"><p id="t_acto_moviles" class="titulo_primeralinea">Saludos</p><p>De aniversario</p></div>
      <div id="imagen_tv_movil"><div id="video_tv_movil" align="center"><iframe src="https://vimeo.com/showcase/7841020/embed" frameborder="0" allowfullscreen="" ></iframe></div><img src="images/galeria/tv.svg"></div> 
      <div class="espaciador"></div> 
      <div class="espaciador"></div> 
       <div id="imagenescr">
         <div id="logo_multimedia"><img src="images/galeria_multimedia_logo.png"></div><div id="logo_uned"><img src="images/galeria_uned_logo.png"></div>
      </div>
      <div id="contenedor_linea"></div>
      <div id="titulo_moviles"><p><b>Galería virtual</b></p></div>
      <br>
      <div class="boton_afiche" onclick="javascript:abrir_ventana_movil('101');">Créditos</div>
      <div class="espaciador"></div> 
      <div id="flecha_arriba" onclick="javascript:arriba();"><img src="images/flecha izq.svg"></div>
      <div class="espaciador"></div> 
      <div id="cierre_movil"><img src="images/elementos/divisor.png"></div>
      <div class="espaciador"></div> 
</div>


</div>

<div id="flecha_derecha" onclick="javascript:avancer();"><img src="images/flecha der.svg"></div>
<div id="flecha_izquierda" onclick="javascript:retrocesor();"><img src="images/flecha izq_apa.svg"></div>

<div id="contenedor_creditos_fijos" align="center"><samp>©2020</samp> <a href="https://www.uned.ac.cr/" target="_blank">Universidad Estatal a Distancia</a> | <a id="ancla" onclick="javascript:abrir_creditos();" >Créditos</a></div>


<div id="creditos" align="center">

     <div id="cuerpo_creditos">
    
      <div id="abajo2"></div>
      <br>
      <div id="titulo_creditos"><b>Créditos</b></div>
      
      <div id="imagenescr">
         <div id="logo_multimedia"><img src="images/galeria_multimedia_logo.png"></div><div id="logo_uned"><img src="images/galeria_uned_logo.png"></div>
      </div>
       <div id="contenedor_linea"></div>

      <div align="left">
        <div id="titulo_moviles"><p><b>Galería virtual</b></p></div>
        <div id="titulo_2"><p>Jornada de puertas abiertas y 20 aniversario</p></div>
        <p><b>Código de publicación:</b> SW0120<br><b>Publicación:</b>1 diciembre 2020</p>
        <p>Esta galería es una producción de la Universidad Estatal a Distancia, Dirección de Producción de Materiales Didácticos y el Programa de Producción Electrónica Multimedial.</p>
        <p><b>Producción multimedia</b><br>Producción y diseño gráfico: Ana Carolina Zamora Sanabria, Juan Diego Delgado Vargas, Mario Badilla Quesada, Raquel Badilla Barrientos y Vivian González Zúñiga.<br>Desarrollo web: Romy Ulate Paniagua<br>Colaboración: Marco Antonio Sánchez Mora, Paúl Alvarado Quesada, Seidy Maroto Alfaro y Yuri Vázquez Pérez.<br>Agradecimientos: a todas las personas que colaboraron en la elaboración de esta Galería virtual.</p>
        <p><b>Derecho de Autor</b><br>ADVERTENCIA: Los derechos patrimoniales de la presente obra pertenecen en su totalidad a la Universidad Estatal a Distancia, de Costa Rica, por lo que está prohibida su copia o reproducción, comunicación pública, puesta a disposición del público, transmisión, transformación (incluyendo adaptación y traducción), distribución, alquiler o venta de ejemplares, realizada por cualquier medio o procedimiento, conocido o por conocerse, sin el consentimiento previo por escrito del titular de los derechos. Eludir esta prohibición o las medidas tecnológicas de protección que contenga la obra, constituye una conducta sancionada por normas de propiedad intelectual.</p>
        <br>
     </div>
     <div class="boton_ventanas" onclick="javascript:abrir_creditos();">Cerrar</div>

      </div>

</div>


<div id="contenedor_creditos_fijos_moviles" align="center">
  <div id="rodapie_movil"></div>
  <samp>©2020</samp> <a href="https://www.uned.ac.cr/" target="_blank">Universidad Estatal a Distancia</a> | <a id="ancla_movil" onclick="javascript:abrir_ventana_movil('101');" >Créditos</a></div>





<script src="js/jquery-1.11.3.min.js"></script> 
<script src="js/bootstrap.js"></script>
<script src="js/flickity.pkgd.min.js"></script>
<script src="js/funciones.js"></script>



<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-DMV1CP96Z5"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DMV1CP96Z5'); </script> 

</body>
</html>