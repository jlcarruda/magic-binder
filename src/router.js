import Vue from 'vue'
import Router from 'vue-router'
import TopBar from './components/TopBar'

//Components
import App from './App'
import MainPage from './pages/MainPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      component: App,
      children: [
        { path: '', component: MainPage }
      ]
    }
  ]
})