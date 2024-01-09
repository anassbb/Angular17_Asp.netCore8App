import { Books } from './../models';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface GetAllBooks {
  getAll(): Observable<Books>;
}

export const inMemoryGetAllBooks: GetAllBooks = {
  getAll: () => {
    const table: Books = [
      {
        id: 1,
        titre: 'Dune',
        author: {
          name: 'Franck herbert',
        },
      },
    ];
    return of(table).pipe(delay(1500));
  },
};

export const mockingFactory = () => inMemoryGetAllBooks;

@Injectable({
  providedIn: 'root',
  useFactory: mockingFactory,
})
export class GetAllBooksInfrastructure implements GetAllBooks {
  getAll(): Observable<Books> {
    throw new Error('Method not implemented.');
  }
}
