import { provideHttpClient } from '@angular/common/http'
import { provideRouter } from '@angular/router'
import { QueryClient, provideAngularQuery } from '@tanstack/angular-query-experimental'

import { routes } from './app.routes'

import type { ApplicationConfig } from '@angular/core'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAngularQuery(new QueryClient()), provideHttpClient()],
}
