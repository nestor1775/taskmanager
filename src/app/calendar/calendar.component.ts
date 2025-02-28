import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [
      NgFor
    ]
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();  // Guardamos la fecha actual para la navegación
  days: number[] = [];  // Para almacenar los días del mes actual

  constructor() {}

  ngOnInit() {
    this.generateCalendar();
  }

  // Genera el calendario basado en el mes y año actuales
  generateCalendar() {
    const currentMonth = this.currentDate.getMonth();  // Obtener el mes actual
    const currentYear = this.currentDate.getFullYear();  // Obtener el año actual

    // Obtener el primer día del mes (para la alineación en la grilla)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    // Obtener el último día del mes
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    
    const totalDaysInMonth = lastDayOfMonth.getDate();  // Total de días en el mes actual

    // Crear el arreglo con los días del mes
    this.days = [];
    for (let i = 1; i <= totalDaysInMonth; i++) {
      this.days.push(i);
    }
  }

  // Método para ir al mes anterior
  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);  // Restamos un mes
    this.generateCalendar();  // Regeneramos el calendario
  }

  // Método para ir al siguiente mes
  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);  // Sumamos un mes
    this.generateCalendar();  // Regeneramos el calendario
  }

  // Método para obtener el nombre del mes
  getMonthName(): string {
    const currentMonth = this.currentDate.getMonth();
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return months[currentMonth] + ' ' + this.currentDate.getFullYear();
  }
}
