import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const quote = `Originally published from 1954 through 1956, J.R.R. Tolkien's richly complex series ushered in a new age of epic adventure storytelling. A philologist and illustrator who took inspiration from his work, Tolkien invented the modern heroic quest novel from the ground up, creating not just a world, but a domain, not just a lexicon, but a language, that would spawn countless imitators and lead to the inception of the epic fantasy genre. Today, THE LORD OF THE RINGS is considered "the most influential fantasy novel ever written." (THE ENCYCLOPEDIA OF FANTASY)
During his travels across Middle-earth, the hobbit Bilbo Baggins had found the Ring. But the simple band of gold was far from ordinary; it was in fact the One Ring - the greatest of the ancient Rings of Power. Sauron, the Dark Lord, had infused it with his own evil magic, and when it was lost, he was forced to flee into hiding.
But now Sauron's exile has ended and his power is spreading anew, fueled by the knowledge that his treasure has been found. He has gathered all the Great Rings to him, and will stop at nothing to reclaim the One that will complete his dominion. The only way to stop him is to cast the Ruling Ring deep into the Fire-Mountain at the heart of the land of Mordor--Sauron's dark realm.
Fate has placed the burden in the hands of Frodo Baggins, Bilbo's heir...and he is resolved to bear it to its end. Or his own. `;

function BookView() {
    return (
        <>
            <div className="">
                <div className="my-2 border border-5 border-top-0 border-start-0 border-end-0 border-bottom border-primary">
                    {/* ersättes med fetch av titel */}
                    <h2>The Lord of the Rings</h2>
                </div>

                <div className="row-cols-2 row">
                    <div className="col-5 m-3">
                        {/* ersättes med fetch av cover */}
                        <img className="mh-auto" src="https://covers.openlibrary.org/b/id/9255566-L.jpg" alt="Cover for book with id 9255566"/> 
                    </div>

                    <div className="col px-3 border-start">
                        <div className="border-bottom m-1 pb-2">
                            {/* ersättes med hantering av klick */}
                            <ButtonGroup size="sm">
                                <Button variant="secondary">Subscribe to updates</Button>
                                <Button variant="secondary">Add to list</Button>
                            </ButtonGroup>
                        </div>

                        <div className="border-bottom m-1 pb-2">
                            <h4>Author(s):</h4>
                            {/* ersättes med fetch av författare */}
                            <Button variant='link'>JRRR Tolkien</Button>
                        </div>

                        <div className="border-bottom m-1 pb-2">
                            <h4>Edition details</h4>
                            {/* ersättes med fetch av info */}
                            <p>
                                Publish date: 1974
                            </p>
                            <p>
                                Publisher: Houghton Mifflin
                            </p>
                            <Button variant="secondary" size="sm">See other editions</Button>
                            
                        </div>

                        <div className="">
                            <h4>Description</h4>
                            {/* ersättes med fetch av beskrivning */}
                            <p>
                                {quote}
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default BookView;