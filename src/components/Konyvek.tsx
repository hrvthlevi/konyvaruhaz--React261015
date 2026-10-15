import { BookList } from "../books";
import { Konyv } from "./Konyv";

function Konyvek() {
  return (
    <div>
      {BookList.map((book) => (
        <Konyv book={book} key={book.id} />
      ))}
    </div>
  );
}
export default Konyvek;
