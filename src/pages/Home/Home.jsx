import React from "react"
import ImageGosht from '../../assets/img/page1/page1.png';
import "./Home.css"

export function Home() {
  return (
    <main className="content home">
      <div className="home__container">
        <div>
          <h2>Manual de emergencia</h2>
          <p>
            Este es un manual de emergencia que pretende informar al personal
            docente sobre la identificación y primeros auxilios ante un
            problema de ansiedad en los alumnos, así como recomendación y
            oriantación hacia los servicios psicológicos que ofrece la
            <span> UAM Azcapotzalco.</span>
          </p>
        </div>
        <div>
          <img src={ImageGosht} alt="Imagen Fantasma" />
        </div>
        <p>
          Según distintos estudios psicológicos, los alumnos universitarios
          presentan una mayor tasa de ansiedad en com- paración a la población
          en general de la México, pues no sólo se enfrentan al bombardeo de
          información académica, sino al de los medios de comunicación, a las
          exigencias sociales, perfección en su vida, de felicidad, entre otras
          cosas.
        </p>
        <p>
          La Asociación Esta- dounidense de Psicología (APA), define la
          ansiedad como “una emoción caracterizada por sentimientos de
          tensión, pensamientos de preocupación y cambios físicos”.
          <br /> <br />
          La ansiedad es una respuesta anticipa- toria a una amenaza futura por lo
          tanto no se sabe si existirá o se vive como real
        </p>
      </div>
    </main>
  )
}
