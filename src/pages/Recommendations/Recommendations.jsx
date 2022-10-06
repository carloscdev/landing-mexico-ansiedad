import React from "react";
import "./Recommendations.css";
import WorryWatch from "../../assets/img/page5/worrywatch.png";
import MindShift from "../../assets/img/page5/mindshift.png";
import Breathe from "../../assets/img/page5/breathe.png";
import Whatsup from "../../assets/img/page5/whatsup.png";
import Moods from "../../assets/img/page5/moods.png";

export function Recommendations() {
  const list_recommendations = [
    {
      image: WorryWatch,
      title: "Worry Watch",
      description: `Muchas veces, la clave para superar la ansiedad está
      en habituarse a ver hasta qué punto aquellas cosas que
      tememos cuando estamos ansiosos terminan no ocurriendo.
      Para cumplir este propósito, Worry Watch es una app muy útil.
      Básicamente, es una aplicación de móvil que invita a
      escribir lo que estamos sintiendo y pensando en el momento en el que
      empezamos a experimentar una subida
      de ansiedad. De esta manera es muy fácil detectar patrones de pensamientos
      y, de algún modo, “verle las costuras” al modo en el que los temores surgen en no
      sotros, permitiéndonos distanciarnos de este fenómeno y ver que todo se trata
      fundamentalmente de una ilusión, temor a cosas que no ocurrirán de verdad.`,
      store: ["App Store: Worry Watch"]
    },
    {
      image: MindShift,
      title: "MindShift",
      description: `La app MindShift propone una combinación interesante
      de consejos para combatir la ansiedad, por un lado, y un
      diario para llevar un registro de los pensamientos, por el
      otro. De esta manera, la aplicación propone tanto herramientas
      en las que el usuario adopta un rol más activo
      (las anotaciones por parte de los usuarios) y otras en las
      que tiene un rol de recepción de estímulos que emite la
      app.`,
      store: ["Google Play: MindShift", "App Store: MindShift"]
    },
    {
      image: Breathe,
      title: "Breathe2Relax",
      description: `Esta es una herramienta digital desarrollada por el National
      Center for Telehealth & Technology. Como app
      para la ansiedad, propone ejercicios de respiración diafragmática,
      los cuales permiten al cuerpo oxigenarse
      mejor y adaptarse a un estado más moderado de activación fisiológica.
      Es ideal para los momentos de estrés.`,
      store: ["Google Play: Breathe2Relax", "App Store: Breathe2Relax"]
    },
    {
      image: Whatsup,
      title: "What's up?",
      description: `Esta es una completa herramienta de ansiedad que incluye
      audios de relajación, juegos, un diario y un sistema
      de autorregistro. Todas estas funciones convierten esta app en una
      potente aliada contra este tipo de malestar psicológico.
      Eso sí, recuerda que no sustituye la terapia psicológica.`,
      store: ["Google Play: What's up?"]
    },
    {
      image: Moods,
      title: "Moods",
      description: `De un modo similar a como lo hacen el resto de aplicaciones,
      Moods permite llevar un registro del modo en el
      que el estado de ánimo va evolucionando a lo largo del
      día y de la semana. No solo se centra en las sensaciones vinculadas
      a la ansiedad, dado que invita a dejar
      constancia de cualquier tipo de emocionalidad negativa:
      estrés, tristeza, etc`,
      store: ["Google Play: Moods"]
    },
  ]

  return (
    <main className="content recommendations">
      <div className="recommendations__main">
        <div className="recommendations__description">
          <div className="circle"></div>
          <p>
            La música contribuye a relajar tu cuerpo, otro elemento sumamente
            importante para hacerle frente a la ansiedad en la vida diaria. Las
            vibraciones que produce la música en nuestros cuerpos pueden incluso
            reequilibrar el sistema inmunológico y acabar con bloqueos
            emocionales y con los conflictos que llevan a la ansiedad.
          </p>
          <p>
            Es por eso que creamos una playlist con algunas canciones que te
            ayudaran a la relajación.
          </p>
          <a
            href="https://open.spotify.com/playlist/1zlspe878Va2AwncBymAXp?si=5JqRvC3iQAKSD0KW9ynKGA"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://open.spotify.com/playlist/1zlspe878Va2AwncBymAXp?si=5JqRvC3iQAKSD0KW9ynKGA
          </a>
        </div>
        <iframe
          src="https://open.spotify.com/embed/playlist/1zlspe878Va2AwncBymAXp?utm_source=generator"
          frameBorder="0"
          loading="lazy"
        ></iframe>
      </div>
      <section className="recommendations__grid">
        <div className="recommendations__grid--title">
          <div className="circle"></div>
          <h3>Apps contra la ansiedad</h3>
          <p>
            Se trata de apps contra la ansiedad que puedes descargar en tu
            smartphone con apenas algunos clics.
            <strong>
              Debes tener claro que NO sustituyen la psicoterapia y en todo caso
              la complementan o sirven para mitigar síntomas poco intensos y que
              aún no dañan significativamente tu calidad de vida.
            </strong>
          </p>
        </div>
        <div className="recommendations__grid--items">
          {
            list_recommendations.map((item, index) => (
              <div key={index} className="recommendations__grid--item">
                <figure>
                  <img src={item.image} alt={item.title} width="60" />
                </figure>
                <h4>{item.title}</h4>
                <p>
                  {item.description}
                </p>
                {
                  item.store.map((item, index) => (
                    <p key={index + 10}>
                      {item}
                    </p>
                  ))
                }
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}
