import { Home, Identification, Techniques, Recomedaciones, FirstAdd } from '../pages';
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
    component: FirstAdd
  },
  {
    path: '/tecnicas',
    layout: MainLayout,
    component: Techniques
  },
  {
    path: '/recomendaciones',
    layout: MainLayout,
    component: Recomedaciones
  }
]

export default routes;