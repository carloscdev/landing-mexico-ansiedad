import { Home, Identificacion } from '../pages';
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
  }
]

export default routes;