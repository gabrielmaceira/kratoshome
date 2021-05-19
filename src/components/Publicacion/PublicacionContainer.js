import React, { useState, useEffect } from 'react'
import { getFirestore } from '../firebase'
import { Publicaciones } from './Publicaciones'
import { useParams } from 'react-router-dom'
import '@firebase/firestore'

export const PublicacionContainer = () => {

  // trayendo el id de los parametros de la url
  const { id } = useParams()

  const [events, setEvents] = useState([])
  const [event, setEvent] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

    const db = getFirestore()
    let eventCollection = db.collection("events").orderBy("fechahora", "desc").limit(6)

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

    eventCollection = db.collection("events")
    let evData = eventCollection.doc(id)
    setLoading(true)

    evData.get().then((doc) => {
      if (!doc.exists) {
        console.log("El item no existe")
        setLoading(false)
        return
      }
      setEvent({ id: doc.id, ...doc.data() })
      setLoading(false)
    }).catch((error) => {
      console.log("Error trayendo los resultados", error)
    }).finally(() => {
    })

  }, [id])

  return (
    < Publicaciones events={events} event={event} loading={loading}/>
  )

}