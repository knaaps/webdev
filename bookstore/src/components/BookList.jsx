import Book from './Book'
import books from '../data/books'

const BookList = () => {
  console.log(books);
  
  return (
    <div className="gallery">
      {books.map((item) => (
        <Book key={item.id} book={item} />
      ))}
    </div>
  );
};
export default BookList