import { useParams } from 'react-router-dom';

function SearchPage() {
  const { text } = useParams();

  return (
    <div>
      You searched: {text}
    </div>
  );
}

export default SearchPage;