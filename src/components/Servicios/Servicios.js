import React from 'react'
import { Footer2 } from '../Footer/Footer2'

export const Servicios = () => {

  return (
    <React.Fragment>
      {/* <!------------------------------------------------------------HEADER------------------------------------------------------------------------>
  <!--_____________________________________________________________________________________________________________________________________ -->
  */} <header id="header__servicios">
        {/*    <!-----------------------NAVBAR-------------------------->*/}
        <nav id="menu__servicios" className="navbar navbar-expand-lg fixed-top servicios__navbar--blanco">

          <a className="navbar-brand" href="/">
            <img src="img/LOGO-COLOR.png" id="serviciosNavbar__logo" />
          </a>

          <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto container" id="serviciosNavbar__lista">

              <li className="nav-item active" id="li__servicios">
                <a className="nav-link serviciosNavbar__link" href="/" id="enlaceHome">HOME<span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item">
                <a className="nav-link serviciosNavbar__link" href="/#nosotros" id="enlaceNosotros">NOSOTROS</a>
              </li>

              <li className="nav-item">
                <a className="nav-link serviciosNavbar__link" href="/#servicios" id="enlaceServicios1">SERVICIOS</a>
              </li>

              <li className="nav-item">
                <a className="nav-link serviciosNavbar__link" href="/#articulos" id="enlaceArticulos">ARTÍCULOS</a>
              </li>

              <li className="nav-item">
                <a className="nav-link serviciosNavbar__link" href="/#contacto" id="enlaceContacto">CONTACTO</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main id="main__servicios" className="container">
        <div className="contenedorTitulos pt-5" id="servicios__museo">
          <h1 className="h1__servicios">Ejes principales</h1>
        </div>

        {/* <!-----------------------------------------------------------------------------------------------------------------------------------------------------------------------> */}
        <div className="contenedorTitulos" >
          <h2 className="h2__servicios"><img src="img/museo.svg" alt="" className="img__servicios"/>Constitución y Desenvolvimiento Institucional de Partido Políticos</h2>
        </div>

        <h3 className="h3__servicios">Creación/Modificación de la carta Orgánica</h3>
        <p className="p__servicios">Asesoramiento en las modificaciones que se realicen en la legislación y su implementación en la Carta Orgánica;
      asimismo, orientamos en la introducción de modificaciones que soliciten las agrupaciones.</p>

        <h3 className="h3__servicios">Elecciones internas – Elaboración del cronograma electoral interno</h3>
        <p className="p__servicios">Asesoramiento en la elaboración del Cronograma electoral interno conforme a lo estipulado mediante la Carta
        Orgánica Partidaria. Asimismo informamos acerca de todos los requisitos formales para llevar a cabo elecciones
      partidarias internas, tanto en su preparación, realización y posteriores medidas.</p>

        <h3 className="h3__servicios">Alta de Cuit – Cuenta Bancaria</h3>
        <p className="p__servicios">Asesoramiento para la obtención del código único de identificación tributaria lo que otorga el reconocimiento de
        su personalidad jurídica en la AFIP; la apertura de una cuenta corriente única para la administración de la
        institución; la confección de los estados contables en cumplimiento con la justicia federal electoral y además les
      confieren beneficios de carácter impositivo.</p>

        <h3 className="h3__servicios">Libros Obligatorios</h3>
        <p className="p__servicios">Asesoramiento en la elaboración del libro Diario y todo otro libro o registro que la agrupación estime menester
        para su mejor funcionamiento administrativo contable. Asimismo, los instruiremos para alcanzar la rubricación de
        los libros y demás obligaciones conforme al marco normativo.
        Proponemos un seguimiento de los mismo a fin de evitar la caducidad de la personería juridico-política de la
      agrupación que pudiese producirse debido al incumplimiento de las obligaciones.</p>

        <h3 className="h3__servicios">Escritos Judiciales</h3>
        <p className="p__servicios">Asesoramiento en confección de los escritos a presentar ante la autoridad con competencia electoral tales como
        contestación a las observaciones de los Informes de Campaña y Balances, presentación de afiliados, impugnación de
        nombre/logo/color, aceptación de cargo partidario, entre otros. Regularización de la situación de la Agrupación
      Política, a fin de levantar las suspensiones que surjan en consecuencia de sanciones por incumplimientos. </p>

        <h3 className="h3__servicios">Pedido de Aporte Extraordinario</h3>
        <p className="p__servicios">Asesoramiento para la solicitud de un aporte extraordinario. El mismo se desprende del Fondo Partidario
        Permanente que destina anualmente presupuesto para solventar gastos extraordinarios correspondientes a la vida
      útil del partido, para ello es fundamental cumplir con los requisitos que la Dirección solicita.</p>

        <h3 className="h3__servicios">Seguimiento de cantidad de Afiliados</h3>
        <p className="p__servicios">Asesoramiento en el control y seguimiento de los requerimientos mínimos de afiliados del distrito a fin de
      mantener la personería jurídico-política.</p>

        <h3 className="h3__servicios">Confección de Balance, Informes de Campaña</h3>
        <p className="p__servicios">Confección y publicación de los Estados Contables mediante el Sistema de Presentación de Estados Contables
      Anuales” (SPECA) conforme a la normativa vigente. </p>
        {/* <!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------> */}
        <div className="contenedorTitulos  pt-5" id="servicios__elecciones">
          <h2 className="h2__servicios"><img src="img/elecciones.svg" className="img__servicios"/> Proceso Electoral</h2>
        </div>

        <h3 className="h3__servicios">Constitución de Alianzas</h3>
        <p className="p__servicios">Asesoramiento en la redacción de Actas Constitutivas de Alianza, y en la preparación de toda documentación
        respaldatoria necesaria para la constitución de la misma. También realizamos el análisis de cláusulas específicas
      conforme lo requerido por la parte.</p>

        <h3 className="h3__servicios">Alta de Cuit – Cuenta Bancaria</h3>
        <p className="p__servicios">Asesoramiento para la obtención del código único de identificación tributaria lo que otorga el reconocimiento de
        su personalidad jurídica en la AFIP; la apertura de una cuenta corriente única para la administración de la
        institución; la confección de los estados contables en cumplimiento con la justicia federal electoral y además les
      confieren beneficios de carácter impositivo.</p>

        <h3 className="h3__servicios">Libros Obligatorios</h3>
        <p className="p__servicios">Asesoramiento en la elaboración del libro Diario y todo otro libro o registro que la agrupación estime menester
        para su mejor funcionamiento administrativo contable. Asimismo, los instruiremos para alcanzar la rubricación de
        los libros y demás obligaciones conforme al marco normativo.
        Proponemos un seguimiento de los mismo a fin de evitar la caducidad de la personería juridico-política de la
      agrupación que pudiese producirse debido al incumplimiento de las obligaciones.</p>

        <h3 className="h3__servicios">Escritos Judiciales</h3>
        <p className="p__servicios">Asesoramiento en confección de los escritos a presentar ante la autoridad con competencia electoral tales como
        contestación a las observaciones de los Informes de Campaña y Balances, presentación de afiliados, impugnación de
        nombre/logo/color, aceptación de cargo partidario, entre otros. Regularización de la situación de la Agrupación
      Política, a fin de levantar las suspensiones que surjan en consecuencia de sanciones por incumplimientos.</p>

        <h3 className="h3__servicios">Guía del Cronograma Electoral</h3>
        <p className="p__servicios">Asesoramiento durante todo el proceso electoral, informando la secuencia de actos que deben cumplimentarse según
      el Cronograma Electoral correspondiente. </p>

        <h3 className="h3__servicios">Confección de Informes de Campaña</h3>
        <p className="p__servicios">Confección y publicación de los informes de campaña mediante el “Sistema para la Generación de Informes
        Financieros de Campaña de Agrupaciones Políticas” (INFIPP) utilizando los criterios unificados de exposición que
      rigen los profesionales en Ciencias Económicas.</p>

        <h3 className="h3__servicios">Capacitación de Fiscales</h3>
        <p className="p__servicios">Capacitamos fiscales para que controlen y verifiquen de manera eficiente durante todo el transcurso del acto
      eleccionario que las disposiciones legales que lo rigen se cumplan en su integridad.</p>
        {/* <!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------> */}
        <div className="container contenedorTitulos  pt-5" id="servicios__redaccion">
          <h2 className="h2__servicios"><img src="img/redaccion.svg" alt="" className="img__servicios" />Diseño y Elaboración de Políticas Públicas</h2>
        </div>

        <h3 className="h3__servicios">Propuestas de reformas legislativas</h3>
        <p className="p__servicios">Asesoramiento y elaboración de proyecto de ley en materia electoral para los tres niveles parlamentario</p>

        <h3 className="h3__servicios">Diseño y elaboración de políticas públicas</h3>
        <p className="p__servicios">Asesoramiento en el diseño y elaboración de políticas públicas en materia electoral para los distintos niveles de
      gobierno como así también para la organizaciones de la sociedad civil.</p>

        <div className='centered'>
          <div id="servicios__botonContacto">
            <a href="/#contacto" id='link__botonContacto' className='btn'>CONTÁCTANOS</a>
          </div>
        </div>
      </main>


      <Footer2 />
    </React.Fragment>

  )

}