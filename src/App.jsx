import { useState } from 'react'
// import './App.css'
import Movies from './Components/Movies/Movies'
import Actors from './Components/Actors/Actors'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './Components/Search/Search'
import Signup from './Components/Signup/Signup'
import BooksLibrary from './Components/BooksLibrary/BooksLibrary'
import BookDetail from './Components/BookDetail/BookDetail'





function App() {

  return (

    <div>


      <BrowserRouter>
        {/* <Search /> */}
        <Routes>
          <Route path="/actors" element={<Actors />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/books" element={<BookDetail />} />
          <Route path="/add-book" element={<BooksLibrary />} />



        </Routes>

      </BrowserRouter>
    </div>

  )
}

export default App
