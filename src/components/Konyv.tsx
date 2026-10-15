import type { Book } from '../books'

interface KonyvProps{
    book: Book
}
export function Konyv({ book }: KonyvProps) {
    return(
    <div className="konyv">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.price}</p>
    </div>
    )
}