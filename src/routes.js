import welcomeHome from '@/views/theWelcomeView';
import viewNotFound from '@/views/theViewNotFoundView';

export default [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'welcome' }
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: welcomeHome
  },
  { path: '/404', component: viewNotFound },
  { path: '*', redirect: '/404' }
];
