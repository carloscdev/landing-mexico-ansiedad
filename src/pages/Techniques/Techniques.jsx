import React from "react"
import ImageGirl from "../../assets/img/page4/meditando.png"
import Respirando from "../../assets/img/page4/respirando.png"
import Ejercicio from "../../assets/img/page4/ejercicio.png"
import Imaginacion from "../../assets/img/page4/imaginacion.png"
import Musica from "../../assets/img/page4/musica.png"
import "./Techniques.css"

export function Techniques() {
  const list_thecniques = [
    {
      title: "Ejercicios de respiración:",
      description: `En situaciones de estrés algo tan simple como respirar no lo
      hacemos de la forma adecuada. Por ello pararnos un momento y
      respirar profundamente libera parte de ese estrés. Durante
      unos 3 minutos, aprende a guiar tu respiración, sitúa una mano
      en el abdomen y otra sobre el pecho, se trata de que la mano que
      reposa sobre el abdomen se mueva más que la que esta sobre el
      pecho, para ello inhala profundamente por la nariz durante
      aproximadamente 5 segundos, mantén el aire en la zona del
      vientre durante un par de segundos para luego, exhalarlo por
      la boca durante otros 5 segundos.`,
    },
    {
      title: "Ejercicios de estiramiento:",
      description: `Otra forma de soltar la tensión es haciendo ejercicios de estiramiento,
      gira tu cabeza 180º mientras
      estiras tus brazos y, luego, piernas. Otro ejercicio
      es ponerte de rodillas, llevar los brazos adelante
      tocando el suelo con las manos e inclinando el
      tronco y la cabeza, de esta forma se favorece la
      concentración y relaja nuestra mente.`,
    },
    {
      title: "Imaginación guiada:",
      description: `Esta técnica consiste en centrarte en situaciones
      que te transmitan paz con la intención de acumular carga positiva en tu interior.
      Para mayor eficacia, acuestate boca arriba sobre una superficie
      rígida que no sea ni muy dura ni muy cómoda, con
      las piernas un poco abiertas, los brazos extendidos a lo largo del cuerpo y los ojos cerrados sin
      apretar los párpados. Una vez encuentres tu postura, debes empezar con la respiración. A continuación,
      imagina un entorno natural placentero, que te trasmita paz, imagínalo con todos los detalles,
      recorre el entorno imaginado minuciosamente, y explóralo con tus sentidos.`,
    },
    {
      title: "Escuchar música relajante:",
      description: `Algo tan simple como escuchar música tiene
      grandes beneficios en nuestro interior, te hará
      sentir más a gusto y calmado`,
    },
  ]

  return (
    <main className="content techniques">
      <div className="techniques__header">
        <h2>
          Prevención,
          <br />
          técnicas y
          <br />
          ejercicios
        </h2>
        <img src={ImageGirl} alt="Meditando" />
        <p>
          Existen tests que pueden servir como herramienta para medir el grado
          de estrés y ansidad en el grupo y con el análisis desarrollar metodos
          de aprendizaje que eviten llegar a una situacion de crisis por
          ansiedad en los alumnos.
        </p>
      </div>
      <div className="techniques__body">
        <h4>
          Técnicas y ejercicios de ralajación que pueden ayudar a eliminar el
          estrés
        </h4>
        <section className="techniques__grid">
          <div className="techniques__grid--item">
            <img src={Respirando} alt="Persona Respirando" />
            <Description list={list_thecniques[0]} />
          </div>
          <div className="techniques__grid--item">
            <Description list={list_thecniques[1]} />
            <img src={Ejercicio} alt="Persona Respirando" />
          </div>
          <div className="techniques__grid--item">
            <img src={Imaginacion} alt="Persona Respirando" />
            <Description list={list_thecniques[2]} />
          </div>
          <div className="techniques__grid--item">
            <Description list={list_thecniques[3]} />
            <img src={Musica} alt="Persona Respirando" />
          </div>
        </section>
      </div>
    </main>
  )
}

function Description(props) {
  const { list } = props
  const { title, description } = list
  return (
    <div className="techniques__grid--description">
      <div className="circle"></div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}
