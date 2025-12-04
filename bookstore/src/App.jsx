import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'

function App() {
  return (
    <>
      <h1>my bookstore</h1>
      <BookList />
    </>
  );
}

export default App;
