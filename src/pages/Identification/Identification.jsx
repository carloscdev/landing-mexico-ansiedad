import ImageGirl from '../../assets/img/page2/girl.png';
import './Identification.css';

export function Identification() {

  const itemsBehaviors =[
    'Nerviosismo, agitación o tensión',
    'Respiración acelerada',
    'Sudoración',
    'Temblores',
    'Tics nerviosos',
    'Problemas de concentración',
    'Comportamiento pasivo y desmotivado',
    'Comportamiento disruptivo',
    'Malas calificaciones',
    'Faltas a clase'
  ];

  return (
    <main className='content identification'>
      <div className="identification__img">
        <img src={ImageGirl} alt="Imagen Niña Identificación" />
      </div>
      <div className="identification__description">
        <h2>Identificación</h2>
        <p>Un alumno con ansiedad expresa una
          serie de conductas que se pueden identi-
          ficar con la observación directa, el análisis
          y el rendimiento escolar.</p>
      </div>
      <div className="identification__behaviors">
        <h3>Conductas Ansiosas</h3>
        <div className='behaviors__container'>
          {itemsBehaviors.map(item=>(
            <div className="behaviors__container--item">
              <div className='container__item--hover'>
                  <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
