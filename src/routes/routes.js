import { Home, Identification, PrimerosAuxilios, Tecnicas, Recomedaciones } from '../pages';
import { MainLayout } from '../layout';

const routes = [
  {
    path: '/',
    layout: MainLayout,
    component: Home
  },
  {
    path: '/identification',
    layout: MainLayout,
    component: Identification
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