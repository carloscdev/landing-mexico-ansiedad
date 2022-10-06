import './FirstAid.css';
import ImageDoctor from '../../assets/img/page3/doctor.png';
import ImageBoy from '../../assets/img/page3/boyHelp.png';

export const FirstAdd = () => {
  return (
    <main className="content firstAid">
      <div className="firstAid__header">
        <div className="firstAid__header--image">
          <img src={ImageDoctor} alt="" />
        </div>
        <div className="firstAid__header--text">
          <h2>Primeros Auxilios</h2>
          <p>¿Qué hacer ante una crisis de ansiedad en el salón de clases?</p>
        </div>
        <div className="firstAid__header--phones">
          <div className="first__phones">
            <p>Servicio médico UAM Azcapotzaico</p>
            <p>55 5318-9280</p>
          </div>
          <div className="first__phones">
            <p>Servicio civil UAM Azcapotzaico</p>
            <p>55 5318-9545</p>
          </div>
          <div className="first__phones">
            <p>Emergencias</p>
            <p>066</p>
          </div>
        </div>
      </div>
      <div className="firstAid__body">
        <div className="firstAid__body--information">
          <div className="firstAid__information--items">
            <div className="firstAid__item--one">
              <div className="firstAid__one--circle"></div>
              <p>Permanece con el alumno y mantén la calma</p>
            </div>
            <div className="firstAid__item--two">
              <div className="firstAid__two--circle"></div>
              <p>Comunicarse de inmediato al servicio médico de la universidad</p>
            </div>
            <div className="firstAid__item--three">
              <div className="firstAid__three--circle"></div>
              <p>Mostrar empatía</p>
            </div>
          </div>
          <div className="firstAid__information--description">
            <p>Lo primero que debemos entender es que estamos ahí para acompañar a la persona, no para aconsejarla ni juzgarla. Ayudar a una persona que tiene ansiedad exige mucha empatía.</p>
            <br />
            <p>Omitir cualquier consejo y comentarios como “ya contrólate” ó “pórtate bien” no son necesarios.</p>
            <br />
            <p>Por otro lado, estos son algunos comentarios que se recomienda decir:</p><br />
            <ul>
              <li>Esto es algo que a muchas personas les pasa.</li>
              <li>No tengas vergüenza.</li>
              <li>Si quieres llorar o gritar estoy aquí para ti.</li>
              <li>¿Puedo hacer algo para ayudarte?</li>
              <li>¿Necesitas que te traiga algo?</li>
              <li>Tú puedes con todo.</li>
            </ul>
            <br />
            <p>Tenemos que ser conscientes de que la otra persona está pasando una experiencia completamente diferente a la tuya. Lo mejor que puedes hacer es ser es empático.</p>
          </div>
          <div className="firstAid__information--suggets">
            <div className="firstAid__suggets--circle"></div>
            <p>Si tienes algún conocimiento de técnicas de relajación y ejercicios de respiración, puedes sugerir alguna de estas acciones.</p>
          </div>
        </div>
        <div className="firstAid__body--image">
          <img src={ImageBoy} alt="Niño con ansiedad" />
        </div>
      </div>
      <div className="firstAid__footer">
        <div className="firstAid__footer--remember">
          <h3>Recuerda que estos pasos se pueden ejercer entre el lapso de la crisis y la llegada del personal médico, después de esto es mejor que el personal medico se encargue de la situación.</h3>
        </div>
        <div className="firstAid__footer--contact">
          <div className="firstAid__contact--important">
            <p>Es muy importante darle a conocer a los alumnos los servicios psicológicos con los que cuenta la universidad.</p>
          </div>
          <div className="firstAid__contact--item item2">
              <h3>Apoyo psicológico, Línea UAM.</h3>
              <h3>Nuevas líneas telefónicas de atención:</h3>
              <p>55 25 55 80 92</p>
              <p>55 58 04 48 79</p>
              <p>55 58 04 64 44</p>
              <p>https://www.lineauam.mx</p>
          </div>
          <div className="firstAid__contact--item item3">
            <h3>Correo de ayuda "Yo puedo sentirme bien"</h3>
            <p>salud.mental@correo.uam.mx</p>
          </div>
          <div className="firstAid__contact--item item4">
            <h3>Facebook</h3>
            <h3>Bienestar Comunitario <br /> UAM</h3>
            <p>https://www.facebook.com/BienestarComunitarioUAM/</p>
          </div>
        </div>
      </div>
    </main>
  )
}