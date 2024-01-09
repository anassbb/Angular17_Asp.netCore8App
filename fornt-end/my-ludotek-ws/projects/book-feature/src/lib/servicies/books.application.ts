import { Injectable, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Books } from '../models';
import { GetAllBooksInfrastructure } from './books.infrastructure';

@Injectable({
  providedIn: 'root',
})
export class GetAllBooksApplication {
  private readonly api = inject(GetAllBooksInfrastructure);
  private readonly getAllBooks$ = this.api.getAll().pipe(shareReplay(1));

  getAll(): Observable<Books> {
    return this.getAllBooks$;
  }
}
