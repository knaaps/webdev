import '../styles/Book.css'

const Book = (props) => {
  const { title, author, img, genre } = props.book;
  
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>by {author}</p>
      <p>{genre}</p>
    </div>
  );
};

export default Book