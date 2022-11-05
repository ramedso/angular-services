import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimerComponent } from './components/timer/timer.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TimerService } from './services/timer.service';
import { TasksService } from './services/tasks.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'timer', component: TimerComponent }
    ),
  ],
  declarations: [AppComponent, HomeComponent, TimerComponent, TasksComponent],
  bootstrap: [AppComponent],
  providers: [TimerService, TasksService],
})
export class AppModule {}
