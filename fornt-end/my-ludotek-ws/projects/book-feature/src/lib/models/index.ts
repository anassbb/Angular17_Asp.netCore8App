export interface Author {
  name: string;
}

export interface Book {
  id: number;
  titre: string;
  author: Author;
}

export type Books = Book[];
