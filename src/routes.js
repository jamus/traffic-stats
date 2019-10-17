import thecountPointListView from '@/views/thecountPointListView';
import theCountPointDetailView from '@/views/theCountPointDetailView';
import viewNotFound from '@/views/theViewNotFoundView';

export default [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'list' }
  },
  {
    path: '/list',
    name: 'list',
    component: thecountPointListView
  },
  { path: '/:id(\\d+)',
    name: 'propertyDetail',
    props(route) {
      const props = { ...route.params };
      props.id = Number(props.id);
      return props;
    },
    component: theCountPointDetailView
  },
  { path: '/page-not-found', component: viewNotFound },
  { path: '*', redirect: '/page-not-found' }
];
