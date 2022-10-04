import { Home, Identificacion, PrimerosAuxilios, Tecnicas, Recomedaciones } from '../pages';
import { MainLayout } from '../layout';

const routes = [
  {
    path: '/',
    layout: MainLayout,
    component: Home
  },
  {
    path: '/identificacion',
    layout: MainLayout,
    component: Identificacion
  },
  {
    path: '/primerosAuxilios',
    layout: MainLayout,
    component: PrimerosAuxilios 
  },
  {
    path: '/tecnicas',
    layout: MainLayout,
    component: Tecnicas
  },
  {
    path: '/recomendaciones',
    layout: MainLayout,
    component: Recomedaciones
  }
]

export default routes;