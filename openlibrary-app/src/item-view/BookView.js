import Button from "react-bootstrap/Button";
import {useLoaderData} from "react-router-dom";
import ListModal from "../components/ListModal";

// const book = Book.dummybook();

function BookView() {
    const book = useLoaderData();
    const lists = useContext(ListContext);
    const dispatches = useContext(ListDispatchContext);
    //console.log(book);
    return (
        <>
            <div className="">
                <div className="my-2 border border-5 border-top-0 border-start-0 border-end-0 border-bottom border-primary">
                    <h2>{book.title}</h2>
                </div>

                <div className="row-cols-2 row">
                    <div className="col-5 m-3">
                        <img className="mh-auto" src={"https://covers.openlibrary.org/b/id/" + book.covers[0] + "-L.jpg"}
                        alt={"Cover for book with id " + book.covers[0]}/> 
                    </div>

                    <div className="col px-3 border-start">
                        <div className="border-bottom m-1 pb-2">
                            <ListModal objKey={book.key} title={book.title} />    
                        </div>

                        <div className="border-bottom m-1 pb-2">
                            <h4>Author(s):</h4>
                            {
                                book.authors.map( author => {
                                    return( <Button href={author.key} key={author.key} variant='link'>{author.name}</Button>)
                                })
                            }
                            
                        </div>

                        <div className="border-bottom m-1 pb-2">
                            <h4>Edition details</h4>
                            <b>Publish date:</b> {book.publish_date} <br/>
                            <b>Publisher:</b> {book.publishers[0]} <br/>
                            {/* länk till works/olid */}
                            <Button href={book.work_key} variant="secondary" size="sm">See other editions</Button>
                            
                        </div>

                        <div className="">
                            <h4>Description</h4>
                            <p>
                                {book.description}
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default BookView;