import { Home, Identification, PrimerosAuxilios, Techniques, Recommendations } from '../pages';
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
    component: Techniques
  },
  {
    path: '/recomendaciones',
    layout: MainLayout,
    component: Recommendations
  }
]

export default routes;