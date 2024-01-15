import { HomePageComponent } from './routes/home-page.component'
import { LoginPageComponent } from './routes/login-page.component'

import type { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginPageComponent,
  },
]
