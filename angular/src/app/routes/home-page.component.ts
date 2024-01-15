import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, inject, signal } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { injectQuery } from '@tanstack/angular-query-experimental'
import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import { lastValueFrom } from 'rxjs'

interface Todo {
  id: string
  title: string
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ButtonModule, MenubarModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private http = inject(HttpClient)

  count = signal(0)
  menuBarItems = [
    {
      label: 'Test1',
    },
    {
      label: 'Test2',
    },
  ]

  query = injectQuery(() => ({
    queryKey: ['test'],
    queryFn: () =>
      lastValueFrom(this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')),
  }))

  incr() {
    this.count.update((n) => n + 1)
  }
  decr() {
    this.count.update((n) => n - 1)
  }
}
