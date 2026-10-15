import { BookList } from "../books";
import { Konyv }from './Konyv'

function Aruhaz() {
  return(
  <main>
    <div>
        {BookList.map((book)=> (
            <Konyv book={book} key={book.id}/>
        )
        )}
    </div>
  </main>
  ) 
}
export default Aruhaz;
