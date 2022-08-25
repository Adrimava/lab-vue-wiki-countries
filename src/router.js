import { createRouter, createWebHistory } from 'vue-router';
import CountriesList from './components/CountriesList.vue';
import CountryDetails from './components/CountryDetails.vue';

const routes = [
  {
    path: '/',
    name: 'list',
    component: CountriesList,
    children: [
      {
        path: 'details/:id',
        name: 'details',
        component: CountryDetails
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;