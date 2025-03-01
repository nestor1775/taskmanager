import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TaskService } from '../services/task.service';  
import { MatDivider } from '@angular/material/divider';


interface Task {
  title: string;
  description: string;  
  dueDate: string;
  subject: string;
}

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
    { name: 'Matemáticas', color: '#faceff' },
    { name: 'Historia', color: '#fffdc8' },
    { name: 'Ciencias', color: '#bfffb6' },
    { name: 'Literatura', color: '#c8fffe' }
  ];

  
  tasks: Task[] = [];  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();  
  }

  getColor(subject: string): string {
    const subjectObj = this.subjects.find(s => s.name === subject);
    if (!subjectObj) {
      console.warn(`Color no encontrado para la materia: ${subject}`);
      return '#000'; 
    }
    return subjectObj.color;
  }
}
