import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TaskService } from '../services/task.service'; // ✅ Importamos el servicio

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [NgFor],
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  days: number[] = [];
  tasks: any[] = []; // ✅ Lista de tareas

  constructor(private taskService: TaskService) {} // ✅ Inyectamos el servicio

  ngOnInit() {
    this.tasks = this.taskService.getTasks(); // ✅ Obtenemos las tareas del servicio
    this.generateCalendar();
  }

  generateCalendar() {
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    this.days = Array.from({ length: lastDayOfMonth }, (_, i) => i + 1);
  }

  // ✅ Método para obtener las tareas de un día específico
  getTasksForDay(day: number): any[] {
    return this.tasks.filter(task => {
      const taskDate = new Date(task.dueDate);
      return taskDate.getDate() === day && taskDate.getMonth() === this.currentDate.getMonth();
    });
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  getMonthName(): string {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return months[this.currentDate.getMonth()] + ' ' + this.currentDate.getFullYear();
  }
}
