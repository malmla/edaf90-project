import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useLoaderData } from "react-router-dom";

// const book = Book.dummybook();

function BookView() {
    const book = useLoaderData();

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
                            {/* ersättes med hantering av klick */}
                            <ButtonGroup size="sm">
                                <Button variant="secondary">Subscribe to updates{/* förmodligen en idé att göra som egen komponent å den utnyttjas i authorview samt bookview */}</Button>
                                <Button variant="secondary">Add to list{/* förmodligen en idé att göra som egen komponent å den utnyttjas i authorview samt bookview */}</Button>
                            </ButtonGroup>
                        </div>

                        <div className="border-bottom m-1 pb-2">
                            <h4>Author(s):</h4>
                            <Button href={book.author_key} variant='link'>{book.author_name}</Button>
                        </div>

                        <div className="border-bottom m-1 pb-2">
                            <h4>Edition details</h4>
                            <p>
                                Publish date: {book.publish_date}
                            </p>
                            <p>
                                Publisher: {book.publishers[0]}
                            </p>
                            {/* länk till works/olid */}
                            <Button variant="secondary" size="sm">See other editions</Button>
                            
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