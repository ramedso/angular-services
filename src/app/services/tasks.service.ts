import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  constructor() {}

  add(title: String) {
    this.tasks.push({ title });
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

  getList() {
    return this.tasks;
  }
}
