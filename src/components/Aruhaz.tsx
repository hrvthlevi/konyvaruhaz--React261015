import { BookList } from "../books";

function Aruhaz() {
  return(
  <main>
    <div>
        {BookList.map((book)=> (
            <div key={book.id}>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.price}</p>
            </div>
        )
        )}
    </div>
  </main>
  ) 
}
export default Aruhaz;
