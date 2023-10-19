import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import { Book } from '../../dataClasses';
import BookCard from '../BookCard';
import './styles.css';

function SearchPage() {
  const { text } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);

  useEffect(() => {
    const fetchResult = async () => {
      setFetchingData(true);
      let list = await Book.search(text)
      list = list.filter(b => b.coverLink !== "No cover found"); //for demo purposes
      setFetchingData(false);
      setSearchResult(list);
      console.log(list);
    };

    if (text) fetchResult();
  }, [text])



  return (
    <div>
      {fetchingData ?
        <Spinner animation="border" role="status" className="mt-1">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        :
        <BookItems books={searchResult} />
      }
    </div>
  );
}

function BookItems(props) {
  const { books } = props;

  const Books = books.map((book, index) => (
    <BookCard book={book} key={"book" + index} />
  ));

  return (
    <div className="book-grid">
      {Books}
    </div>
  )
}

export default SearchPage;