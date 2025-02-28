import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { title: 'Tarea 1', dueDate: '2025-03-10', subject: 'Matemáticas', description: 'Descripción de la tarea 1' },
    { title: 'Tarea 2', dueDate: '2025-03-12', subject: 'Historia', description: 'Descripción de la tarea 2' },
    { title: 'Tarea 3', dueDate: '2025-03-15', subject: 'Ciencias', description: 'Descripción de la tarea 3' },
    { title: 'Tarea 4', dueDate: '2025-03-20', subject: 'Literatura', description: 'Descripción de la tarea 4' },
    { title: 'Tarea 4', dueDate: '2025-02-11', subject: 'Matemáticas', description: 'Descripción de la tarea 5' },
    { title: 'Tarea 4', dueDate: '2025-02-11', subject: 'Ciencias', description: 'Descripción de la tarea 5' }
  ];


  getTasks() {
    return this.tasks;
  }
}
