import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [
    NgFor,
    MatCardModule,
    MatDivider
  ]
})
export class TasksComponent implements OnInit {


  subjects = [
    { name: 'Matemáticas', color: '#faceff  ' },
    { name: 'Historia', color: '#fffdc8 ' },
    { name: 'Ciencias', color: '#bfffb6' },
    { name: 'Literatura', color: '#c8fffe ' }
  ];


  tasks = [
    {
      title: 'Tarea 1',
      description: 'Esta es la descripción de la tarea 1.',
      dueDate: '2025-03-10',
      subject: 'Matemáticas' 
    },
    {
      title: 'Tarea 2',
      description: 'Esta es la descripción de la tarea 2.',
      dueDate: '2025-03-12',
      subject: 'Historia'
    },
    {
      title: 'Tarea 3',
      description: 'Esta es la descripción de la tarea 3.',
      dueDate: '2025-03-15',
      subject: 'Ciencias'
    },
    {
      title: 'Tarea 4',
      description: 'Esta es la descripción de la tarea 4.',
      dueDate: '2025-03-20',
      subject: 'Literatura' 
    },
    {
      title: 'Tarea 5',
      description: 'Esta es la descripción de la tarea 5.',
      dueDate: '2025-03-25',
      subject: 'Ciencias' 
    },
    {
      title: 'Tarea 6',
      description: 'Esta es la descripción de la tarea 5.',
      dueDate: '2025-03-25',
      subject: 'Ciencias' 
    },
    {
      title: 'Tarea 7',
      description: 'Esta es la descripción de la tarea 5.',
      dueDate: '2025-03-25',
      subject: 'Ciencias' 
    },
    {
      title: 'Tarea 8',
      description: 'Esta es la descripción de la tarea 5.',
      dueDate: '2025-03-25',
      subject: 'Ciencias' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  getColor(subject: string): string {
    const subjectObj = this.subjects.find(s => s.name === subject);
    return subjectObj ? subjectObj.color : '#000'; // Retorna el color de la materia o negro por defecto
  }

}
