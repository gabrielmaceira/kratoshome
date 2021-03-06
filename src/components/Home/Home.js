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
                <a className="nav-link homeNavbar__link" href="/#articulos" id="enlaceArticulos">ART??CULOS</a>
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
        <p className="container" id="slogan">???Asesorando a las Instituciones para el fortalecimiento de nuestra democracia???</p>

      </header>
      {/*   <!------------------------------------------------------------MAIN-------------------------------------------------------------------------->
  <!--_____________________________________________________________________________________________________________________________________ -->
   */}<main id="main__home">
        {/* <!---------------------NOSOTROS------------------------> */}
        <section id="nosotros" className="container-fluid">

          <div className="nosotros__contenedorFlexible container">
            <h3 className="main__titulo">Nosotros</h3>
            <p className="p__home" id="seccionNosotros__p">???Somos una consultora con vasta trayectoria en los procesos electorales de nuestro pa??s brindando
          asesoramiento t??cnico en materia electoral a las agrupaciones pol??ticas. <br /><br />

                Brindamos las herramientas y conocimientos necesarios, para el desarrollo, progresi??n y correcto
          desenvolvimiento institucional de las agrupaciones jur??dico-pol??ticas de mixto financiamiento.<br /><br />

                  Desarrollamos mecanismos que permitan el correcto funcionamiento de las obligaciones que lleven al desarrollo
                  del fortalecimiento institucional, el ajuste a las normativas vigentes y cumplimiento de los requisitos
                  legales para obtener y conservar el reconocimiento de la agrupaci??n.
                  En Kratos contamos con un equipo interdisciplinario que nos permite brindar un asesoramiento profesional en
                  materia jur??dico-contable de forma personalizada.???
        </p>
          </div>

        </section>

        {/* <!---------------------SERVICIOS-----------------------> */}
        <section id="servicios" className="container-fluid">
          {/* <!-- logo para transici??n --> */}
          <img src="img/LOGOTIPO1.png" alt="" className="main__logoTransicion" />

          <h3 className="main__titulo">Servicios</h3>

          <div className="row">

            {/* <!-- primer servicio --> */}
            <div className="servicios__contenedorServicio col-lg">
              <img src="img/museo.svg" alt="" className="img-servicios" />
              <h2 className="h2__contenedorServicio">Constituci??n y Desenvolvimiento Institucional de Partido Pol??ticos</h2>
              <p className="p__home  pb-5">
                Brindamos asesoramiento en la creaci??n de partidos pol??ticos y en el cumplimiento de las obligaciones jur??dico-contables que contraen luego de su constituci??n, otorgando herramientas que permitan resolver posibles problem??ticas en el desarrollo institucional.
          </p>
              <a href="/servicios#servicios__museo" className="row align-self-end seccionServicios__link  pb-2 pr-4">LEER M??S ???</a>
            </div>
            {/* <!-- segundo servicio  --> */}
            <div className="servicios__contenedorServicio col-lg">
              <img src="img/elecciones.svg" alt="" className="img-servicios" />
              <h2 id="electoral" className="h2__contenedorServicio">Proceso Electoral</h2>
              <p className="p__home pt-3 pb-5">
                Otorgamos durante el proceso electoral un asesoramiento en la redacci??n de Actas Constitutivas de Alianzas,
                an??lisis personalizado de cl??usulas espec??ficas conforme lo requerido por la parte, elaboraci??n de informes
                de campa??a, as?? como el seguimiento para el cumplimiento de las obligaciones normativas del calendario
                electoral.
          </p>
              <a href="/servicios#servicios__elecciones" className="row align-self-end seccionServicios__link pb-2 pr-4">LEER M??S ???</a>
            </div>
            {/* <!-- tercer servicio --> */}
            <div className="servicios__contenedorServicio col-lg">
              <img src="img/redaccion.svg" alt="" className="img-servicios" />
              <h2 className="h2__contenedorServicio">Dise??o y Elaboraci??n de Pol??ticas P??blicas</h2>
              <p className="p__home pt-4  pb-5">
                Ofrecemos asesoramiento en el dise??o y elaboraci??n de pol??ticas p??blicas en materia electoral para los
                distintos niveles de gobierno como as?? tambi??n para las organizaciones de la sociedad civil.
          </p>
              <a href="/servicios#servicios__redaccion" className="row align-self-end seccionServicios__link pb-2 pr-4">LEER M??S ???</a>
            </div>
          </div>


        </section>

        {/*  <!----------------------ART??CULOS---------------------> */}
        <section id="articulos" className="container-fluid pl-0">
          {/* <!-- logo para transici??n --> */}
          <img src="img/LOGOTIPO1.png" alt="" className="main__logoTransicion main__logoTransicion_art" />
          <h3 className="main__titulo">Art??culos</h3>

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
            <a href="https://www.linkedin.com/in/consultores-kratos-335511213" className="homeFooter__a"><img src="img/linkedin.png" alt="" className="homeFooter__img" />Consultores Kratos</a>
          </div>

          <Mailer />
        </div>
      </footer>
    </React.Fragment>
  )

}