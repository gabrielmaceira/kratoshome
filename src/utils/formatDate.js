export const formatDate = (str) => {
  const year = str.substr(0, 4)
  const month = str.substr(5, 2)
  const day = str.substr(8, 2)
  let monthLetras = ""

  switch (month) {
    case ("01"):
      monthLetras = "Enero"
      break
    case ("02"):
      monthLetras = "Febrero"
      break
    case ("03"):
      monthLetras = "Marzo"
      break
    case ("04"):
      monthLetras = "Abril"
      break
    case ("05"):
      monthLetras = "Mayo"
      break
    case ("06"):
      monthLetras = "Junio"
      break
    case ("07"):
      monthLetras = "Julio"
      break
    case ("08"):
      monthLetras = "Agosto"
      break
    case ("09"):
      monthLetras = "Septiembre"
      break
    case ("10"):
      monthLetras = "Octubre"
      break
    case ("11"):
      monthLetras = "Noviembre"
      break
    case ("12"):
      monthLetras = "Diciembre"
      break
    default:
      monthLetras = "Enero"
  }


  return day + " de " + monthLetras + " de " + year
}