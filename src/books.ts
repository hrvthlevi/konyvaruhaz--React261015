export interface Book{
    id: number
    title: string
    author: string
    price: number
}

export const BookList: Book[] = [
   {
    id: 1,
    title: "A Pál utcai fiúk",
    author: "Molnár Ferenc",
    price: 1220,
  },
  {
    id: 2,
    title: "Egri csillagok",
    author: "Gárdonyi Géza",
    price: 1320,
  },
  {
    id: 3,
    title: "Védett férfiak",
    author: "Robert Merle",
    price: 1420,
  },
  {
    id: 4,
    title: "Állati elmék",
    author: "Robert Merle",
    price: 2420,
  },
  {
    id: 5,
    title: "Malevil",
    author: "Robert Merle",
    price: 3420,
  },
];
