import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { UserListComponent } from './app/pages/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  template: `<app-user-list></app-user-list>`,
  styleUrls: ['./styles.scss'],
})
export class App {}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
