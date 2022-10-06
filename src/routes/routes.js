import { Home, Identification, Techniques, Recommendations, FirstAdd } from '../pages';
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
    path: '/primeros-auxilios',
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
    component: Recommendations
  }
]

export default routes;