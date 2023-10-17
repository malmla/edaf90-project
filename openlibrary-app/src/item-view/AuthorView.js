import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";


function AuthorView () {
    const author = useLoaderData();
    return (
        <div>
            <div>
                <h2>{author.name}</h2>
            </div>
            <div className="row-cols-2 row">
                <div className="col border">
                    <h3>Bio, if available</h3>{author.bio}
                </div>
                <div className="col border row-cols-2 row">
                    <div className="col border">
                        <h3>Details, if available</h3>
                        {author.birth_date === "Field missing" ? <></> : <><b>Born:</b> {author.birth_date} <br/></>}
                        {author.death_date === "Field missing" ? <></> : <><b>Dead:</b> {author.death_date} <br/></>}
                        {author.fuller_name === "Field missing" ? <></> : <><b>Full name:</b> {author.fuller_name} <br/></>}
                    </div>
                    <div className="col border">
                        {/* kanske loader ist? vill egentligen ha fast storlek på carousel:n */}
                        <Carousel className="bg-dark">
                        {
                            author.photos
                            .filter(photo_id => {
                                return photo_id !== -1;
                            })
                            .map(photo_id => {
                                return ( 
                                <CarouselItem className="m-auto" key={photo_id}>
                                    <img
                                        src={"https://covers.openlibrary.org/a/id/" + photo_id + "-L.jpg"}
                                        alt={"Photo with photo_id " + photo_id + "of " + author.name}
                                    />
                                </CarouselItem>
                                )
                            })
                        }
                        </Carousel>
                    </div>
                    <div className="row border m-auto">
                        <ButtonGroup size="sm">
                            <Button variant="secondary">Subscribe to updates {/* förmodligen en idé att göra som egen komponent å den utnyttjas i authorview samt bookview */}</Button>
                            <Button variant="secondary">Tagged works {/* sökning på author-olid */}</Button>
                            <Button variant="secondary">Add to list {/* förmodligen en idé att göra som egen komponent å den utnyttjas i authorview samt bookview */}</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AuthorCarousel (props) {
    return (
        <>
            <Carousel className="bg-dark">
            <CarouselItem className="m-auto">
                    <img
                        src="https://covers.openlibrary.org/a/id/6433526-L.jpg "
                        alt=""
                    />
                
                </CarouselItem>
                <CarouselItem className="m-auto">
                    <img
                        src="https://covers.openlibrary.org/a/id/6433524-L.jpg "
                        alt=""
                    />
                </CarouselItem>
            </Carousel>
        </>
    );
}

export default AuthorView;