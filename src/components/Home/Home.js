import React, { useEffect, useState } from 'react'
import { CardPublicaciones } from '../Publicacion/CardPublicaciones'
import { Mailer } from '../Mailer/Mailer'
import { getFirestore } from '../firebase'
import './Home.css'
import '@firebase/firestore'

export const Home = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const db = getFirestore()
    let eventCollection = db.collection("events").orderBy("fechahora", "desc").limit(3)

    eventCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("Sin resultados")
      }
      setEvents(querySnapshot.docs.map(doc => {
        const fullData = { id: doc.id, ...doc.data() }
        return fullData
      }))
    }).catch((error) => {
      console.log("Error trayendo los resultados", error)
    }).finally(() => {

    })
  }, [])


  return (
    <React.Fragment>
      {/*   <!------------------------------------------------------------HEADER------------------------------------------------------------------------>
  <!--_____________________________________________________________________________________________________________________________________ -->
   */}
      <header id="contenedor">
        {/* <!-----------------------NAVBAR--------------------------> */}
        <nav id="menu" className="navbar navbar-expand-lg fixed-top navbar--transparente">

          <a className="navbar-brand" href="/">
            <img src="img/LOGO1.png" className="navbar__logo" />
          </a>

          <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto container" id="navbar__lista">

              <li className="nav-item active navbarLista__item">
                <a className="nav-link homeNavbar__link" href="/" id="enlaceHome">HOME<span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item navbarLista__item">
                <a className="nav-link homeNavbar__link" href="/#nosotros" id="enlaceNosotros">NOSOTROS</a>
              </li>

              <li className="nav-item navbarLista__item">
                <a className="nav-link homeNavbar__link" href="/#servicios" id="enlaceServicios">SERVICIOS</a>
              </li>

              <li className="nav-item navbarLista__item">
                <a className="nav-link homeNavbar__link" href="/#articulos" id="enlaceArticulos">ARTÍCULOS</a>
              </li>

              <li className="nav-item navbarLista__item">
                <a className="nav-link homeNavbar__link" href="/#contacto" id="enlaceContacto">CONTACTO</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- IMAGEN CABECERA --> */}
        <img src="img/congreso1.jpg" alt="" className="img-fluid" id="header__imgParlamento" />

        {/* <!-- SLOGAN CABECERA --> */}
        <p className="container" id="slogan">‟Asesorando a las Instituciones para el fortalecimiento de nuestra democracia”</p>

      </header>
      {/*   <!------------------------------------------------------------MAIN-------------------------------------------------------------------------->
  <!--_____________________________________________________________________________________________________________________________________ -->
   */}<main id="main__home">
        {/* <!---------------------NOSOTROS------------------------> */}
        <section id="nosotros" className="container-fluid">

          <div className="nosotros__contenedorFlexible container">
            <h3 className="main__titulo">Nosotros</h3>
            <p className="p__home" id="seccionNosotros__p">“Somos una consultora con vasta trayectoria en los procesos electorales de nuestro país brindando
          asesoramiento técnico en materia electoral a las agrupaciones políticas. <br /><br />

                Brindamos las herramientas y conocimientos necesarios, para el desarrollo, progresión y correcto
          desenvolvimiento institucional de las agrupaciones jurídico-políticas de mixto financiamiento.<br /><br />

                  Desarrollamos mecanismos que permitan el correcto funcionamiento de las obligaciones que lleven al desarrollo
                  del fortalecimiento institucional, el ajuste a las normativas vigentes y cumplimiento de los requisitos
                  legales para obtener y conservar el reconocimiento de la agrupación.
                  En Kratos contamos con un equipo interdisciplinario que nos permite brindar un asesoramiento profesional en
                  materia jurídico-contable de forma personalizada.”
        </p>
          </div>

        </section>

        {/* <!---------------------SERVICIOS-----------------------> */}
        <section id="servicios" className="container-fluid">
          {/* <!-- logo para transición --> */}
          <img src="img/LOGOTIPO1.png" alt="" className="main__logoTransicion" />

          <h3 className="main__titulo">Servicios</h3>

          <div className="row">

            {/* <!-- primer servicio --> */}
            <div className="servicios__contenedorServicio col-lg">
              <img src="img/museo.svg" alt="" className="img-servicios" />
              <h2 className="h2__contenedorServicio">Constitución y Desenvolvimiento Institucional de Partido Políticos</h2>
              <p className="p__home">
                Brindamos asesoramiento en la creación de partidos políticos y en el cumplimiento de las obligaciones que
                contraen luego de su constitución, otorgando herramientas que permitan resolver posibles problemáticas en el
                desarrollo institucional. Dentro de los aspectos técnicos jurídico-contables, se brindarán las herramientas
                necesarias para plasmar los requerimientos en cumplimiento al marco normativo, en relación a obligaciones
                contables, consultoría legal, aporte público o modificación de Cartas Orgánicas, entre otras.
          </p>
              <a href="/servicios#servicios__museo" className="row align-self-end seccionServicios__link">LEER MÁS →</a>
            </div>
            {/* <!-- segundo servicio  --> */}
            <div className="servicios__contenedorServicio col-lg">
              <img src="img/elecciones.svg" alt="" className="img-servicios" />
              <h2 id="electoral" className="h2__contenedorServicio">Proceso Electoral</h2>
              <p className="p__home">
                Otorgamos durante el proceso electoral un asesoramiento en la redacción de Actas Constitutivas de Alianzas,
                análisis personalizado de cláusulas específicas conforme lo requerido por la parte, elaboración de informes
                de campaña, así como el seguimiento para el cumplimiento de las obligaciones normativas del calendario
                electoral.
          </p>
              <a href="/servicios#servicios__elecciones" className="row align-self-end seccionServicios__link">LEER MÁS →</a>
            </div>
            {/* <!-- tercer servicio --> */}
            <div className="servicios__contenedorServicio col-lg">
              <img src="img/redaccion.svg" alt="" className="img-servicios" />
              <h2 className="h2__contenedorServicio">Diseño y Elaboración de Políticas Públicas</h2>
              <p className="p__home">
                Ofrecemos asesoramiento en el diseño y elaboración de políticas públicas en materia electoral para los
                distintos niveles de gobierno como así también para las organizaciones de la sociedad civil.
          </p>
              <a href="/servicios#servicios__redaccion" className="row align-self-end seccionServicios__link">LEER MÁS →</a>
            </div>
          </div>


        </section>

        {/*  <!----------------------ARTÍCULOS---------------------> */}
        <section id="articulos" className="container-fluid pl-0">
          {/* <!-- logo para transición --> */}
          <img src="img/LOGOTIPO1.png" alt="" className="main__logoTransicion main__logoTransicion_art" />
          <h3 className="main__titulo">Artículos</h3>

          <div className='servicios__contenedorServicio1 w-100'>
            <CardPublicaciones events={events} estilo={"cardPublicacion"} />
          </div>
        </section>

      </main>
      {/*   <!------------------------------------------------------------FOOTER------------------------------------------------------------------------>
  <!--_____________________________________________________________________________________________________________________________________ -->
   */}<footer id="contacto" classname='pt-2'>

        <img src="img/congreso22.jpg" alt="" className="img-fluid" id="footer__imgFondo" />

        <div className="container d-flex p-2 bd-highlight flex-sm-column flex-md-row" id="footer__contenedorInfo">

          <div className="container col-md" id="contenedorInfo__Redes">
            <span className='homeFooter__space'>
              <p className="homeFooter__p">consultas@consultoreskratos.com</p>
              <p className="homeFooter__p">+54 9 (011) 153607-0469</p>
            </span>
            <a href="https://www.instagram.com/consultoreskratos/" className="homeFooter__a"><img src="img/instagram.png" alt="" className="homeFooter__img" />consultoreskratos</a>
            <a href="https://twitter.com/Consult_Kratos" className="homeFooter__a"><img src="img/twitter.png" alt="" className="homeFooter__img" />@Consult_Kratos</a>
            <a href="" className="homeFooter__a"><img src="img/linkedin.png" alt="" className="homeFooter__img" />Consultoria Kratos</a>
          </div>

          <Mailer />
        </div>
      </footer>
    </React.Fragment>
  )

}