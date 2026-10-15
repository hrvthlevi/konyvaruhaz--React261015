import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BookList } from './books';

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <main>
        <header><h1>Könyváruház</h1></header>
        <article>
          <div>
            {BookList.map((book)=>(
              <div key={book.id}>
                <p>{book.author}</p>
                <p>{book.title}</p>
                <p>{book.price}</p>
              </div>
            ))}
          </div>
        </article>
      </main>
     </>
  )
}

export default App
