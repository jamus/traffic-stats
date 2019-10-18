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
  { path: '/list/:id(\\d+)',
    component: thecountPointListView,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: '', component: viewNotFound },
      
      // UserProfile will be rendered inside User's <router-view>
      // when /user/:id/profile is matched
      { path: 'detail',
        name: 'countPointDetail',
        component: theCountPointDetailView, 
        props(route) {
        const props = { ...route.params };
        props.id = Number(props.id);
        return props;
      } },
    ]
  },
  { path: '/page-not-found', component: viewNotFound },
  { path: '*', redirect: '/page-not-found' }
];
