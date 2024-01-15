import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ButtonModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {}
