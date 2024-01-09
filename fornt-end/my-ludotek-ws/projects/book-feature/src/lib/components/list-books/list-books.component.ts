import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dtbc-list-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css',
})
export class ListBooksComponent {}
